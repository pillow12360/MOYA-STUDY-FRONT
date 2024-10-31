import { Box, Avatar, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: 72,
  height: '100%',
  backgroundColor: theme.palette.background.default,
}));

const ServerAvatar = styled(Avatar)(({ theme }) => ({
  width: 48,
  height: 48,
  backgroundColor: 'white',
  borderRadius: theme.spacing(1.5),
  margin: theme.spacing(2, 0),
  cursor: 'pointer',
  transition: 'all 0.2s',
  '&:hover': {
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  },
}));

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Box display="flex" flexDirection="column" alignItems="center">
        <ServerAvatar src="/api/placeholder/48/48" />
        <Divider flexItem />
        <ServerAvatar src="/api/placeholder/48/48" />
        <ServerAvatar src="/api/placeholder/48/48" />
      </Box>
    </SidebarContainer>
  );
};

export default Sidebar;