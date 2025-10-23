
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AuthPage from './AuthPage.jsx';

function Root() {
  const [loggedIn, setLoggedIn] = useState(false);
  return loggedIn
    ? <App />
    : <AuthPage onLogin={() => setLoggedIn(true)} />;
}

createRoot(document.getElementById('root')).render(<Root />);