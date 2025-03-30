import React from 'react'
import './MyClient.css'

export default function MyClient() {
  return (
    <section className="my-client-container">
        <p className="my-client-title">My awesome clients</p>
        <div className="clients-image-container">
            <img src="../public/image/logo-coinbase.svg" alt="coinbase" className="clients-image" />
            <img src="../public/image/logo-spotify.svg" alt="spotify" className="clients-image" />
            <img src="../public/image/logo-pinterest.svg" alt="pinterest" className="clients-image" />
            <img src="../public/image/logo-google.svg" alt="google" className="clients-image" />
            <img src="../public/image/logo-amazon.svg" alt="amazon" className="clients-image" />
            <img src="../public/image/logo-netflix.svg" alt="netflix" className="clients-image" />
        </div>
    </section>
  )
}
