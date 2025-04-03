import React from "react";
import "./Clients.css";

export default function Clients() {
    // create clientSayHandler func
    const clientSayHandler = ()=>{
        
    }
    return (
    <div className="clients-content">
      <div className="clients-info-container">
        <h2 className="clients-title">Mobile App Development</h2>
        <p className="clients-paragraph">
          I had the pleasure of working with Lily on a critical web development
          project, and I can confidently say that their expertise and
          professionalism exceeded my expectations.
        </p>
        <h5 className="clients-info">Michael - Technical Manager</h5>
        <p className="clients-address">Marketing @ APPLE INC.</p>

        <div className="all-clients-image-container">
          <div>
            <a className="clients-avatar-btn" onClick={()=>clientSayHandler()}>
              <img
                className="clients-avatar-image"
                src="../public/image/avatar1.jpg"
                alt="client"
              />
            </a>
            <img
              className="clients-avatar-image"
              src="../public/image/avatar2.jpg"
              alt="client"
            />
            <img
              className="clients-avatar-image"
              src="../public/image/avatar3.jpg"
              alt="client"
            />
          </div>
        </div>
      </div>

      <div>
        <img
          className="clients-avatar"
          src="public/image/avatar3.jpg"
          alt="client"
        />
      </div>
    </div>
  );
}
