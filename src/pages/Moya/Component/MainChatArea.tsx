import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Divider,
  TextField,
  InputAdornment,
  Snackbar,
  Alert,
} from '@mui/material';
import { Search, Settings, Tag, ExitToApp } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import MessageInput from './MessageInput';
import { VoiceControls } from '@src/VoiceChat/VoiceControls';
import { AudioPlayer } from '@src/VoiceChat/AudioPlayer';
import  useVoiceChatStore  from '@store/VoiceChatState';
import voiceChatService from '../../../services/VoiceChatService';

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

const ROOM_ID = 'general'; // 실제 구현시에는 동적으로 받아와야 함
const USER_ID = 'user-' + Math.random().toString(36).substr(2, 9); // 실제 구현시에는 인증된 사용자 ID 사용

const MainChatArea = () => {
  const { error, setError, setParticipant, removeParticipant, setConnected } = useVoiceChatStore();
  const [streams, setStreams] = useState<Map<string, MediaStream>>(new Map());

  const handleJoinVoice = async () => {
    try {
      await voiceChatService.joinRoom(USER_ID, ROOM_ID);
      setConnected(true);

      // 참가자 스트림 추가 리스너
      voiceChatService.onStreamAdded((participantId, stream) => {
        setStreams(prev => {
          const newStreams = new Map(prev);
          newStreams.set(participantId, stream);
          return newStreams;
        });
        setParticipant(participantId, {
          isConnected: true,
          isMuted: false
        });
      });

      // 참가자 퇴장 리스너
      voiceChatService.onParticipantLeft((participantId) => {
        setStreams(prev => {
          const newStreams = new Map(prev);
          newStreams.delete(participantId);
          return newStreams;
        });
        removeParticipant(participantId);
      });

      // 에러 리스너
      voiceChatService.onError((errorMessage) => {
        setError(errorMessage);
      });

    } catch (error) {
      setError((error as Error).message);
    }
  };

  const handleLeaveVoice = () => {
    voiceChatService.leaveRoom();
    setConnected(false);
    setStreams(new Map());
  };

  useEffect(() => {
    return () => {
      handleLeaveVoice();
    };
  }, []);

  return (
    <ChatContainer>
      <ChatHeader>
        <Box display="flex" alignItems="center" gap={1}>
          <Tag fontSize="small" />
          <Typography variant="subtitle1" fontWeight="bold">
            {ROOM_ID}
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
          <VoiceControls
            onJoinVoice={handleJoinVoice}
            onLeaveVoice={handleLeaveVoice}
          />
          <IconButton size="small">
            <ExitToApp />
          </IconButton>
        </Box>
      </ChatHeader>
      <Divider />
      <ChatContent>
        {/* 오디오 플레이어들 렌더링 */}
        {Array.from(streams).map(([participantId, stream]) => (
          <AudioPlayer key={participantId} stream={stream} />
        ))}
      </ChatContent>
      <MessageInput />

      {/* 에러 메시지 표시 */}
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setError(null)} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </ChatContainer>
  );
};

export default MainChatArea;