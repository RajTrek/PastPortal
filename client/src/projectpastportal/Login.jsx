
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';
// import { signInWithPopup } from "firebase/auth";
// import { auth, googleProvider } from "./firebase";

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Backend login logic
//   const validateLogin = async () => {
//     if (!username || !password) {
//       setMessage("All fields are required.");
//       return;
//     }
//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await response.json();
//       setMessage(data.message || data.error);
//       if (response.ok) {
//         onLogin(username);
//         setTimeout(() => {
//           navigate('/home');
//         }, 2000);
//       }
//     } catch (error) {
//       setMessage("Server error. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const togglePassword = () => {
//     const passwordField = document.getElementById("password");
//     passwordField.type = passwordField.type === "password" ? "text" : "password";
//   };

//   // Google login (Firebase)
//   const handleGoogleLogin = async () => {
//     setLoading(true);
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;
//       // Optionally, send user info to your backend for login/registration
//       // Example:
//       await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           username: user.displayName || user.email,
//           password: user.uid // Or a token
//         }),
//       });
//       onLogin(user.displayName || user.email);
//       setMessage("Google login successful!");
//       setTimeout(() => {
//         navigate('/home');
//       }, 2000);
//     } catch (error) {
//       console.error("Google login failed:", error);
//       setMessage("Google login failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="map-background"></div>
//       <div className="login-container">
//         <h2>Welcome Back to PastPortals</h2>
//         <p>Please log in to continue exploring the mysteries of time and innovation</p>
//         <hr style={{ margin: '15px 0', borderColor: '#eee' }} />
//         <h3>Log In</h3>

//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             placeholder="Enter your username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             disabled={loading}
//           />
//         </div>

//        <div className="form-group">
//   <label htmlFor="password">Password</label>
//   <div style={{ position: 'relative' }}>
//     <input
//       type="password"
//       id="password"
//       placeholder="Enter your password"
//       value={password}
//       onChange={(e) => setPassword(e.target.value)}
//       required
//       disabled={loading}
//     />
//     <span className="show-pass" onClick={togglePassword}>Show</span>
//   </div>
//   <div className="forgot-password">
//     <p><a href="/forgot-password">Forgot Password?</a></p>
//   </div>
// </div>

//         <button onClick={validateLogin} disabled={loading}>
//           {loading ? "Processing..." : "Log In"}
//         </button>
//         {message && <div id="message">{message}</div>}

//         <hr />
//         <p>Or log in with</p>

//         <button className="social-btn" onClick={handleGoogleLogin} disabled={loading}>
//           <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '8px' }} />
//           Continue with Google
//         </button>
//         {/* <button className="social-btn">
//           <FontAwesomeIcon icon={faFacebookF} style={{ marginRight: '8px' }} />
//           Continue with Facebook
//         </button> */}

//         <div className="signup-prompt">
//           <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Backend login logic
  const validateLogin = async () => {
    if (!username || !password) {
      setMessage("All fields are required.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      setMessage(data.message || data.error);
      if (response.ok) {
        onLogin(username);
        setTimeout(() => {
          navigate('/home');
        }, 2000);
      }
    } catch (error) {
      setMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const togglePassword = () => {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
  };

  // Google login (Firebase)
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      // Optionally, send user info to your backend for login/registration
      // Example:
      await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: user.displayName || user.email,
          password: user.uid // Or a token
        }),
      });
      onLogin(user.displayName || user.email);
      setMessage("Google login successful!");
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    } catch (error) {
      console.error("Google login failed:", error);
      setMessage("Google login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="map-background"></div>
      <div className="login-container">
        <h2>Welcome Back to PastPortals</h2>
        <p>Please log in to continue exploring the mysteries of time and innovation</p>
        <hr style={{ margin: '15px 0', borderColor: '#eee' }} />
        <h3>Log In</h3>

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
  <label htmlFor="password">Password</label>
  <div style={{ position: 'relative' }}>
    <input
      type="password"
      id="password"
      placeholder="Enter your password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      disabled={loading}
    />
    <span className="show-pass" onClick={togglePassword}>Show</span>
  </div>
  <div className="forgot-password">
    <p><a href="/forgot-password">Forgot Password?</a></p>
  </div>
</div>

        <button onClick={validateLogin} disabled={loading}>
          {loading ? "Processing..." : "Log In"}
        </button>
        {message && <div id="message">{message}</div>}

        <hr />
        <p>Or log in with</p>

        <button className="social-btn" onClick={handleGoogleLogin} disabled={loading}>
          <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '8px' }} />
          Continue with Google
        </button>
        {/* <button className="social-btn">
          <FontAwesomeIcon icon={faFacebookF} style={{ marginRight: '8px' }} />
          Continue with Facebook
        </button> */}

        <div className="signup-prompt">
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;