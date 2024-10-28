import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setMessage("Welcome, user!");
      setIsLoggedIn(true);
    } else {
      setMessage("Invalid username or password");
      setIsLoggedIn(false);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {!isLoggedIn && message === "Invalid username or password" && (
        <p>{message}</p>
      )}
      {!isLoggedIn && (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
      {isLoggedIn && <p>{message}</p>}
    </div>
  );
};

export default Login;
