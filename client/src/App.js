import React, { useState, useEffect } from 'react'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import VideoTest from './projectpastportal/VideoTest';

import LandingPage from './projectpastportal/LandingPage';
import LoginPage from './projectpastportal/Login';
import SignUp from './projectpastportal/SignUp';
import HomePage from './projectpastportal/HomePage';
import CenturyMap from './projectpastportal/CenturyMap';
import ContactPage from './projectpastportal/ContactPage';
import Navbar from './projectpastportal/Navbar';
import Inventions from './projectpastportal/Inventions';
import ScientistsPage from './projectpastportal/ScientistsPage';
import Footer from './projectpastportal/Footer';  // ✅ Import Footer
import EasyQuiz from "./projectpastportal/Quiz/EasyQuiz";
import ModerateQuiz from "./projectpastportal/Quiz/ModerateQuiz";
import HardQuiz from "./projectpastportal/Quiz/HardQuiz";
import QuizHome from "./projectpastportal/Quiz/Home";

const AppRoutes = ({
  loggedInUser,
  handleLogin,
  handleLogout,
  isDemoMode,
  setIsDemoMode,
}) => {
  const location = useLocation();
  const hideNavbarOn = ['/', '/login', '/signup'];
  const shouldShowNavbar = !hideNavbarOn.includes(location.pathname);

  const ProtectedRoute = ({ children }) => {
    if (loggedInUser) return children;
    // if isDemoMode && location.pathname = ['/home', '/quiz', '/quiz/easy', '/quiz/moderate', '/quiz/hard']; return children;
    const demoAccessibleRoutes = ['/home', '/quiz', '/quiz/easy', '/quiz/moderate', '/quiz/hard'];
    return <Navigate to="/login" />;
  };

  return (
    <>
      {shouldShowNavbar && (
        <Navbar
          isLoggedIn={!!loggedInUser}
          isDemoMode={isDemoMode}   // ✅ Pass demo mode
          handleLogout={handleLogout}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              handleDemo={() => {
                setIsDemoMode(true);
              }}
            />
          }
        />
<Route path="/videotest" element={<VideoTest />} />

       <Route
          path="/login"
          element={
            <LoginPage
              onLogin={(user) => {
                handleLogin(user);
                setIsDemoMode(false);
              }}
            />
          }
        />
       <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />


        <Route
          path="/Home"
          element={
            <ProtectedRoute>
              <HomePage onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/century-map"
          element={
            <ProtectedRoute>
              <CenturyMap />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact-page"
          element={
            <ProtectedRoute>
              <ContactPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/inventions-page"
          element={
            <ProtectedRoute>
              <Inventions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/scientists-page"
          element={
            <ProtectedRoute>
              <ScientistsPage />
            </ProtectedRoute>
          }
        />
        {/* 👉 Quiz Routes */}
<Route
  path="/quiz"
  element={
    <ProtectedRoute>
      <QuizHome />
    </ProtectedRoute>
  }
/>
<Route
  path="/quiz/easy"
  element={
    <ProtectedRoute>
      <EasyQuiz />
    </ProtectedRoute>
  }
/>
<Route
  path="/quiz/moderate"
  element={
    <ProtectedRoute>
      <ModerateQuiz />
    </ProtectedRoute>
  }
/>
<Route
  path="/quiz/hard"
  element={
    <ProtectedRoute>
      <HardQuiz />
    </ProtectedRoute>
  }
/>
      </Routes>

      {/* ✅ Footer added at the end of every page */}
      <Footer />  
    </>
  );
};

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isDemoMode, setIsDemoMode] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem('loggedInUser');
    if (currentUser) setLoggedInUser(currentUser);
  }, []);

  const handleLogin = (username) => {
    localStorage.setItem('loggedInUser', username);
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
    setIsDemoMode(false);
  };

  return (
    <Router>
      <AppRoutes
        loggedInUser={loggedInUser}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        isDemoMode={isDemoMode}
        setIsDemoMode={setIsDemoMode}
      />
    </Router>
  );
};

export default App;
