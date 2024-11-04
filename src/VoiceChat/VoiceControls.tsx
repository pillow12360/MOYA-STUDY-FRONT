// src/components/VoiceChat/VoiceControls.tsx
import React from 'react';
import { IconButton, Tooltip, Badge } from '@mui/material';
import { Mic, MicOff, Headset, HeadsetOff } from '@mui/icons-material';
import useVoiceChatStore from '@store/VoiceChatState';
import voiceChatService from '../services/VoiceChatService';

interface VoiceControlsProps {
  onJoinVoice: () => void;
  onLeaveVoice: () => void;
}

export const VoiceControls: React.FC<VoiceControlsProps> = ({
                                                              onJoinVoice,
                                                              onLeaveVoice,
                                                            }) => {
  const { isConnected, isMuted, participants } = useVoiceChatStore();

  const handleMuteToggle = () => {
    if (isConnected) {
      const newMuted = !isMuted;
      voiceChatService.setMuted(newMuted);
      useVoiceChatStore.getState().setMuted(newMuted);
    }
  };

  const handleVoiceToggle = () => {
    if (isConnected) {
      onLeaveVoice();
    } else {
      onJoinVoice();
    }
  };

  return (
    <>
      <Tooltip title={isMuted ? 'Unmute' : 'Mute'}>
        <IconButton size="small" onClick={handleMuteToggle} disabled={!isConnected}>
          {isMuted ? <MicOff /> : <Mic />}
        </IconButton>
      </Tooltip>
      <Tooltip title={isConnected ? 'Disconnect' : 'Connect'}>
        <Badge
          badgeContent={participants.size}
          color="primary"
          sx={{ '& .MuiBadge-badge': { right: 2, top: 2 } }}
        >
          <IconButton size="small" onClick={handleVoiceToggle}>
            {isConnected ? <Headset /> : <HeadsetOff />}
          </IconButton>
        </Badge>
      </Tooltip>
    </>
  );
};