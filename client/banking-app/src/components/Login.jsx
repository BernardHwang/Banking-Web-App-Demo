import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLDClient } from 'launchdarkly-react-client-sdk'; // Import the LaunchDarkly SDK client
import '../style/components/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const ldClient = useLDClient(); // Get the LaunchDarkly client instance

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8081/api/user/login', {
        username,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.responseCode === "001") {
        // Store user data in local storage
        localStorage.setItem('user', JSON.stringify(response.data));

        // Update LaunchDarkly context with the user information
        const user = response.data.accountInfo.userRequest; // Shortened for clarity
        console.log("Login Response Data:", response.data);

        await ldClient.identify({
          key: user.contextKey,
          name: user.username,
          email: user.email,
          custom: {
            role: user.role
          }
        });

        // Verify and log the updated context
        const currentContext = ldClient.getContext();
        console.log("Current LaunchDarkly Context:", currentContext);

        // Fetch the feature flag after updating the context
        const flagValue = ldClient.variation("chgSignOutBtn", false);
        console.log("Flag Value:", flagValue);

        navigate('/dashboard');
      } else {
        setError(response.data.responseMessage);
      }
    } catch (error) {
      setError("Network Error: Please try again later.");
    }
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
