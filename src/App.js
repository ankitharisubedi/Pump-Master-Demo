import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PumpsPage from './pages/PumpsPage';
import PumpDetailPage from './pages/PumpDetailPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PumpsPage />} />
        <Route path="/pump/:id" element={<PumpDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;