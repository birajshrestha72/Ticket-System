import React, { useState } from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import '../../css/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
    } else {
      setError('');
      alert('Login successful!');
    }
  };

  return (
    <>
      <Header />
  <div className="login-page">
    <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-field">
            <label htmlFor="email">Email:</label><br />
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="login-input"
            />
          </div>
          <div className="login-field">
            <label htmlFor="password">Password:</label><br />
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="login-input"
            />
          </div>
          {error && <div className="login-error">{error}</div>}
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="login-link">
          <a href="/signup">Don't have an account? Sign up</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
