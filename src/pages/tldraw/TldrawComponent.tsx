import React from 'react';
import { Tldraw, inlineBase64AssetStore } from 'tldraw';
import { useSync } from '@tldraw/sync';
import 'tldraw/tldraw.css';

const TldrawComponent: React.FC = () => {
  const store = useSync({
    uri: `ws://3.39.12.17:8080/whiteboard`,
    assets: inlineBase64AssetStore,
  });
  return (
    <div style={{ position: 'absolute', marginTop: '5%', inset: 0 }}>
      <Tldraw store={store} />
    </div>
  );
};

export default TldrawComponent;
