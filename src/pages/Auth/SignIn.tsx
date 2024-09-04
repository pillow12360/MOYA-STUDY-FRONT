import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@store/Store'; // 스토어와 타입을 가져옵니다.
import { signinUser } from '@store/slices/AuthSlice'; // authSlice에서 signinUser 액션을 가져옵니다.

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      <Link color="inherit" href="/">
        ict-project
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {
  const [alertMessage, setAlertMessage] = React.useState<string | null>(null);
  const [alertSeverity, setAlertSeverity] = React.useState<'success' | 'error'>('success');

  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;

    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\S+$).{8,40}$/;
    if (!passwordRegex.test(password)) {
      setAlertMessage('비밀번호는 최소 8자, 최대 40자이며, 숫자, 대문자, 소문자 및 특수문자를 포함해야 합니다.');
      setAlertSeverity('error');
      return;
    }

    try {
      // Redux 액션 디스패치
      await dispatch(signinUser({ email, password }));

      if (authState.status === 'succeeded') {
        setAlertMessage('로그인 성공 잠시 후 메인화면으로 이동합니다.');
        setAlertSeverity('success');
      } else if (authState.status === 'failed') {
        setAlertMessage('로그인 실패: ' + authState.error);
        setAlertSeverity('error');
      }
    } catch (error) {
      console.error('로그인 오류:', error);
      setAlertMessage('로그인 실패 아이디 또는 비밀번호를 확인해주세요');
      setAlertSeverity('error');
    }
  };

  React.useEffect(() => {
    // 비동기적 dispatch 처리에 의한 상태 변경될 때 마다 알림 설정 useEffect
    if (authState.status === 'succeeded') {
      setAlertMessage('로그인 성공');
      setAlertSeverity('success');
    } else if (authState.status === 'failed') {
      setAlertMessage('로그인 실패: ' + authState.error);
      setAlertSeverity('error');
    }
  }, [authState.status, authState.error]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="이메일 주소"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="아이디 저장하기" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              로그인
            </Button>
            {alertMessage && (
              <Alert severity={alertSeverity} sx={{ mt: 2 }}>
                {alertMessage}
              </Alert>
            )}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  비밀번호 찾기
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {'아직 회원이 아니라면? 회원 가입'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
