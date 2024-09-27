import React from 'react';
import TldrawComponent from './TldrawComponent';

const TldrawPage: React.FC = () => {
  return (
    <div style={{ position: 'fixed', width: '95vw', height: '80vh' }}>
      <h1>화이트보드</h1>
      <TldrawComponent />
    </div>
  );
};

export default TldrawPage;
