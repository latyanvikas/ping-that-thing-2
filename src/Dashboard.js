import React, { useState } from 'react';
import './Dashboard.css';
import PersonalDashboard from './PersonalDashboard';
import SocialDashboard from './SocialDashboard';
import { FaUser, FaUsers, FaComments, FaTimes, FaPaperPlane, FaTrophy, FaChartLine } from 'react-icons/fa';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('personal');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const userProfile = {
    name: "Sarah Jones",
    email: "sarah.jones@lloydsbanking.com.com",
    avatar: "https://static.vecteezy.com/system/resources/previews/024/183/500/original/female-avatar-brunette-woman-portrait-illustration-of-a-female-character-in-a-modern-color-style-vector.jpg",
    badges: [
      { id: 1, name: "Savings Expert", icon: "🏆" },
      { id: 2, name: "Travel Smart", icon: "✈️" },
      { id: 3, name: "Investment Pro", icon: "📈" }
    ],
    impactData: [
      { month: 'Jan', value: 65 },
      { month: 'Feb', value: 75 },
      { month: 'Mar', value: 85 },
      { month: 'Apr', value: 82 }
    ],
    savedProducts: [
      { id: 1, name: "Travel Fee Waiver", link: "#" },
      { id: 2, name: "Monthly Saver Account", link: "#" },
      { id: 3, name: "Premium Credit Card", link: "#" }
    ]
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Add your message sending logic here
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="dashboard-container">
      <div className="tab-buttons">
        <button 
          className={`tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal')}
          onDoubleClick={() => setIsProfileOpen(true)}
        >
          <FaUser size={24} />
        </button>
        <button 
          className={`tab-btn ${activeTab === 'social' ? 'active' : ''}`}
          onClick={() => setActiveTab('social')}
        >
          <FaUsers size={24} />
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'personal' ? <PersonalDashboard /> : <SocialDashboard />}
      </div>

      {/* Profile Dialog */}
      {isProfileOpen && (
        <div className="profile-dialog">
          <div className="profile-header">
            <h2>My Profile</h2>
            <button 
              className="close-button"
              onClick={() => setIsProfileOpen(false)}
            >
              <FaTimes />
            </button>
          </div>
          
          <div className="profile-content">
            <div className="profile-top">
              <img src={userProfile.avatar} alt="Profile" className="profile-avatar" />
              <div className="profile-info">
                <h3>{userProfile.name}</h3>
                <p>{userProfile.email}</p>
              </div>
            </div>

            <div className="badges-section">
              <h4>Earned Badges</h4>
              <div className="badges-container">
                {userProfile.badges.map(badge => (
                  <div key={badge.id} className="badge-item">
                    <span className="badge-icon">{badge.icon}</span>
                    <span className="badge-name">{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="profile-bottom">
              <div className="impact-graph">
                <h4>Impact Overview</h4>
                <div className="graph-container">
                  {userProfile.impactData.map((data, index) => (
                    <div key={index} className="graph-bar" style={{ height: `${data.value}%` }}>
                      <span className="graph-value">{data.value}%</span>
                      <span className="graph-label">{data.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="saved-products">
                <h4>Saved Products</h4>
                <ul>
                  {userProfile.savedProducts.map(product => (
                    <li key={product.id}>
                      <a href={product.link}>{product.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button 
        className="chat-button"
        onClick={() => setIsChatOpen(true)}
      >
        <FaComments size={24} />
      </button>

      {/* Chat Dialog */}
      {isChatOpen && (
        <div className="chat-dialog">
          <div className="chat-header">
            <div className="chat-user-info">
              <h3>Sarah Jones</h3>
              <span className="user-status">Online</span>
            </div>
            <button 
              className="close-button"
              onClick={() => setIsChatOpen(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className="chat-content">
            {/* Add your chat messages here */}
          </div>
          <form className="chat-input-area" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="chat-input"
            />
            <button type="submit" className="send-button">
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Dashboard;