import React from 'react';
import { Tldraw } from '@tldraw/tldraw';

const TldrawComponent: React.FC = () => {
  return (
    <div style={{ position: 'absolute', width: '100vw', height: '100vh' }}>
      <Tldraw />
    </div>
  );
};

export default TldrawComponent;
