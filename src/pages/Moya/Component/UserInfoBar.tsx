
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import { Settings, Mic, Headset } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import React from 'react';

const UserBarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  backgroundColor: '#ebedef',
}));

const UserInfoBar = () => {
  return (
    <UserBarContainer>
      <Box display="flex" alignItems="center">
        <Avatar src="/api/placeholder/32/32" sx={{ width: 32, height: 32 }} />
        <Box ml={2}>
          <Typography variant="body1" fontWeight="medium">
            spencercamp
          </Typography>
          <Typography variant="body2" color="text.secondary">
            #6709
          </Typography>
        </Box>
      </Box>
      <Box display="flex" gap={1}>
        <IconButton size="small">
          <Settings />
        </IconButton>
        <IconButton size="small">
          <Mic />
        </IconButton>
        <IconButton size="small">
          <Headset />
        </IconButton>
      </Box>
    </UserBarContainer>
  );
};

export default UserInfoBar;