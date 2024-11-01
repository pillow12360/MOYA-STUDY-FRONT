import React from 'react';
import { Box, Typography, IconButton, Divider, TextField, InputAdornment } from '@mui/material';
import { Search, Settings, Mic, Headset, ExitToApp, Tag } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import MessageInput from './MessageInput';

const ChatContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  height: '100vh',
  backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#36393f',
  display: 'flex',
  flexDirection: 'column',
}));

const ChatHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 16px',
  minHeight: '48px',
  boxSizing: 'border-box',
});

const ChatContent = styled(Box)({
  flex: 1,
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#888',
    borderRadius: '4px',
  },
});

const MainChatArea = () => {
  return (
    <ChatContainer>
      <ChatHeader>
        <Box display="flex" alignItems="center" gap={1}>
          <Tag fontSize="small" />
          <Typography variant="subtitle1" fontWeight="bold">
            general
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <TextField
            size="small"
            placeholder="Search"
            sx={{ width: 200 }}
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
      <ChatContent />
      <MessageInput />
    </ChatContainer>
  );
};

export default MainChatArea;