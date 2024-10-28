import React from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { Settings, Mic, Headset } from "@mui/icons-material";

export const UserInfoBar = (): JSX.Element => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" px={2} py={1} bgcolor="#ebedef">
  <Box display="flex" alignItems="center">
  <Avatar src="/avatar.svg" />
  <Box ml={2}>
  <Typography variant="body1" fontFamily="Helvetica" fontWeight="medium">
    spencercamp
    </Typography>
    <Typography variant="body2" fontFamily="Helvetica" fontWeight="light">
#6709
  </Typography>
  </Box>
  </Box>
  <Box>
  <IconButton>
    <Settings />
  </IconButton>
  <IconButton>
  <Mic />
  </IconButton>
  <IconButton>
  <Headset />
  </IconButton>
  </Box>
  </Box>
);
};

export default UserInfoBar;