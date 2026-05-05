import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>🍲 Food Donation App</h1>
        <p>Share food, Help people, Make a difference</p>
      </div>

      <div className="home-buttons">
        <Link to="/donate" className="btn btn-primary">
          🤝 Donate Food
        </Link>
        <Link to="/request" className="btn btn-secondary">
          🔍 Request Food
        </Link>
      </div>
    </div>
  );
}

export default Home;
