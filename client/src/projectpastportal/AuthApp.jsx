import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthApp = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authMessage, setAuthMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (!username.trim() || !password.trim()) {
      setAuthMessage('❌ All fields are required.');
      return;
    }

    if (isLogin) {
      const foundUser  = storedUsers.find((user) => user.username === username);
      if (!foundUser ) {
        setAuthMessage('❌ User not found. Please sign up first.');
      } else if (foundUser.password !== password) {
        setAuthMessage('❌ Incorrect password.');
      } else {
        setAuthMessage('');
        localStorage.setItem('loggedInUser ', username);
        onLogin(username);
        navigate('/');
      }
    } else {
      const userExists = storedUsers.some((user) => user.username === username);
      if (userExists) {
        setAuthMessage('❌ Username already exists. Try another.');
      } else {
        storedUsers.push({ username, password });
        localStorage.setItem('users', JSON.stringify(storedUsers));
        setAuthMessage('✅ Signup successful! You can now log in.');
        setUsername('');
        setPassword('');
        setIsLogin(true);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? 'Login' : 'Signup'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full border px-4 py-2 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setAuthMessage('');
            }}
            className="text-blue-500 hover:underline"
          >
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </p>

        {authMessage && (
          <div className="mt-3 text-sm text-red-600 text-center">
            {authMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthApp;
