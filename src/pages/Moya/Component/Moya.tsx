
// components/Moya.tsx
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Sidebar from './Sidebar';
import ChannelList from './ChannelList';
import MainChatArea from './MainChatArea';
import React from 'react';

const RootContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  overflow: 'hidden',
}));

const ContentContainer = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  maxWidth: '1920px',
  height: '90vh',
}));

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