import React from "react";
import { Box, Typography, IconButton, Avatar } from "@mui/material";
import { Gif, InsertEmoticon, Image } from "@mui/icons-material";

export const MessageInput = (): JSX.Element => {
  return (
    <Box display="flex" alignItems="center" px={2} py={1} bgcolor="#ebedef">
  <IconButton>
    <Avatar src="/div-icon.svg" />
    </IconButton>
    <Box flexGrow={1} display="flex" alignItems="center" pl={1}>
  <Typography variant="body1" color="#747f8d" fontFamily="Helvetica">
    Message #general
  </Typography>
  </Box>
  <IconButton>
  <Gif />
  </IconButton>
  <IconButton>
  <Image />
  </IconButton>
  <IconButton>
  <InsertEmoticon />
  </IconButton>
  </Box>
);
};

export default MessageInput;