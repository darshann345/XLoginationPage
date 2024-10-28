import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setWelcomeMessage('');

    if (!username) {
      setError('Username is required');
      return;
    }

    if (!password) {
      setError('Password is required');
      return;
    }

    // Dummy login validation
    if (username === 'user' && password === 'password') {
      setWelcomeMessage(`Welcome, ${username}`);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

      {error && <p>{error}</p>}
      {welcomeMessage && <p>{welcomeMessage}</p>}
    </div>
  );
};

export default Login;
