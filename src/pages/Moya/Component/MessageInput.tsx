import { Box, Typography, IconButton, Avatar } from '@mui/material';
import { Gif, InsertEmoticon, Image } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import React from 'react';

const InputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  backgroundColor: '#ebedef',
  margin: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));

const MessageInput = () => {
  return (
    <InputContainer>
      <IconButton size="small">
        <Avatar src="/api/placeholder/32/32" sx={{ width: 24, height: 24 }} />
      </IconButton>
      <Box flexGrow={1} display="flex" alignItems="center" pl={1}>
        <Typography variant="body1" color="text.secondary">
          Message #general
        </Typography>
      </Box>
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
  );
};

export default MessageInput;