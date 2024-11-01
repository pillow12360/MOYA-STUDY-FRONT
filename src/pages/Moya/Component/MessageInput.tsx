import React from 'react';
import { Box, Typography, IconButton, Avatar } from '@mui/material';
import { Gif, InsertEmoticon, Image } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const InputWrapper = styled(Box)(({ theme }) => ({
  padding: '16px',
  backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#36393f',
}));

const InputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '0 16px',
  backgroundColor: theme.palette.mode === 'light' ? '#ebedef' : '#40444b',
  borderRadius: '8px',
  minHeight: '44px',
}));

const MessageInput = () => {
  return (
    <InputWrapper>
      <InputContainer>
        <Avatar
          src="/api/placeholder/32/32"
          sx={{ width: 24, height: 24 }}
        />
        <Typography
          color="text.secondary"
          sx={{ flex: 1, fontSize: '14px' }}
        >
          Message #general
        </Typography>
        <IconButton size="small">
          <Gif />
        </IconButton>
        <IconButton size="small">
          <Image />
        </IconButton>
        <IconButton size="small">
          <InsertEmoticon />
        </IconButton>
      </InputContainer>
    </InputWrapper>
  );
};

export default MessageInput;