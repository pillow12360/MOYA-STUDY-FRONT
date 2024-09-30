import React, { useState, useEffect, useRef } from 'react';

const WebSocketTest: React.FC = () => {
  const [message, setMessage] = useState(''); // 전송할 메시지
  const [receivedMessages, setReceivedMessages] = useState<string[]>([]); // 수신된 메시지 목록
  const socketRef = useRef<WebSocket | null>(null);

  // WebSocket 서버 URL
  const socketUrl = 'ws://3.39.12.17:8080/whiteboard';

  // WebSocket 연결 설정
  useEffect(() => {
    // WebSocket 연결 생성
    socketRef.current = new WebSocket(socketUrl);

    // WebSocket 연결이 열렸을 때
    socketRef.current.onopen = () => {
      console.log('WebSocket 연결 성공');
      // 연결 후 서버에 초기 메시지를 보낼 수 있음
      socketRef.current?.send(JSON.stringify({ message: '클라이언트가 연결되었습니다.' }));
    };

    // WebSocket 메시지 수신 처리
    socketRef.current.onmessage = (event) => {
      console.log('서버로부터 메시지 수신:', event.data);
      setReceivedMessages((prevMessages) => [...prevMessages, event.data]); // 수신된 메시지 추가
    };

    // WebSocket 연결 종료 처리
    socketRef.current.onclose = (event) => {
      console.log('WebSocket 연결 종료:', event);
    };

    // WebSocket 오류 처리
    socketRef.current.onerror = (error) => {
      console.error('WebSocket 오류:', error);
    };

    // 컴포넌트가 언마운트될 때 WebSocket 연결 종료
    return () => {
      socketRef.current?.close();
    };
  }, [socketUrl]);

  // 메시지 전송 핸들러
  const sendMessage = () => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      // 메시지를 JSON 형식으로 서버에 전송
      socketRef.current.send(JSON.stringify({ message }));
      setMessage(''); // 메시지 전송 후 입력 필드를 비움
      alert('sent message');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>WebSocket 통신 테스트</h1>

      {/* 메시지 입력 필드 */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="메시지를 입력하세요"
        style={{ width: '80%', padding: '8px' }}
      />

      {/* 메시지 전송 버튼 */}
      <button onClick={sendMessage} style={{ padding: '8px 12px', marginLeft: '10px' }}>
        메시지 전송
      </button>

      {/* 수신된 메시지 목록 */}
      <div style={{ marginTop: '20px' }}>
        <h2>수신된 메시지:</h2>
        <ul>
          {receivedMessages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WebSocketTest;
