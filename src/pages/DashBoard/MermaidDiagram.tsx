import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  diagram: string;
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ diagram }) => {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mermaid 초기화
    mermaid.initialize({ startOnLoad: true });

    const renderDiagram = async () => {
      if (diagramRef.current) {
        try {
          // 고유한 ID 생성
          const diagramId = `mermaid-diagram-${Math.random().toString(36).substring(2, 9)}`;
          // Mermaid 다이어그램 렌더링
          const { svg } = await mermaid.render(diagramId, diagram);
          diagramRef.current.innerHTML = svg;
        } catch (error) {
          console.error('Mermaid diagram rendering failed:', error);
          diagramRef.current.innerHTML = 'Diagram rendering failed';
        }
      }
    };

    renderDiagram();
  }, [diagram]);

  return <div ref={diagramRef}></div>;
};

export default MermaidDiagram;
