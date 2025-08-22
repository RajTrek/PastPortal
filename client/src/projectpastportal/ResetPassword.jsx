import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    if (!newPassword) {
      setMessage("Please enter a new password.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword }),
      });

      const data = await response.json();
      setMessage(data.message || "Password reset successful.");
      if (response.ok) {
        setTimeout(() => navigate('/login'), 2000);
      }
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
        <h2>Reset Your Password</h2>
        <p>Enter a new password to regain access to your account.</p>
        <hr style={{ margin: '15px 0', borderColor: '#eee' }} />

        <form onSubmit={handleReset}>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        {message && <div id="message" style={{ marginTop: '10px' }}>{message}</div>}
      </div>
    </div>
  );
};

export default ResetPassword;