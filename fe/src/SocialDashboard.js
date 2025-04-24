import React from 'react';
import { FaLink, FaHeart, FaSadTear } from 'react-icons/fa';
import './SocialDashboard.css';

function SocialDashboard() {
  const heroProducts = [
    {
      id: 1,
      name: "Classic Current Account",
      description: "Everyday banking with online and mobile access",
      badge: "Popular",
    },
    {
      id: 2,
      name: "Club Lloyds Account",
      description: "Premium features and lifestyle benefits",
      badge: "Rewards",
    },
    {
      id: 3,
      name: "Student Account",
      description: "Banking tailored for university students",
      badge: "New",
    }
  ];

  const spotlightProduct = {
    name: "Platinum Credit Card",
    description: "Premium travel benefits and rewards",
    badge: "Featured",
  };

  return (
    <div className="social-dashboard">
      <section className="hero-section">
        <h2>Hero Products</h2>
        <div className="product-grid">
          {heroProducts.map(product => (
            <div key={product.id} className="product-box">
              <span className="badge">{product.badge}</span>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="action-buttons">
                <button className="action-btn">
                  <FaLink />
                </button>
                <button className="action-btn">
                  <FaHeart />
                </button>
                <button className="action-btn">
                  <FaSadTear />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="spotlight-section">
        <h2>Spotlight</h2>
        <div className="product-box spotlight">
          <span className="badge">{spotlightProduct.badge}</span>
          <h3>{spotlightProduct.name}</h3>
          <p>{spotlightProduct.description}</p>
          <div className="action-buttons">
            <button className="action-btn">
              <FaLink />
            </button>
            <button className="action-btn">
              <FaHeart />
            </button>
            <button className="action-btn">
              <FaSadTear />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SocialDashboard;