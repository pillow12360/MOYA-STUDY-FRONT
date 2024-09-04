import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_ROUTES } from '@src/config/apiConfig';

interface User {
  name: string;
  email: string;
  role: 'USER' | 'ADMIN' | 'MANAGER';
  profilePictureUrl: '';
}

interface AuthState {
  user: User | null;
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  status: 'idle',
  error: null,
};

// 로그인 액션
export const signinUser = createAsyncThunk<
  { user: User; token: string }, // 성공 시 반환값의 타입
  { email: string; password: string }, // 액션 생성 함수에 전달되는 인자의 타입
  { rejectValue: string } // 실패시 반환되는 에러의 타입
>(API_ROUTES.SIGNIN, async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(API_ROUTES.SIGNIN, credentials, { withCredentials: true });
    const { token } = response.data;

    localStorage.setItem('jwtToken', token); //토큰 localStorage 저장

    const userInfoResponse = await axios.get<User>(API_ROUTES.USER, {
      // jwt 토큰을 활용하여 사용자 정보 조회
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { user: userInfoResponse.data, token };
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

const authSlice = createSlice({
  // 슬라이스 정의 함수 (슬라이스 : 상태와 상태를 관리하는 리듀서 함수들을 묶어 둔 것)
  name: 'auth', // 슬라이스 이름
  initialState, // 슬라이스 초기 상태
  reducers: {
    // 리듀서 : 상태를 직접 변경하는 함수
    logout: (state) => {
      localStorage.removeItem('jwtToken');
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signinUser.pending, (state) => {
        // pending : signinUser 액션이 디스패치되었을 때 , 로그인 요청이 시작 되었을 때 호출 됨
        state.status = 'loading';
      })
      .addCase(signinUser.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.status = 'succeeded'; // fulfilled : 액션이 성공적으로 완료되었을 때 호출 됨
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signinUser.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed'; // rejected : 액션 실패 시
        state.error = action.payload || '로그인 실패';
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
