import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  diagramDefinition: string;
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ diagramDefinition }) => {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mermaid 다이어그램 초기화 및 렌더링
    mermaid.initialize({ startOnLoad: true });

    if (diagramRef.current) {
      try {
        // 다이어그램 내용을 직접 삽입하여 Mermaid가 처리하도록 함
        diagramRef.current.innerHTML = diagramDefinition;
        mermaid.contentLoaded(); // Mermaid.js가 DOM의 모든 Mermaid 코드를 탐지하여 렌더링하는 함수
      } catch (error) {
        console.error('Mermaid 다이어그램 렌더링 오류:', error);
      }
    }
  }, [diagramDefinition]);

  return <div ref={diagramRef} className="mermaid" style={{ textAlign: 'center', padding: '20px' }} />;
};

export default MermaidDiagram;
