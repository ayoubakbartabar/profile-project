import React, { useState } from "react";
import ClientsInfo from "./ClientsData";
import "./Clients.css";

export default function Clients() {
  // set Hook
  const [selectedClient, setSelectedClient] = useState(ClientsInfo[0]);
  // create function for client info handler
  const clientSayHandler = (client) => {
    setSelectedClient(client);
  };

  return (
    <div className="clients-content">
      <div className="clients-info-container">
        <h2 className="clients-title">{selectedClient.expertise}</h2>
        <p className="clients-paragraph">{selectedClient.description}</p>
        <h5 className="clients-info">
          {selectedClient.name} - {selectedClient.position}
        </h5>
        <p className="clients-address">Marketing @ APPLE INC.</p>
        <div className="all-clients-image-container">
          {ClientsInfo.map((client) => (
            <a
              key={client.id}
              className="clients-avatar-btn"
              onClick={() => clientSayHandler(client)}
            >
              <img
                className="clients-avatar-image"
                src={client.avatar}
                alt={client.name}
              />
            </a>
          ))}
        </div>
      </div>
      <div>
        <img
          className="clients-avatar"
          src={selectedClient.avatar}
          alt={selectedClient.name}
        />
      </div>
    </div>
  );
}
