import React, { useState } from "react";
import "./ContactInput.css";

export default function ContactInput() {
  // set Hook
  const [selectedInterest, setSelectedInterest] = useState("");
  
  // create handleCheckboxChange func
  const handleCheckboxChange = (event) => {
    setSelectedInterest(event.target.value);
  };

  return (
    <form className="contact-info-input-container">
      <div className="name-input-container">
        <div className="first-name">
          <input className="name-input" type="text" placeholder="Ayoub" />
          <label className="name-label">First Name</label>
        </div>
        <div className="last-name">
          <input className="name-input" type="text" placeholder="Akbartabar" />
          <label className="name-label">Last Name</label>
        </div>
      </div>

      <div className="email-input-container">
        <input
          className="email-input"
          type="email"
          placeholder="ayoubakbartabar1887@mail.com"
        />
        <label className="email-label">Email</label>
      </div>

      <div className="interested-checkbox">
        <h3 className="interested-checkbox-title">
          What are you interested in?
        </h3>
        <div className="check-boxs-container">
          {["Design", "Development", "Support", "Other"].map((option) => (
            <div key={option} className="check-box-container">
              <label className="checkbox-label">
                <input
                  className="checkbox"
                  type="checkbox"
                  value={option}
                  checked={selectedInterest === option}
                  onChange={handleCheckboxChange}
                />
              </label>
              <label className="checkbox-title">{option}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="comment-container">
        <input className="comment-input" type="text" />
        <label className="comment-label">Your Message</label>
      </div>

      <div className="send-message-btn-container">
        <button className="send-message-btn">send message</button>
      </div>
    </form>
  );
}
