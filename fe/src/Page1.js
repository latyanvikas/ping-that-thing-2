import React from 'react';
import './Page1.css'; // Assuming you'll add styles here

function Page1() {
  return (
    <div>
      <header className="dashboard-header">
        <h1>Welcome to Cinder</h1>
        <p>Select an option to learn more</p>
      </header>
      <div className="dashboard-container">
        <div className="button-container">
          <button className="dashboard-button">I want a Small Loan</button>
          <button className="dashboard-button">I want a Mortgage</button>
          <button className="dashboard-button">I want Insurance</button>
          <button className="dashboard-button">Surprise me!</button>
        </div>
      </div>
      <div className="chat-window">
        <div className="chat-header">Chat with us</div>
        <input
          type="text"
          className="chat-input"
          placeholder="Type your message here..."
        />
      </div>
    </div>
  );
}

export default Page1;