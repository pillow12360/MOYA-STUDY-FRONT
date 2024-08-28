import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  name: string;
  email: string;
  role: 'USER' | 'ADMIN' | 'MANAGER';
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
  { user: User; token: string },
  { email: string; password: string },
  { rejectValue: string }
>('auth/signinUser', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://3.39.12.17:8080/api/auth/signin', credentials);
    const { token } = response.data;

    localStorage.setItem('jwtToken', token);

    const userInfoResponse = await axios.get<User>('http://3.39.12.17:8080/api/auth/user-info', {
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
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('jwtToken');
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signinUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signinUser.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signinUser.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed';
        state.error = action.payload || '로그인 실패';
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
