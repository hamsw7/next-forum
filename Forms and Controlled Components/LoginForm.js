import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real app, you would perform authentication here
    if (email === 'example@example.com' && password === 'password') {
      setLoggedIn(true);
    }
  };

  return (
    <div>
      {!loggedIn ? (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <h1>Welcome!</h1>
          <p>You are now logged in.</p>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
