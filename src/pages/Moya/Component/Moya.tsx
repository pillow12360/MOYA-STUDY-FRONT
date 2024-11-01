import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Sidebar from './Sidebar';
import ChannelList from './ChannelList';
import MainChatArea from './MainChatArea';

const RootContainer = styled('div')({
  display: 'flex',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  position: 'fixed',
  top: 0,
  left: 0,
});

const ContentContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  height: '100%',
});

export const Moya = () => {
  return (
    <RootContainer>
      <ContentContainer>
        <Sidebar />
        <ChannelList />
        <MainChatArea />
      </ContentContainer>
    </RootContainer>
  );
};