import React, { useState } from 'react';
import './App.css';
import { NestedTree } from './components';
import mockData from "./mock-data.json";

function App() {
  const [treeData] = useState(mockData);

  return (
    <div className="app">
      <header className="header">
        <div className="header_title">Коды ОКВЭД</div>
      </header>
      <NestedTree treeData={treeData} />
    </div>
  );
}

export default App;
