import React, { useState } from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import '../../css/signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('Please fill all fields.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      setError('');
      alert('Signup successful!');
    }
  };

  return (
    <>
      <Header />
  <div className="signup-page">
    <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="signup-field">
            <label htmlFor="email">Email:</label><br />
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="signup-input"
            />
          </div>
          <div className="signup-field">
            <label htmlFor="password">Password:</label><br />
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="signup-input"
            />
          </div>
          <div className="signup-field">
            <label htmlFor="confirmPassword">Confirm Password:</label><br />
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
              className="signup-input"
            />
          </div>
          {error && <div className="signup-error">{error}</div>}
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <div className="signup-link">
          <a href="/login">Already have an account? Login</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
