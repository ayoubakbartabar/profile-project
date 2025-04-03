import React from "react";
import "./PopularClients.css";
import PopularClientsData from "./PopularClientsData";

export default function PopularClients() {
  return (
    <section className="popular-client-container">
      <p className="popular-client-header">POPULAR CLIENTS</p>
      <h3 className="popular-client-title">Trusted by over 10,000+ clients</h3>
      <div className="popular-clients-image-container">
        {PopularClientsData.map((clients) => (
          <img
          key={clients.id}
            src={clients.img}
            alt={clients.clientName}
            className="popular-clients-image"
          />
        ))}
      </div>
    </section>
  );
}
