import React, { useState } from 'react';
import './SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import BASE_API_URL from '../config';

const SignUp = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
  };

  // Improved validation and backend signup
  const validateSignUp = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

    if (!username || !email || !password) {
      setMessage("All fields are required.");
      return;
    }
    if (username.length < 4) {
      setMessage("Username must be at least 4 characters.");
      return;
    }
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }
    if (!passwordRegex.test(password)) {
      setMessage("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${BASE_API_URL}/api/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          email,
          password,
          isGoogle: false // ✅ Added to fix normal signup
        }),
      });
      const data = await response.json();
      setMessage(data.message || data.error);
      if (response.ok) {
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (error) {
      setMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Google signup (Firebase)
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      // Optionally, send user info to your backend for registration
      await fetch(`${BASE_API_URL}/api/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: user.displayName || user.email,
          email: user.email,
          password: user.uid, // Or generate a random password
          isGoogle: true // ✅ Explicitly mark Google signup
        }),
      });
      onLogin(user.displayName || user.email);
      setMessage("Google signup successful!");
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    } catch (error) {
      console.error("Google signup failed:", error);
      setMessage("Google signup failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="map-background"></div>
      <div className="signup-container">
        <h2>Welcome to PastPortals</h2>
        <p>Create your account to explore the mysteries of time and innovation</p>
        <hr style={{ margin: '15px 0', borderColor: '#eee' }} />
        <h3>Create Account</h3>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div style={{ position: 'relative' }}>
            <input
              type="password"
              id="password"
              placeholder="Min 8 chars, 1 Upper, 1 Lower, 1 Num, 1 Symbol"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
            <span className="show-pass" onClick={togglePassword}>Show</span>
          </div>
        </div>

        <button onClick={validateSignUp} disabled={loading}>
          {loading ? "Processing..." : "Sign Up"}
        </button>
        {message && <div id="message">{message}</div>}

        <hr />
        <p>Or sign up with</p>

        <button className="social-btn" onClick={handleGoogleLogin} disabled={loading}>
          <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '8px' }} />
          Continue with Google
        </button>

        <div className="login-prompt">
          <p>Already have an account? <a href="/login">Log In</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;