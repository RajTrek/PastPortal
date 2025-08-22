import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const [processing, setProcessing] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const navigate = useNavigate();

  // const validateForm = (e) => {
  //   e.preventDefault();
  //   const name = e.target.name.value.trim();
  //   const email = e.target.email.value.trim();

  //   if (!name || !email) {
  //     alert('Please fill out all required fields.');
  //     return;
  //   }

  //   // Start processing animation
  //   setProcessing(true);

  //   // Simulate 5 seconds processing
  //   setTimeout(() => {
  //     setProcessing(false);
  //     setShowThankYou(true);

  //     // Show thank you for 3 seconds then redirect to Home page
  //     setTimeout(() => {
  //       navigate('/home');
  //     }, 3000);
  //   }, 5000);
  // };
  const validateForm = async (e) => {
  e.preventDefault();
  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const phone = e.target.phone.value.trim();
  const subject = e.target.subject.value.trim();
  const message = e.target.message.value.trim();

  if (!name || !email || !phone || !subject || !message) {
    alert('Please fill out all required fields.');
    return;
  }

  // Start processing animation
  setProcessing(true);

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, subject, message }),
    });

    if (response.ok) {
      setShowThankYou(true);
      setTimeout(() => {
        navigate('/home');
      }, 3000);
    } else {
      alert('Failed to submit the form. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('An error occurred. Please try again later.');
  } finally {
    setProcessing(false);
  }
};



  return (
    <>
      <style>{`
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f4f7fa;
          margin: 0;
          padding: 0;
          color: #333;
        }

        .content {
          padding: 2rem;
          text-align: center;
        }

        h2 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.1rem;
          color: #555;
        }

        .contact-form-section {
          display: flex;
          justify-content: center;
          padding: 2rem 1rem;
        }

        .feedback-form {
          background: white;
          padding: 2rem;
          max-width: 600px;
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          text-align: left;
        }

        .feedback-form h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: #34495e;
        }

        .feedback-form label {
          display: block;
          margin: 0.75rem 0 0.25rem;
          font-weight: 500;
        }

        .feedback-form input,
        .feedback-form textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .feedback-form .btn {
          background-color: #007bff;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .feedback-form .btn:hover {
          background-color: #0056b3;
        }

        .info-columns {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          padding: 2rem 0;
        }

        .info-column {
          background: #ffffff;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.07);
          text-align: left;
        }

        .info-column h3 {
          color: #2c3e50;
          margin-bottom: 0.75rem;
        }

        .contact-info a {
          color: #007bff;
          text-decoration: none;
        }

        .contact-info a:hover {
          text-decoration: underline;
        }

        /* ================= Processing Modal ================= */
        .processing-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(6px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        /* Black Circular Spinner */
        .spinner {
          width: 80px;
          height: 80px;
          border: 8px solid rgba(0, 0, 0, 0.2);
          border-top: 8px solid black;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 20px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .processing-text {
          color: black;
          font-size: 1.5rem;
          font-weight: bold;
          text-shadow: 0 0 5px rgba(0,0,0,0.2);
        }

        /* ================= Thank You Overlay ================= */
        .thank-you-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(12px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10000;
        }

        .thank-you {
          font-size: 4rem;
          font-weight: bold;
          color: black;
          font-family: 'Comic Sans MS', 'Cooper Black', cursive;
          animation: slideInBounce 2.5s forwards;
          text-shadow: 2px 2px 0px #fff, 5px 5px 0px rgba(0,0,0,0.3);
        }

        @keyframes slideInBounce {
          0% {
            transform: translateX(-100%) scale(0.8);
            opacity: 0;
          }
          60% {
            transform: translateX(10%) scale(1.05);
            opacity: 1;
          }
          80% {
            transform: translateX(-5%) scale(0.95);
          }
          100% {
            transform: translateX(0) scale(1);
          }
        }
      `}</style>

      <div className="content">
        <h2>Welcome to PastPortals</h2>
        <p>Discover the fascinating world of lost inventions and the brilliant minds behind them...</p>

        <main className="contact-form-section">
          <div className="feedback-form">
            <h3>Contact Us</h3>
            <form onSubmit={validateForm}>
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />

              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />

              <label htmlFor="phone">Your Phone Number:</label>
              <input type="text" id="phone" name="phone" placeholder="Enter your phone number" required />

              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject" placeholder="Enter the subject" required />

              <label htmlFor="message">Your Message:</label>
              <textarea id="message" name="message" placeholder="Write your message here" rows="6" required></textarea>

              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </main>

        <div className="info-columns">
          <div className="info-column">
            <h3>Upcoming Projects</h3>
            <p>Discover upcoming explorations into lost inventions...</p>
          </div>
          <div className="info-column">
            <h3>Latest Updates</h3>
            <p>Get the freshest news on events, features, and content...</p>
          </div>
          <div className="info-column">
            <h3>Community</h3>
            <p>Join a vibrant community of historians, innovators...</p>
          </div>
          <div className="info-column contact-info">
            <h3>Contact Us</h3>
            <p><strong>Email:</strong> <a href="mailto:support@pastportals.com">support@pastportals.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a></p>
            <p>We’re here to help! Reach out anytime for questions or feedback.</p>
          </div>
        </div>
      </div>

      {processing && (
        <div className="processing-modal">
          <div className="spinner"></div>
          <div className="processing-text">Processing...</div>
        </div>
      )}

      {showThankYou && (
        <div className="thank-you-overlay">
          <div className="thank-you">THANK YOU!</div>
        </div>
      )}
    </>
  );
};

export default ContactPage;