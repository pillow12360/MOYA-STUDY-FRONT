import React from 'react';
import 'tldraw/tldraw.css';
import { Tldraw } from '@tldraw/tldraw';

const TldrawComponent: React.FC = () => {
  // 현재 상태 내보내기 함수
  const exportCurrentState = () => {};
  return (
    <>
      <div style={{ position: 'absolute', padding: '2vw', paddingTop: '20vh', inset: 0 }}>
        <div>
          <Tldraw persistenceKey="my-persistence-key" />
        </div>
      </div>
    </>
  );
};

export default TldrawComponent;
