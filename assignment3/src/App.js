import React from 'react';
import { Routes, Route } from "react-router-dom";

import IndexPage from './pages/index-page/IndexPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </div>
  );
}

export default App;
