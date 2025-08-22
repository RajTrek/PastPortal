// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LandingPage.css';

// function LandingPage({ handleDemo }) {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate('/login'); // User must log in to access Explore content
//   };

//   const handleDemoClick = () => {
//     handleDemo(); // Enable demo mode from App state
//     navigate('/home'); // Direct access to home only
//   };

//   return (
//     <div className="landing-page">
//       <section className="hero-section">
//         <div className="hero-gradient-overlay"></div>
//         <div className="container">
//           <div className="hero-content">
//             <div className="hero-icon-container">
//               <div className="hourglass-icon">
//                 <span className="material-icons">hourglass_empty</span>
//               </div>
//             </div>

//             <div className="hero-text">
//               <h1>
//                 <span className="hero-main-title">PastPortals</span>
//                 <span className="hero-subtitle">Journey Through Forgotten Time</span>
//               </h1>

//               <div className="hero-stats">
//                 <div className="stat-item">
//                   <div className="stat-number">500+</div>
//                   <div className="stat-label">Lost Innovations</div>
//                 </div>
//                 <div className="stat-item">
//                   <div className="stat-number">300+</div>
//                   <div className="stat-label">Visionary Minds</div>
//                 </div>
//                 <div className="stat-item">
//                   <div className="stat-number">25+</div>
//                   <div className="stat-label">Historical Periods</div>
//                 </div>
//               </div>

//               <p className="hero-description">
//                 Unlock the hidden chapters of history where brilliant minds and
//                 groundbreaking innovations were lost to time. Our interactive
//                 platform brings these forgotten treasures back to light through
//                 immersive timelines, detailed biographies, and virtual recreations.
//               </p>

//               <div className="hero-cta">
//                 <button className="cta-primary" onClick={handleGetStarted}>
//                   <span className="material-icons">Explore Now</span>
//                 </button>
//                 <button className="cta-secondary" onClick={handleDemoClick}>
//                   <span className="material-icons">Watch Demo</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="features-section">
//         <div className="container">
//           <div className="section-header">
//             <h2>Discover Our Collections</h2>
//             <p className="section-subheader">
//               Browse through meticulously curated historical content
//             </p>
//           </div>

//           <div className="feature-cards">
//             <div className="feature-card">
//               <div className="card-icon">
//                 <span className="material-icons">Timeline</span>
//               </div>
//               <h3>Interactive Timelines</h3>
//               <p className="card-content">
//                 Navigate through beautifully crafted chronological journeys that
//                 connect innovations across civilizations and epochs.
//               </p>
//               <div className="card-highlight">
//                 <span>Featured:</span> The Evolution of Mechanical Computing
//               </div>
//               <button className="card-button">View Timeline</button>
//             </div>

//             <div className="feature-card highlight">
//               <div className="card-icon">
//                 <span className="material-icons">Person</span>
//               </div>
//               <h3>Innovator Profiles</h3>
//               <p className="card-content">
//                 Meet the brilliant minds behind forgotten technologies through
//                 detailed biographical archives and personal artifacts.
//               </p>
//               <div className="card-highlight">
//                 <span>Featured:</span> Ada Lovelace's Unpublished Papers
//               </div>
//               <button className="card-button highlight">Explore Profiles</button>
//             </div>

//             <div className="feature-card">
//               <div className="card-icon">
//                 <span className="material-icons">Virtual Reality </span>
//               </div>
//               <h3>Virtual Reconstructions</h3>
//               <p className="card-content">
//                 Experience revolutionary inventions through our VR-enabled
//                 recreations of historical prototypes and designs.
//               </p>
//               <div className="card-highlight">
//                 <span>Featured:</span> The Antikythera Mechanism
//               </div>
//               <button className="card-button">Launch Experience</button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default LandingPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './LandingPage.css';

import img1 from './images/img1.jpg'; // fixed path
import img2 from "./images/img2..jpg";
import img3 from './images/img3.jpg';
import  img4 from "./images/img4.jpg";

function LandingPage({ handleDemo }) {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  const handleDemoClick = () => {
    handleDemo();
    navigate('/home');
  };
const styles = [
  { name: 'Time Capsule', img: img1, alt: 'Stylized 3D look evoking historical depth' },
  { name: 'Heritage Lens', img: img2, alt: 'Photorealistic style with a vintage touch' },
  { name: 'Ink & Era', img: img3, alt: 'Watercolor style inspired by old manuscripts' },
  { name: 'ChronoSketch', img: img4, alt: 'Anime-style with a historical twist' },
];

  return (
    <div className="landing-page">
      {/* Hero Section */}
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

      {/* Features Section */}
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
                <span className="material-icons">Virtual Reality</span>
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

      {/* Image Style Selector Section */}
      <section className="style-selector-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="style-intro"
          >
            <h2>Explore History Through Visual Lenses</h2>
<p>
  Begin your journey into the forgotten chapters of innovation. Choose a visual style to uncover lost inventions, meet visionary scientists, navigate interactive timelines, and test your knowledge through immersive quizzes and historical maps.
</p>
          </motion.div>
<motion.div
  className="style-grid"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }}
>
  {styles.map((style) => (
    <motion.div
      key={style.name}
      className="style-card"
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
      whileHover={{ scale: 1.05 }}
    >
    <img src={style.img} alt={`${style.name} style`} />
      <span>{style.name}</span>
    </motion.div>
  ))}
</motion.div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;