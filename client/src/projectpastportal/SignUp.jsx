
// import React, { useState, useEffect } from 'react';
// import './SignUp.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useNavigate } from 'react-router-dom';
// //import { signInWithPopup } from "firebase/auth";
// import { signInWithPopup } from "firebase/auth";
// import { auth, googleProvider } from "./firebase"; // ✅ Adjust path if needed
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';


// const SignUp = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const togglePassword = () => {
//     const passwordField = document.getElementById("password");
//     passwordField.type = passwordField.type === "password" ? "text" : "password";
//   };

//   const validateSignUp = () => {
//     const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     if (!username || !email || !password) {
//       setMessage("All fields are required.");
//     } else if (username.length < 4) {
//       setMessage("Username must be at least 4 characters.");
//     } else if (!emailRegex.test(email)) {
//       setMessage("Please enter a valid email address.");
//     } else if (!passwordRegex.test(password)) {
//       setMessage("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
//     } else if (storedUsers.some(user => user.username === username)) {
//       setMessage("Username already exists. Please choose another.");
//     } else {
//       storedUsers.push({ username, email, password });
//       localStorage.setItem('users', JSON.stringify(storedUsers));
//       setMessage("Sign up successful!");
//       setTimeout(() => navigate('/login'), 2000);
//     }
//   };


// // useEffect(() => {
// //   getRedirectResult(auth)
// //     .then((result) => {
// //       if (result?.user) {
// //         const user = result.user;
// //         console.log("User signed in with redirect:", user.email);

// //         // Save user info to localStorage
// //         localStorage.setItem("loggedInUser", user.displayName || user.email);

// //         // Navigate to home
// //         navigate("/Home");
// //       }
// //     })
// //     .catch((error) => {
// //       console.error("Redirect login failed:", error);
// //     });
// // }, [navigate]);


// const handleGoogleLogin = async () => {
//   try {
//     const result = await signInWithPopup(auth, googleProvider);
//     const user = result.user;

//     // Save user login locally
//     onLogin(user.displayName || user.email);
//     setMessage("Google login successful!");

//     setTimeout(() => {
//       navigate('/home');
//     }, 2000);
//   } catch (error) {
//     console.error("Google login failed:", error);
//     setMessage("Google login failed.");
//   }
// };


//   return (
//     <div className="signup-page">
//       {/* Optional texture background layer */}
//       {/* <div className="paper-fiber-texture"></div> */}

//       {/* Animated historical map layer */}
//       <div className="map-background"></div>

//       <div className="signup-container">
//         <h2>Welcome to PastPortals</h2>
//         <p>Create your account to explore the mysteries of time and innovation</p>
//         <hr style={{ margin: '15px 0', borderColor: '#eee' }} />
//         <h3>Create Account</h3>

//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             placeholder="Enter your username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <div style={{ position: 'relative' }}>
//             <input
//               type="password"
//               id="password"
//               placeholder="Min 8 chars, 1 Upper, 1 Lower, 1 Num, 1 Symbol"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <span className="show-pass" onClick={togglePassword}>Show</span>
//           </div>
//         </div>

//         <button onClick={validateSignUp}>Sign Up</button>
//         {message && <div id="message">{message}</div>}

//         <hr />
//         <p>Or sign up with</p>

//         <button className="social-btn" onClick={handleGoogleLogin}>
//           <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '8px' }} />
//           Continue with Google
//         </button>
//         {/* <button className="social-btn" onClick={handleFacebookLogin}>
//           <FontAwesomeIcon icon={faFacebookF} style={{ marginRight: '8px' }} />
//           Continue with Facebook
//         </button> */}

//         <div className="login-prompt">
//           <p>Already have an account? <a href="/login">Log In</a></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


import React, { useState } from 'react';
import './SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

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
      const response = await fetch('https://server-96v3.onrender.com/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
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
      // Example:
      await fetch('https://server-96v3.onrender.com/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: user.displayName || user.email,
          email: user.email,
          password: user.uid // Or generate a random password
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