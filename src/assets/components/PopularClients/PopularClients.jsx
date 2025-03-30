import React from 'react'
import './PopularClients.css'


export default function PopularClients() {
  return (
    <section className="popular-client-container">

        <p className="popular-client-header">POPULAR CLIENTS</p>
        <h3 className="popular-client-title">Trusted by over 10,000+ clients</h3>
        <div className="popular-clients-image-container">
            <img src="../public/image/logo-coinbase.svg" alt="coinbase" className="popular-clients-image" />
            <img src="../public/image/logo-spotify.svg" alt="spotify" className="popular-clients-image" />
            <img src="../public/image/logo-pinterest.svg" alt="pinterest" className="popular-clients-image" />
            <img src="../public/image/logo-google.svg" alt="google" className="popular-clients-image" />
            <img src="../public/image/logo-amazon.svg" alt="amazon" className="popular-clients-image" />
            <img src="../public/image/logo-netflix.svg" alt="netflix" className="popular-clients-image" />
        </div>
    </section>
  )
}
