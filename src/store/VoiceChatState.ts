// stores/VoiceChatState.ts
import { create } from 'zustand';
import { AudioState } from '../types/voiceChat';

// store의 상태와 액션을 정의하는 인터페이스
export interface VoiceChatState {
  isConnected: boolean;
  isMuted: boolean;
  participants: Map<string, AudioState>;
  error: string | null;

  // 액션들
  setConnected: (connected: boolean) => void;
  setMuted: (muted: boolean) => void;
  setParticipant: (id: string, state: AudioState) => void;
  removeParticipant: (id: string) => void;
  setError: (error: string | null) => void;
}

// store 생성 및 export
const useVoiceChatStore = create<VoiceChatState>()((set) => ({
  // 초기 상태
  isConnected: false,
  isMuted: false,
  participants: new Map(),
  error: null,

  // 액션 구현
  setConnected: (connected) => set({ isConnected: connected }),
  setMuted: (muted) => set({ isMuted: muted }),
  setParticipant: (id, state) =>
    set((store) => {
      const newParticipants = new Map(store.participants);
      newParticipants.set(id, state);
      return { participants: newParticipants };
    }),
  removeParticipant: (id) =>
    set((store) => {
      const newParticipants = new Map(store.participants);
      newParticipants.delete(id);
      return { participants: newParticipants };
    }),
  setError: (error) => set({ error }),
}));

// store를 default export로 내보내기
export default useVoiceChatStore;