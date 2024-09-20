import * as React from 'react';
import { PaletteMode } from '@mui/material';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@store/Store'; // Redux 스토어에서 RootState를 가져옵니다.
import { logout } from '@store/slices/AuthSlice'; // 로그아웃 액션을 가져옵니다.
import UserMenu from './UserMenu';

interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function AppAppBar({ mode, toggleColorMode }: AppAppBarProps) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleLogout = () => {
    dispatch(logout()); // 로그아웃 액션을 디스패치합니다.
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            {/* 프로젝트 이름: 중앙 정렬 */}
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  textDecoration: 'none',
                  color: 'primary.main',
                  fontWeight: 'bold',
                }}
              >
                ICT
              </Typography>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: { xs: 'right', md: 'flex-start' },
              }}
            >
              <MenuItem component={Link} to="/">
                Home
              </MenuItem>
              <MenuItem component={Link} to="/dashboard">
                DashBoard
              </MenuItem>
              <MenuItem component={Link} to="/randomvoicechat">
                Random Voice Chat
              </MenuItem>
              <MenuItem component={Link} to="/calendar">
                Calendar
              </MenuItem>
            </Box>

            {/* 사용자 메뉴 및 로그인 버튼: 오른쪽에 위치 */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              {user ? (
                <UserMenu />
              ) : (
                <>
                  <Button color="primary" variant="text" size="small" component={Link} to="/signin">
                    Login
                  </Button>
                </>
              )}
            </Box>

            {/* 햄버거 메뉴 버튼 (오른쪽) - 다크/라이트 모드에 맞게 색상 변경 */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                edge="end"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{
                  color: 'primary.main',
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* 오른쪽에 있는 Drawer */}
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  minWidth: '60dvw',
                  p: 2,
                  backgroundColor: 'background.paper',
                  flexGrow: 1,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'end',
                    flexGrow: 1,
                  }}
                >
                  <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                </Box>
                {/* Drawer 메뉴를 react-router-dom의 Link 컴포넌트로 변경 */}
                <MenuItem component={Link} to="/">
                  Home
                </MenuItem>
                <MenuItem component={Link} to="/project">
                  Project
                </MenuItem>
                <MenuItem component={Link} to="/swagger">
                  Swagger
                </MenuItem>
                <MenuItem component={Link} to="/dashboard">
                  DashBoard
                </MenuItem>
                <MenuItem component={Link} to="/jira">
                  Jira
                </MenuItem>
                <MenuItem component={Link} to="/slack">
                  SLACK
                </MenuItem>
                <MenuItem component={Link} to="/about">
                  About
                </MenuItem>
                <MenuItem component={Link} to="/contact">
                  Contact
                </MenuItem>
                <Divider />
                {user ? (
                  <MenuItem>
                    <UserMenu />
                  </MenuItem>
                ) : (
                  <>
                    <MenuItem>
                      <Button color="primary" variant="outlined" component={Link} to="/signin" sx={{ width: '100%' }}>
                        Login
                      </Button>
                    </MenuItem>
                  </>
                )}
              </Box>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
