import React from 'react';
import { Box, Typography, IconButton, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Add, ExpandMore, Tag, VolumeUp } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import UserInfoBar from './UserInfoBar';

const ChannelContainer = styled(Box)(({ theme }) => ({
  width: 272,
  height: '100vh',
  backgroundColor: theme.palette.mode === 'light' ? '#f2f3f5' : '#2f3136',
  display: 'flex',
  flexDirection: 'column',
}));

const ChannelHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  minHeight: '48px',
  boxSizing: 'border-box',
}));

const StyledList = styled(List)({
  flex: 1,
  overflowY: 'auto',
  padding: 0,
  '&::-webkit-scrollbar': {
    width: '4px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#888',
    borderRadius: '4px',
  },
});

const ChannelList = () => {
  return (
    <ChannelContainer>
      <ChannelHeader>
        <Typography variant="subtitle1" fontWeight="bold">
          Guild
        </Typography>
        <IconButton size="small">
          <ExpandMore />
        </IconButton>
      </ChannelHeader>
      <Divider />
      <StyledList>
        <ListItem
          sx={{
            px: 2,
            py: 1,
          }}
        >
          <ListItemIcon sx={{ minWidth: 32 }}>
            <ExpandMore fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="TEXT CHANNELS"
            primaryTypographyProps={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'text.secondary',
            }}
          />
          <IconButton size="small">
            <Add fontSize="small" />
          </IconButton>
        </ListItem>
        <ListItemButton sx={{ pl: 2 }}>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <Tag fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="general"
            primaryTypographyProps={{
              fontSize: '16px',
            }}
          />
        </ListItemButton>
        <ListItemButton sx={{ pl: 2 }}>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <VolumeUp fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="General"
            primaryTypographyProps={{
              fontSize: '16px',
            }}
          />
        </ListItemButton>
      </StyledList>
      <UserInfoBar />
    </ChannelContainer>
  );
};

export default ChannelList;
