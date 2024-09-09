import React, { useState, useRef, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Card,
  CardContent,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  CircularProgress,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AccountCircle, Mic, MicOff, CallEnd, Person } from '@mui/icons-material';
import { io } from 'socket.io-client';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#9c27b0', // Purple
    },
    secondary: {
      main: '#3f51b5', // Indigo
    },
  },
});

// WebSocket 연결 설정 (Socket.io 사용)
const socket = io('ws://localhost:3001'); // 서버 주소에 맞게 변경

export default function RandomVoiceChat() {
  const [isMatched, setIsMatched] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const localStreamRef = useRef<MediaStream | null>(null); // 로컬 오디오 스트림 참조
  const remoteAudioRef = useRef<HTMLAudioElement>(null); // 원격 오디오 엘리먼트 참조
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null); // WebRTC 연결

  // WebRTC 연결 설정 및 음성 스트림 시작
  const startVoiceChat = async () => {
    try {
      // 로컬 오디오 스트림 가져오기
      const localStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      localStreamRef.current = localStream;

      // WebRTC 연결 설정
      const peerConnection = new RTCPeerConnection({
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
      });
      peerConnectionRef.current = peerConnection;

      // 로컬 스트림 트랙을 연결에 추가
      localStream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, localStream);
      });

      // 원격 스트림 처리
      peerConnection.ontrack = (event) => {
        const [remoteStream] = event.streams;
        if (remoteAudioRef.current) {
          remoteAudioRef.current.srcObject = remoteStream;
        }
      };

      // ICE 후보자 처리
      peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          socket.emit('ice-candidate', event.candidate);
        }
      };

      // SDP offer 생성 및 서버로 전송
      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);
      socket.emit('offer', offer);
    } catch (error) {
      console.error('Error accessing audio stream:', error);
    }
  };

  useEffect(() => {
    // 서버에서 offer 수신
    socket.on('offer', async (offer: RTCSessionDescriptionInit) => {
      if (!peerConnectionRef.current) {
        startVoiceChat();
      }
      await peerConnectionRef.current?.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peerConnectionRef.current?.createAnswer();
      await peerConnectionRef.current?.setLocalDescription(answer!);
      socket.emit('answer', answer);
    });

    // 서버에서 answer 수신
    socket.on('answer', async (answer: RTCSessionDescriptionInit) => {
      await peerConnectionRef.current?.setRemoteDescription(new RTCSessionDescription(answer));
    });

    // ICE 후보자 수신
    socket.on('ice-candidate', async (candidate: RTCIceCandidateInit) => {
      await peerConnectionRef.current?.addIceCandidate(new RTCIceCandidate(candidate));
    });

    return () => {
      socket.off('offer');
      socket.off('answer');
      socket.off('ice-candidate');
    };
  }, []);

  // 매칭 시 음성 채팅 시작
  const handleFindMatch = () => {
    setIsWaiting(true);
    socket.emit('find-match'); // 서버에 매칭 요청
  };

  useEffect(() => {
    // 서버에서 매칭이 완료되었을 때
    socket.on('match-found', () => {
      setIsWaiting(false); // 매칭 완료되면 대기 중 상태 해제
      setIsMatched(true);
      startVoiceChat(); // 음성 채팅 시작
    });

    return () => {
      socket.off('match-found');
    };
  }, []);

  const handleEndCall = () => {
    setIsMatched(false);
    peerConnectionRef.current?.close();
    localStreamRef.current?.getTracks().forEach((track) => track.stop());
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
            보이스 랜덤 매칭
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="user profile"
            onClick={() => setIsProfileOpen(true)}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Card sx={{ width: '100%', maxWidth: 400, mt: 8 }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
          {isWaiting ? (
            <>
              <CircularProgress color="primary" />
              <Typography variant="h6" align="center">
                매칭 대기 중...
              </Typography>
            </>
          ) : !isMatched ? (
            <>
              <Typography variant="h6" align="center">
                Ready to meet someone new?
              </Typography>
              <Button variant="contained" color="primary" size="large" onClick={handleFindMatch}>
                Find Match
              </Button>
            </>
          ) : (
            <>
              <Avatar sx={{ width: 80, height: 80 }}>
                <Person sx={{ width: 60, height: 60 }} />
              </Avatar>
              <Typography variant="h6">Connected with a match!</Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                  color="primary"
                  onClick={() => setIsMuted(!isMuted)}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <MicOff /> : <Mic />}
                </IconButton>
                <IconButton color="error" onClick={handleEndCall} aria-label="End call">
                  <CallEnd />
                </IconButton>
              </Box>
              {/* 원격 오디오 */}
              <audio ref={remoteAudioRef} autoPlay playsInline />
            </>
          )}
        </CardContent>
      </Card>

      <Dialog open={isProfileOpen} onClose={() => setIsProfileOpen(false)}>
        <DialogTitle>User Profile</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, pt: 2 }}>
            <Avatar sx={{ width: 100, height: 100 }}>
              <Person sx={{ width: 80, height: 80 }} />
            </Avatar>
            <Typography variant="h5">John Doe</Typography>
            <Typography variant="body2" color="text.secondary">
              Active Member
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}
