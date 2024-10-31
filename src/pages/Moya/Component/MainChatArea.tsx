
import { Box, Typography, IconButton, Divider, TextField, InputAdornment } from '@mui/material';
import { Search, Settings, Mic, Headset, ExitToApp, Tag } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import MessageInput from './MessageInput';
import React from 'react';

const ChatContainer = styled(Box)(() => ({
  flex: 1,
  height: '100%',
  backgroundColor: 'white',
}));

const ChatHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  backgroundColor: 'white',
}));

const MainChatArea = () => {
  return (
    <ChatContainer>
      <Box display="flex" flexDirection="column" height="100%">
        <ChatHeader>
          <Box display="flex" alignItems="center">
            <IconButton size="small">
              <Tag />
            </IconButton>
            <Typography variant="h6" color="text.primary" fontWeight="bold">
              general
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <TextField
              size="small"
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
            <IconButton size="small">
              <Settings />
            </IconButton>
            <IconButton size="small">
              <Mic />
            </IconButton>
            <IconButton size="small">
              <Headset />
            </IconButton>
            <IconButton size="small">
              <ExitToApp />
            </IconButton>
          </Box>
        </ChatHeader>
        <Divider />
        <Box flexGrow={1} />
        <MessageInput />
      </Box>
    </ChatContainer>
  );
};

export default MainChatArea;