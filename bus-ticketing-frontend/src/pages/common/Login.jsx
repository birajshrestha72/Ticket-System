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
    // Basic authentication simulation (replace with real logic)
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
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '12px' }}>
            <label htmlFor="email">Email:</label><br />
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <div style={{ marginBottom: '12px' }}>
            <label htmlFor="password">Password:</label><br />
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          {error && <div style={{ color: 'red', marginBottom: '12px' }}>{error}</div>}
          <button type="submit" style={{ width: '100%', padding: '10px', background: '#222', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Login</button>
        </form>
        <div style={{ marginTop: '16px', textAlign: 'center' }}>
          <a href="/signup">Don't have an account? Sign up</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
