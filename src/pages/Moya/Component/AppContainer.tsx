import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import ChannelList from "./ChannelList";
import MainChatArea from "./MainChatArea";

export const AppContainer = (): JSX.Element => {
  return (
    <Box display="flex" justifyContent="center" width="100%" bgcolor="#e3e5e8" minHeight="100vh" overflow="hidden">
      <Box display="flex" width="100%" maxWidth="1920px" height="900px" bgcolor="#e3e5e8">
        <Sidebar />
        <ChannelList />
        <MainChatArea />
      </Box>
    </Box>
  );
};

export default AppContainer;