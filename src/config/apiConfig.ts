const API_BASE_URL = 'http://3.39.12.17:8080';
const WS_BASE_URL = 'ws://3.39.12.17:8080'; // WebSocket URL

const API_ROUTES = {
  SIGNUP: `${API_BASE_URL}/api/auth/signup`,
  SIGNIN: `${API_BASE_URL}/api/auth/login`,
  USER: `${API_BASE_URL}/api/auth/user`,
};

const WS_ROUTES = {
  CHAT: `${WS_BASE_URL}/ws/chat`,          // 텍스트 채팅용 웹소켓 엔드포인트
  VOICE: `${WS_BASE_URL}/ws/voice`,        // 음성 채팅용 웹소켓 엔드포인트
  NOTIFICATION: `${WS_BASE_URL}/ws/notification`, // 알림용 웹소켓 엔드포인트
};

export { API_BASE_URL, API_ROUTES, WS_ROUTES };
