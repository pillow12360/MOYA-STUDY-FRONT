import * as React from 'react';
import { Avatar, MenuItem, IconButton, Typography, Collapse, CardContent } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@store/Store'; // Redux 스토어에서 RootState를 가져옵니다.
import { logout } from '@store/slices/AuthSlice'; // 로그아웃 액션을 가져옵니다.
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const theme = useTheme();

  // 메뉴를 열고 닫기 위한 상태
  const isOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleMenuClose();
  };

  const getAvatarLetter = () => {
    if (user && user.name) {
      return user.name.charAt(0).toUpperCase();
    }
    return '';
  };

  // 외부 클릭 감지 후 메뉴 닫기
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (anchorEl && !anchorEl.contains(event.target as Node)) {
        handleMenuClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [anchorEl, isOpen]);

  return (
    <div>
      <IconButton onClick={handleMenuOpen}>
        <Avatar alt={user?.name}>
          {user?.profilePictureUrl ? (
            <img src={user.profilePictureUrl} alt={user.name} style={{ width: '100%', height: '100%' }} />
          ) : (
            getAvatarLetter()
          )}
        </Avatar>
      </IconButton>

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: theme.palette.background.default,
            borderRadius: '10px',
            boxShadow: theme.shadows[2],
            textAlign: 'center',
            color: theme.palette.text.primary,
            position: 'absolute', // Ensures it does not affect layout
            zIndex: 1300,
            top: '50px', // Adjust based on your needs
            right: '0px', // Adjust based on your needs
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            {user?.name || 'Guest'}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '10px' }}>
            {user?.role || 'Role Unknown'}
          </Typography>
          <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
            <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
              프로필
            </Typography>
          </MenuItem>
          <MenuItem component={Link} to="/settings" onClick={handleMenuClose}>
            <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
              세팅
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
              로그아웃
            </Typography>
          </MenuItem>
        </CardContent>
      </Collapse>
    </div>
  );
}

export default UserMenu;
