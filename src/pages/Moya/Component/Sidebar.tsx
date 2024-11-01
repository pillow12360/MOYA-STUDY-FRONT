import React from 'react';
import { Box, Avatar, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: '72px',
  height: '100vh',
  backgroundColor: theme.palette.mode === 'light' ? '#e3e5e8' : '#202225',
  padding: '12px 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
}));

const ServerAvatar = styled(Avatar)(({ theme }) => ({
  width: 48,
  height: 48,
  backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#36393f',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    borderRadius: '16px',
    backgroundColor: theme.palette.primary.main,
  },
}));

const StyledDivider = styled(Divider)({
  width: '32px',
  margin: '4px 0',
});

const Sidebar = () => {
  return (
    <SidebarContainer>
      <ServerAvatar src="/api/placeholder/48/48" />
      <StyledDivider />
      <ServerAvatar src="/api/placeholder/48/48" />
      <ServerAvatar src="/api/placeholder/48/48" />
    </SidebarContainer>
  );
};

export default Sidebar;