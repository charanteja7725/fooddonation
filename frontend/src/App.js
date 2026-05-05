import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import DonateFood from './pages/DonateFood';
import RequestFood from './pages/RequestFood';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<DonateFood />} />
          <Route path="/request" element={<RequestFood />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
