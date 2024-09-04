import * as React from 'react';
import { Avatar, Menu, MenuItem, IconButton, Typography, Collapse, CardContent } from '@mui/material';
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

      <Collapse in={Boolean(anchorEl)} timeout="auto" unmountOnExit>
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
          <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
            이메일 : {user?.email || 'Unknown'}
          </Typography>
          <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
            <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
              Profile
            </Typography>
          </MenuItem>
          <MenuItem component={Link} to="/settings" onClick={handleMenuClose}>
            <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
              Settings
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
              Logout
            </Typography>
          </MenuItem>
        </CardContent>
      </Collapse>
    </div>
  );
}

export default UserMenu;
