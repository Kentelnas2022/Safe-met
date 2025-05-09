import React from 'react';
import NavBar from './NavBar';

const Emergency = () => (
  <>
    <header className="header">
      <h1 className="page-title">Emergency</h1>
    </header>
    <main className="center emergency-section">
      <div className="sos-button">SOS</div>
      <p className="sos-description">
        After pressing the SOS button, we will alert the nearest hospital, police, and traffic enforcer to your current location.
      </p>
    </main>
    <NavBar active={1} />
  </>
);

export default Emergency;