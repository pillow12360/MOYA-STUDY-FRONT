// services/voiceChatService.ts
import { SignalingMessage, Participant } from '../types/voiceChat';
import { WS_ROUTES } from '../config/apiConfig';

export class VoiceChatService {
  private static instance: VoiceChatService;
  private peerConnections: Map<string, RTCPeerConnection> = new Map();
  private localStream: MediaStream | null = null;
  private socket: WebSocket | null = null;
  private participants: Map<string, Participant> = new Map();

  private currentUserId: string = '';
  private currentRoomId: string = '';

  // 콜백 함수들
  private onParticipantJoinedCallback?: (participant: Participant) => void;
  private onParticipantLeftCallback?: (participantId: string) => void;
  private onStreamAddedCallback?: (participantId: string, stream: MediaStream) => void;
  private onErrorCallback?: (error: string) => void;

  private constructor() {}

  public static getInstance(): VoiceChatService {
    if (!VoiceChatService.instance) {
      VoiceChatService.instance = new VoiceChatService();
    }
    return VoiceChatService.instance;
  }

  // services/voiceChatService.ts 에 추가할 메서드들

  private async handleOffer(message: SignalingMessage): Promise<void> {
    if (!message.sdp || !message.from) return;

    try {
      // 새로운 피어 연결 생성
      const peerConnection = await this.createPeerConnection(message.from);

      // 원격 Description 설정
      await peerConnection.setRemoteDescription(new RTCSessionDescription(message.sdp));

      // Answer 생성
      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);

      // Answer 전송
      this.sendSignalingMessage({
        type: 'ANSWER',
        from: this.currentUserId,
        to: message.from,
        roomId: this.currentRoomId,
        sdp: answer
      });

    } catch (error) {
      this.handleError('Error handling offer: ' + (error as Error).message);
    }
  }

  private async handleAnswer(message: SignalingMessage): Promise<void> {
    if (!message.sdp || !message.from) return;

    try {
      const peerConnection = this.peerConnections.get(message.from);
      if (peerConnection) {
        await peerConnection.setRemoteDescription(
          new RTCSessionDescription(message.sdp)
        );
      }
    } catch (error) {
      this.handleError('Error handling answer: ' + (error as Error).message);
    }
  }

  private async handleIceCandidate(message: SignalingMessage): Promise<void> {
    if (!message.candidate || !message.from) return;

    try {
      const peerConnection = this.peerConnections.get(message.from);
      if (peerConnection) {
        await peerConnection.addIceCandidate(
          new RTCIceCandidate(message.candidate)
        );
      }
    } catch (error) {
      this.handleError('Error handling ICE candidate: ' + (error as Error).message);
    }
  }

  private handleParticipantLeft(participantId: string): void {
    // 피어 연결 종료
    const peerConnection = this.peerConnections.get(participantId);
    if (peerConnection) {
      peerConnection.close();
      this.peerConnections.delete(participantId);
    }

    // 참가자 제거
    this.participants.delete(participantId);

    // 콜백 실행
    this.onParticipantLeftCallback?.(participantId);
  }



  // 초기 설정 및 방 참여
  public async joinRoom(userId: string, roomId: string): Promise<void> {
    try {
      this.currentUserId = userId;
      this.currentRoomId = roomId;

      // 마이크 접근 권한 요청
      await this.setupLocalStream();

      // WebSocket 연결
      this.connectToSignalingServer();

    } catch (error) {
      this.handleError('Failed to join room: ' + (error as Error).message);
    }
  }

  // 마이크 스트림 설정
  private async setupLocalStream(): Promise<void> {
    try {
      this.localStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        },
        video: false
      });
    } catch (error) {
      throw new Error('Microphone access denied');
    }
  }

  // 시그널링 서버 연결
  private connectToSignalingServer(): void {
    try {
      this.socket = new WebSocket(`${WS_ROUTES.VOICE}?userId=${this.currentUserId}&roomId=${this.currentRoomId}`);

      this.socket.onopen = () => {
        // 방 참여 메시지 전송
        this.sendSignalingMessage({
          type: 'JOIN',
          from: this.currentUserId,
          roomId: this.currentRoomId
        });
      };

      this.socket.onmessage = (event) => {
        const message: SignalingMessage = JSON.parse(event.data);
        this.handleSignalingMessage(message);
      };

      this.socket.onerror = (error) => {
        this.handleError('WebSocket error: ' + error);
      };

      this.socket.onclose = () => {
        this.handleError('WebSocket connection closed');
      };
    } catch (error) {
      this.handleError('Failed to connect to signaling server');
    }
  }

  // 시그널링 메시지 처리
  private async handleSignalingMessage(message: SignalingMessage): Promise<void> {
    try {
      switch (message.type) {
        case 'JOIN':
          if (message.from !== this.currentUserId) {
            await this.handleNewParticipant(message.from);
          }
          break;

        case 'OFFER':
          await this.handleOffer(message);
          break;

        case 'ANSWER':
          await this.handleAnswer(message);
          break;

        case 'ICE_CANDIDATE':
          await this.handleIceCandidate(message);
          break;

        case 'LEAVE':
          this.handleParticipantLeft(message.from);
          break;
      }
    } catch (error) {
      this.handleError('Error handling signaling message: ' + (error as Error).message);
    }
  }

  // 새 참가자 처리
  private async handleNewParticipant(participantId: string): Promise<void> {
    try {
      const peerConnection = await this.createPeerConnection(participantId);

      // 오퍼 생성 및 전송
      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);

      this.sendSignalingMessage({
        type: 'OFFER',
        from: this.currentUserId,
        to: participantId,
        roomId: this.currentRoomId,
        sdp: offer
      });

    } catch (error) {
      this.handleError('Error handling new participant: ' + (error as Error).message);
    }
  }

  // WebRTC 피어 연결 생성
  private async createPeerConnection(participantId: string): Promise<RTCPeerConnection> {
    const peerConnection = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
    });

    // 로컬 스트림 추가
    this.localStream?.getTracks().forEach(track => {
      this.localStream && peerConnection.addTrack(track, this.localStream);
    });

    // ICE candidate 이벤트 처리
    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        this.sendSignalingMessage({
          type: 'ICE_CANDIDATE',
          from: this.currentUserId,
          to: participantId,
          roomId: this.currentRoomId,
          candidate: event.candidate.toJSON()
        });
      }
    };

    // 원격 스트림 처리
    peerConnection.ontrack = (event) => {
      const [stream] = event.streams;
      this.onStreamAddedCallback?.(participantId, stream);
    };

    this.peerConnections.set(participantId, peerConnection);
    return peerConnection;
  }

  // 음소거 설정
  public setMuted(muted: boolean): void {
    if (this.localStream) {
      this.localStream.getAudioTracks().forEach(track => {
        track.enabled = !muted;
      });
    }
  }

  // 방 나가기
  public leaveRoom(): void {
    // 연결된 모든 피어 종료
    this.peerConnections.forEach(connection => {
      connection.close();
    });
    this.peerConnections.clear();

    // 로컬 스트림 정리
    this.localStream?.getTracks().forEach(track => {
      track.stop();
    });
    this.localStream = null;

    // WebSocket 연결 종료
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.sendSignalingMessage({
        type: 'LEAVE',
        from: this.currentUserId,
        roomId: this.currentRoomId
      });
      this.socket.close();
    }
  }

  // 시그널링 메시지 전송
  private sendSignalingMessage(message: SignalingMessage): void {
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    }
  }

  // 에러 처리
  private handleError(error: string): void {
    console.error(error);
    this.onErrorCallback?.(error);
  }

  // 콜백 설정 메서드들
  public onParticipantJoined(callback: (participant: Participant) => void): void {
    this.onParticipantJoinedCallback = callback;
  }

  public onParticipantLeft(callback: (participantId: string) => void): void {
    this.onParticipantLeftCallback = callback;
  }

  public onStreamAdded(callback: (participantId: string, stream: MediaStream) => void): void {
    this.onStreamAddedCallback = callback;
  }

  public onError(callback: (error: string) => void): void {
    this.onErrorCallback = callback;
  }
}

export default VoiceChatService.getInstance();