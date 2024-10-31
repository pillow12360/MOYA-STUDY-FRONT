
import { Box, Typography, IconButton, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Add, ExpandMore, Tag, VolumeUp, Settings } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import UserInfoBar from './UserInfoBar';
import React from 'react';

const ChannelContainer = styled(Box)(({ theme }) => ({
  width: 272,
  height: '100%',
  backgroundColor: '#f2f3f5',
}));

const ChannelHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  backgroundColor: '#f2f3f5',
}));

const ChannelList = () => {
  return (
    <ChannelContainer>
      <Box display="flex" flexDirection="column" height="100%">
        <ChannelHeader>
          <Typography variant="h6" color="text.primary" fontWeight="bold">
            Guild
          </Typography>
          <IconButton size="small">
            <ExpandMore />
          </IconButton>
        </ChannelHeader>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <ExpandMore fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="TEXT CHANNELS"
              primaryTypographyProps={{
                fontWeight: "bold",
                color: "text.secondary",
                variant: "body2",
              }}
            />
            <IconButton size="small">
              <Add fontSize="small" />
            </IconButton>
          </ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Tag fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="general"
              primaryTypographyProps={{
                color: "text.primary",
                variant: "body1",
              }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <VolumeUp fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="General"
              primaryTypographyProps={{
                color: "text.primary",
                variant: "body1",
              }}
            />
          </ListItemButton>
        </List>
        <Box flexGrow={1} />
        <UserInfoBar />
      </Box>
    </ChannelContainer>
  );
};

export default ChannelList;