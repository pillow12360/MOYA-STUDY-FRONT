import * as React from 'react';
import { useState, useEffect } from 'react';
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
import { RootState } from '@store/Store';
import { logout } from '@store/slices/AuthSlice';
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
    dispatch(logout());
  };

  // 스크롤 상태를 감지하여 투명도를 조정하기 위한 상태
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        // 모든 컨텐츠의 반투명도를 스크롤에 따라 조정
        opacity: Math.max(0.3, 1 - scrollY / 300), // 스크롤 값에 따라 투명도 변경 (최소 0.3)
        transition: 'opacity 0.3s ease',
      }}
    >
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
                MOYA
              </Typography>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: { xs: 'right', md: 'flex-start' },
              }}
            >
              <MenuItem component={Link} to="/tldraw">
                Tldraw
              </MenuItem>
              <MenuItem component={Link} to="/moya">
                Moya
              </MenuItem>
            </Box>

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
                <Button color="primary" variant="text" size="small" component={Link} to="/signin">
                  Login
                </Button>
              )}
            </Box>

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
                <MenuItem component={Link} to="/tldraw">
                  Tldraw
                </MenuItem>

                <Divider />
                {user ? (
                  <MenuItem>
                    <UserMenu />
                  </MenuItem>
                ) : (
                  <MenuItem>
                    <Button color="primary" variant="outlined" component={Link} to="/signin" sx={{ width: '100%' }}>
                      Login
                    </Button>
                  </MenuItem>
                )}
              </Box>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default AppAppBar;