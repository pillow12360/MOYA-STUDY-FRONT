// export interface VoiceChatUser {
//   id: string;
//   username: string;
//   isMuted: boolean;
//   isSpeaking: boolean;
//   stream?: MediaStream;
// }
//
// export interface VoiceChatRoom {
//   id: string;
//   name: string;
//   participants: VoiceChatUser[];
// }
//
// export interface PeerConnection {
//   userId: string;
//   connection: RTCPeerConnection;
// }
//
// export type VoiceChatEvent = {
//   type: 'USER_JOINED' | 'USER_LEFT' | 'OFFER' | 'ANSWER' | 'ICE_CANDIDATE';
//   payload: any;
//   from?: string;
//   to?: string;
// };
//
// export interface SignalingMessage {
//   type: string;
//   from: string;
//   to?: string;
//   sdp?: RTCSessionDescription;
//   candidate?: RTCIceCandidate;
// }


// 기본적인 시그널링 메시지 타입
export type SignalingMessage = {
  type: 'JOIN' | 'OFFER' | 'ANSWER' | 'ICE_CANDIDATE' | 'LEAVE';
  from: string;
  to?: string;
  roomId: string;
  sdp?: RTCSessionDescriptionInit;
  candidate?: RTCIceCandidateInit;
};

// 참가자 정보
export interface Participant {
  id: string;
  isMuted: boolean;
  stream?: MediaStream;
}

// 오디오 상태
export interface AudioState {
  isConnected: boolean;
  isMuted: boolean;
  error?: string;
}

