import React from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import { Settings, Mic, Headset } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const UserBarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px',
  backgroundColor: theme.palette.mode === 'light' ? '#ebedef' : '#292b2f',
  minHeight: '52px',
  boxSizing: 'border-box',
}));

const UserInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const UserActions = styled(Box)({
  display: 'flex',
  gap: '4px',
});

const UserInfoBar = () => {
  return (
    <UserBarContainer>
      <UserInfo>
        <Avatar
          src="/api/placeholder/32/32"
          sx={{ width: 32, height: 32 }}
        />
        <Box>
          <Typography variant="body2" fontWeight="medium">
            spencercamp
          </Typography>
          <Typography variant="caption" color="text.secondary">
            #6709
          </Typography>
        </Box>
      </UserInfo>
      <UserActions>
        <IconButton size="small">
          <Settings fontSize="small" />
        </IconButton>
        <IconButton size="small">
          <Mic fontSize="small" />
        </IconButton>
        <IconButton size="small">
          <Headset fontSize="small" />
        </IconButton>
      </UserActions>
    </UserBarContainer>
  );
};

export default UserInfoBar;