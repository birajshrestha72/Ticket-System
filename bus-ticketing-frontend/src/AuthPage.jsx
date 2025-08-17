import React, { useState } from 'react';
import { auth, googleProvider } from './firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleAuth = async () => {
    setError('');
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <form className="space-y-4" onSubmit={handleAuth}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            required
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <button
          onClick={handleGoogleAuth}
          className="w-full py-2 font-semibold text-white bg-red-500 rounded hover:bg-red-600"
        >
          Continue with Gmail
        </button>
        <div className="text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:underline"
          >
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
