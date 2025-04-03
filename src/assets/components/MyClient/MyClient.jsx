import React from "react";
import "./MyClient.css";
import PopularClientsData from "../PopularClients/PopularClientsData";
export default function MyClient() {
  return (
    <section className="my-client-container">
      <p className="my-client-title">My awesome clients</p>
      <div className="clients-image-container">
        {PopularClientsData.map((clients) => (
          <img
            key={clients.id}
            src={clients.img}
            alt={clients.clientName}
            className="clients-image"
          />
        ))}
      </div>
    </section>
  );
}
