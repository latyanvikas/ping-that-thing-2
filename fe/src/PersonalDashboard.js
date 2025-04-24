import React, { useState } from 'react';
import { FaLink, FaHeart, FaSadTear, FaShare, FaTrophy } from 'react-icons/fa';
import './PersonalDashboard.css';

function PersonalDashboard() {
  const [completedModules, setCompletedModules] = useState([]);

  const products = [
    {
      id: 1,
      name: "Travel Fee Waiver",
      description: "No foreign transaction fees on your Platinum Card",
      badge: "Premium",
      learningBadge: "Travel Smart"
    },
    {
      id: 2,
      name: "Monthly Saver Account",
      description: "Save regularly with competitive interest rates",
      badge: "Featured",
      learningBadge: "Savings Master"
    },
    {
      id: 3,
      name: "Travel Money Service",
      description: "Order foreign currency with next day delivery",
      badge: "Service",
      learningBadge: "Currency Pro"
    }
  ];

  const handleModuleCompletion = (id) => {
    setCompletedModules([...completedModules, id]);
  };

  return (
    <div className="personal-dashboard">
      <h2>Travel & Savings Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-box">
            <span className="badge">{product.badge}</span>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            
            <div className="action-buttons">
              <button 
                className="action-btn"
                onClick={() => handleModuleCompletion(product.id)}
                title="Learn More"
              >
                <FaLink />
              </button>
              <button 
                className="action-btn"
                title="Save to Favorites"
              >
                <FaHeart />
              </button>
              <button 
                className="action-btn"
                title="Not Interested"
              >
                <FaSadTear />
              </button>
            </div>

            <div className={`learning-badge ${completedModules.includes(product.id) ? 'completed' : 'incomplete'}`}>
              <FaTrophy />
              <span>{product.learningBadge}</span>
            </div>

            <div className="share-overlay">
              <button className="share-btn">
                <FaShare /> Share This Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalDashboard;