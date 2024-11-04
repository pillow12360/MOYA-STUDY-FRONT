export interface VoiceChatUser {
  id: string;
  username: string;
  isMuted: boolean;
  isSpeaking: boolean;
  stream?: MediaStream;
}

export interface VoiceChatRoom {
  id: string;
  name: string;
  participants: VoiceChatUser[];
}

export interface PeerConnection {
  userId: string;
  connection: RTCPeerConnection;
}

export type VoiceChatEvent = {
  type: 'USER_JOINED' | 'USER_LEFT' | 'OFFER' | 'ANSWER' | 'ICE_CANDIDATE';
  payload: any;
  from?: string;
  to?: string;
};

export interface SignalingMessage {
  type: string;
  from: string;
  to?: string;
  sdp?: RTCSessionDescription;
  candidate?: RTCIceCandidate;
}