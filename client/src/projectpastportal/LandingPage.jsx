import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage({ handleDemo }) {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login'); // User must log in to access Explore content
  };

  const handleDemoClick = () => {
    handleDemo(); // Enable demo mode from App state
    navigate('/home'); // Direct access to home only
  };

  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-gradient-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-icon-container">
              <div className="hourglass-icon">
                <span className="material-icons">hourglass_empty</span>
              </div>
            </div>

            <div className="hero-text">
              <h1>
                <span className="hero-main-title">PastPortals</span>
                <span className="hero-subtitle">Journey Through Forgotten Time</span>
              </h1>

              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Lost Innovations</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">300+</div>
                  <div className="stat-label">Visionary Minds</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Historical Periods</div>
                </div>
              </div>

              <p className="hero-description">
                Unlock the hidden chapters of history where brilliant minds and
                groundbreaking innovations were lost to time. Our interactive
                platform brings these forgotten treasures back to light through
                immersive timelines, detailed biographies, and virtual recreations.
              </p>

              <div className="hero-cta">
                <button className="cta-primary" onClick={handleGetStarted}>
                  <span className="material-icons">Explore Now</span>
                </button>
                <button className="cta-secondary" onClick={handleDemoClick}>
                  <span className="material-icons">Watch Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Discover Our Collections</h2>
            <p className="section-subheader">
              Browse through meticulously curated historical content
            </p>
          </div>

          <div className="feature-cards">
            <div className="feature-card">
              <div className="card-icon">
                <span className="material-icons">Timeline</span>
              </div>
              <h3>Interactive Timelines</h3>
              <p className="card-content">
                Navigate through beautifully crafted chronological journeys that
                connect innovations across civilizations and epochs.
              </p>
              <div className="card-highlight">
                <span>Featured:</span> The Evolution of Mechanical Computing
              </div>
              <button className="card-button">View Timeline</button>
            </div>

            <div className="feature-card highlight">
              <div className="card-icon">
                <span className="material-icons">Person</span>
              </div>
              <h3>Innovator Profiles</h3>
              <p className="card-content">
                Meet the brilliant minds behind forgotten technologies through
                detailed biographical archives and personal artifacts.
              </p>
              <div className="card-highlight">
                <span>Featured:</span> Ada Lovelace's Unpublished Papers
              </div>
              <button className="card-button highlight">Explore Profiles</button>
            </div>

            <div className="feature-card">
              <div className="card-icon">
                <span className="material-icons">Virtual Reality </span>
              </div>
              <h3>Virtual Reconstructions</h3>
              <p className="card-content">
                Experience revolutionary inventions through our VR-enabled
                recreations of historical prototypes and designs.
              </p>
              <div className="card-highlight">
                <span>Featured:</span> The Antikythera Mechanism
              </div>
              <button className="card-button">Launch Experience</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
