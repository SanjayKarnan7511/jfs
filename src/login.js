import { useState } from 'react';
import './App.css';

function Login({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email.trim()) return setError('Please enter email');
    if (!password) return setError('Please enter password');
    if (!email.includes('@')) return setError('Enter a valid email');
    if (onSuccess) onSuccess(email);
  };

  return (
    <div className="login-card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {error && <div className="error">{error}</div>}
        <div className="row">
          <button type="submit" className="addbtn">Sign in</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
