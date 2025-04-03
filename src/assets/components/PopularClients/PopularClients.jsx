import React from 'react';
import './PopularClients.css';

import coinbaseLogo from '../../../../public/logos/logo-coinbase.svg';
import spotifyLogo from '../../../../public/logos/logo-spotify.svg';
import pinterestLogo from '../../../../public/logos/logo-pinterest.svg';
import googleLogo from '../../../../public/logos/logo-google.svg';
import amazonLogo from '../../../../public/logos/logo-amazon.svg';
import netflixLogo from '../../../../public/logos/logo-netflix.svg';

export default function PopularClients() {
  return (
    <section className="popular-client-container">
      <p className="popular-client-header">POPULAR CLIENTS</p>
      <h3 className="popular-client-title">Trusted by over 10,000+ clients</h3>
      <div className="popular-clients-image-container">
        <img src={coinbaseLogo} alt="Coinbase" className="popular-clients-image" />
        <img src={spotifyLogo} alt="Spotify" className="popular-clients-image" />
        <img src={pinterestLogo} alt="Pinterest" className="popular-clients-image" />
        <img src={googleLogo} alt="Google" className="popular-clients-image" />
        <img src={amazonLogo} alt="Amazon" className="popular-clients-image" />
        <img src={netflixLogo} alt="Netflix" className="popular-clients-image" />
      </div>
    </section>
  );
}
