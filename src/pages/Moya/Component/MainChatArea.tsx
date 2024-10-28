import React from "react";
import { Box, Typography, IconButton, Divider, TextField, InputAdornment } from "@mui/material";
import { Search, Settings, Mic, Headset, ExitToApp, Tag, Gif, InsertEmoticon, Image } from "@mui/icons-material";
import MessageInput from "./MessageInput";

export const MainChatArea = (): JSX.Element => {
  return (
    <Box flex="1" height="100%" bgcolor="white">
  <Box display="flex" flexDirection="column" height="100%">
  <Box display="flex" justifyContent="space-between" alignItems="center" px={2} py={1} bgcolor="white">
  <Box display="flex" alignItems="center">
    <IconButton>
      <Tag />
    </IconButton>
    <Typography variant="h6" color="#060607" fontFamily="Helvetica" fontWeight="bold">
    general
    </Typography>
    </Box>
    <Box display="flex" alignItems="center">
  <TextField
    variant="outlined"
  size="small"
  placeholder="Search"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <Search />
        </InputAdornment>
    ),
  }}
  />
  <IconButton>
  <Settings />
  </IconButton>
  <IconButton>
  <Mic />
  </IconButton>
  <IconButton>
  <Headset />
  </IconButton>
  <IconButton>
  <ExitToApp />
  </IconButton>
  </Box>
  </Box>
  <Divider />
  <Box flexGrow={1} />
  <MessageInput />
  </Box>
  </Box>
);
};

export default MainChatArea;