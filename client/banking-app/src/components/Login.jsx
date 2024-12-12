import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/components/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    axios.post('http://localhost:8081/api/user/login', {
      username,
      password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.data.responseCode === "001") {
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/dashboard');
      } else {
        setError(response.data.responseMessage);
      }
    })
    .catch(error => {
      setError("Network Error: Please try again later.");
    });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;