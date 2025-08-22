import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {

  const [email, setEmail] = useState('');

  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {

      setMessage("Please enter your email.");
      

      return;

    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/forgot-password', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message || "If your email exists, a reset link has been sent.");
    } catch (error) {
      setMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="map-background"></div>
      <div className="login-container">
        <h2>Forgot Your Password?</h2>
        <p>Enter your email and we’ll send you a link to reset it.</p>
        <hr style={{ margin: '15px 0', borderColor: '#eee' }} />

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input  style={{ margin: '15px 0', borderColor: '#eee' ,width:"100%" , borderRadius:"10px", height:"70%"}}
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <button type="submit" disabled={loading}>

            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
        {message && <div id="message" style={{ marginTop: '10px' }}>{message}</div>}

        <div className="signup-prompt" style={{ marginTop: '20px' }}>
           <p>

            Remembered your password?{' '}
            <span
              style={{ color: '#007bff', cursor: 'pointer' }}
              onClick={() => navigate('/login')}
            >
              Log In
            </span>

          </p>
        </div>
      </div>
    </div>
  );

};

export default ForgotPassword;