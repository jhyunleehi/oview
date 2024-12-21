import cytoscape from 'cytoscape';  // cytoscape 모듈을 import
import React, { useEffect, useRef } from 'react';  // useEffect와 useRef를 React에서 import

const CytoscapeGraph = () => {
    const cyRef = useRef(null); // Cytoscape 컨테이너 참조
  
    useEffect(() => {
      if (!cyRef.current) return;
  
      const cy = cytoscape({
        container: cyRef.current,
        elements: [
          { data: { id: 'a' } },
          { data: { id: 'b' } },
          { data: { id: 'c' } },
          { data: { source: 'a', target: 'b' } },
          { data: { source: 'b', target: 'c' } },
        ],
        style: [
          {
            selector: 'node',
            style: {
              'background-color': '#0074D9',
              label: 'data(id)',
              'text-valign': 'center',
              'text-halign': 'center',
              color: '#fff',
            },
          },
          {
            selector: 'edge',
            style: {
              width: 2,
              'line-color': '#ddd',
              'target-arrow-color': '#ddd',
              'target-arrow-shape': 'triangle',
            },
          },
        ],
        layout: {
          name: 'grid', // 기본 레이아웃 설정
          rows: 2,
        },
      });
  
      // 클린업
      return () => cy.destroy();
    }, []);
  
    return (
      <div
        ref={cyRef}
        style={{
          width: '100%',
          height: '400px',
          border: '1px solid #ccc',
        }}
      />
    );
  };
  
  export default CytoscapeGraph;