import React from 'react';
import TldrawComponent from './TldrawComponent';

const TldrawPage: React.FC = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <h1>tldraw 라이브러리 예제</h1>
      <TldrawComponent />
    </div>
  );
};

export default TldrawPage;
