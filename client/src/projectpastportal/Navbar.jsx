import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, isDemoMode, handleLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleMenu = () => {
    setSidebarOpen((prev) => !prev);
  };

  // ✅ Auto-close sidebar when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen]);

  const isActive = (path) => location.pathname === path;

  const handleExploreClick = (e, path) => {
    if (!isLoggedIn && !isDemoMode) {
      e.preventDefault();
      navigate('/login');
    } else if (isDemoMode && path !== '/home') {
      e.preventDefault();
      navigate('/login');
    } else {
      setSidebarOpen(false); // Close sidebar after navigation
    }
  };

  const handleLoginRedirect = () => navigate('/login');
  const handleSignupRedirect = () => navigate('/signup');

  return (
    <>
      <header>
        <h1>
          <svg className="hourglass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e67e22" />
                <stop offset="100%" stopColor="#d35400" />
              </linearGradient>
            </defs>
            <path
              fill="url(#grad1)"
              d="M12 0C10.9 0 10 0.9 10 2V4H8C6.9 4 6 4.9 6 6V8H4C2.9 8 2 8.9 2 10V12C2 13.1 2.9 14 4 14H6V16C6 17.1 6.9 18 8 18H10V20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20V18H16C17.1 18 18 17.1 18 16V14H20C21.1 14 22 13.1 22 12V10C22 8.9 21.1 8 20 8H18V6C18 4.9 17.1 4 16 4H14V2C14 0.9 13.1 0 12 0Z"
            />
          </svg>
          PastPortals
        </h1>
        <p className="tagline">Unravel the Mysteries of Time and Innovation</p>
      </header>

      <nav>
        <div className="nav-logo">PastPortals</div>

        <div className="nav-links">
          <div className={`nav-item ${isActive('/home') ? 'active' : ''}`}>
            <Link to="/home">Home</Link>
          </div>

          <div className="nav-item">
            <span>Explore</span>
            <div className="dropdown">
              <Link to="/scientists-page" onClick={(e) => handleExploreClick(e, '/scientists-page')}>
                Scientists
              </Link>
              <Link to="/inventions-page" onClick={(e) => handleExploreClick(e, '/inventions-page')}>
                Inventions
              </Link>
              <Link to="/quiz" onClick={(e) => handleExploreClick(e, '/quiz')}>
                Quiz
              </Link>
            </div>
          </div>

          <div className={`nav-item ${isActive('/century-map') ? 'active' : ''}`}>
            <Link to="/century-map" onClick={(e) => handleExploreClick(e, '/century-map')}>
              Maps
            </Link>
          </div>

          <div className={`nav-item ${isActive('/contact-page') ? 'active' : ''}`}>
            <Link to="/contact-page" onClick={(e) => handleExploreClick(e, '/contact-page')}>
              Contact
            </Link>
          </div>
        </div>

        {/* ✅ Updated Auth Buttons */}
        <div className="auth-buttons" style={{ display: 'flex', gap: '0.5rem' }}>
          {isLoggedIn ? (
            <button className="auth-btn logout-btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <button
                className="auth-btn login-btn"
                style={{ backgroundColor: '#e74c3c' }}  // Red color
                onClick={handleLoginRedirect}
              >
                Login
              </button>
              <button
                className="auth-btn signup-btn"
                style={{ backgroundColor: '#e74c3c' }}  // Red color
                onClick={handleSignupRedirect}
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </nav>

      {/* Sidebar with slide animation */}
      <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
        <h2>Navigation</h2>
        <Link to="/home" onClick={(e) => handleExploreClick(e, '/home')}>Home</Link>
        <Link to="/scientists-page" onClick={(e) => handleExploreClick(e, '/scientists-page')}>Scientists</Link>
        <Link to="/inventions-page" onClick={(e) => handleExploreClick(e, '/inventions-page')}>Inventions</Link>
        <Link to="/quiz" onClick={(e) => handleExploreClick(e, '/quiz')}>Quiz</Link>
        <Link to="/century-map" onClick={(e) => handleExploreClick(e, '/century-map')}>Maps</Link>
        <Link to="/contact-page" onClick={(e) => handleExploreClick(e, '/contact-page')}>Contact</Link>
      </div>
    </>
  );
};

export default Navbar;
