import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page1.css'; // Assuming you'll add styles here

function Page1() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/Dashboard'); // Navigate to the "dashboard" page
  };

  return (
    <div>
      <header className="dashboard-header">
        <h1>Welcome to Cinder</h1>
        <p>Click anywhere to get started</p>
      </header>
      <div className="dashboard-grid">
        <div className="grid-item">
          <button className="grid-button" onClick={handleNavigation}>
            I want to Travel
          </button>
        </div>
        <div className="grid-item">
          <button className="grid-button" onClick={handleNavigation}>
            I want to Start an ISA
          </button>
        </div>
        <div className="grid-item">
          <button className="grid-button" onClick={handleNavigation}>
            I want to get Phone Insurance
          </button>
        </div>
        <div className="grid-item">
          <button className="grid-button" onClick={handleNavigation}>
            I want to Get Club Lloyds
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page1;