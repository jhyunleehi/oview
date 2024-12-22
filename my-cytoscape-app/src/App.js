import React from 'react';
import CytoscapeGraph from './CytoscapeGraph';
import MyChart from './googleChart';

const App = () => (
  <div>
  <div style={{ padding: '20px' }}>
    <h1>Cytoscape.js Graph</h1>
    <CytoscapeGraph />
  </div>
  <div style={{ padding: '20px' }}>
    <h1>Google Chart</h1>
    <MyChart />      
  </div>
  </div>
);

export default App;