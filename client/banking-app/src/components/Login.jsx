import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from './UserContext';
import '../style/components/Login.css';

const list = [
  {
    picUrl: "https://i.pinimg.com/236x/af/84/d1/af84d13e2a6fb1e5f554dd4148b96860.jpg",
    username: "Bernard",
    password: '123456',
    isVIP: true,
    accountInfo: {
      accountNumber: '0182608822',
      accountBalance: 9999999999999.99
    }
  },
  {
    picUrl: "https://avatarfiles.alphacoders.com/221/221852.jpg",
    username: "Kienan",
    password: '123456',
    isVIP: false,
    accountInfo: {
      accountNumber: '0182608822',
      accountBalance: 9999999999999.99
    }
  },
  {
    picUrl: "https://yourdailygerman.com/wp-content/uploads/2022/12/gigachad.jpg",
    username: "Jacky",
    password: '123456',
    isVIP: false,
    accountInfo: {
      accountNumber: '0182608822',
      accountBalance: 9999999999999.99
    }
  },
  {
    picUrl: "https://wallpapers-clan.com/wp-content/uploads/2022/05/meme-pfp-12.jpg",
    username: "Qing Hao",
    password: '123456',
    isVIP: true,
    accountInfo: {
      accountNumber: '0182608822',
      accountBalance: 9999999999999.99
    }
  },
];

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useUserContext();
  const navigate = useNavigate();

  const handleUserSelect = (selectedUsername) => {
    const user = list.find((user) => user.username === selectedUsername);
    if (user) {
      setUsername(user.username);
      setPassword(user.password); // Autofill the password field
    }
  };

  const handleLogin = () => {
    const user = list.find(
      (item) =>
        item.username.toLowerCase() === username.toLowerCase() &&
        item.password === password
    );

    if (user) {
      const userDetails = {
        picUrl: user.picUrl,
        username: user.username,
        password: user.password,
        isVIP: user.isVIP,
        accountInfo: {
          accountNumber: user.accountInfo.accountNumber,
          accountBalance: user.accountInfo.accountBalance,
        },
      };
      login(userDetails);
      navigate('/dashboard');
    } else {
      alert('Login Failed: Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="user-selection">Select User:</label>
        <select
          id="user-selection"
          onChange={(e) => handleUserSelect(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
            Select a user
          </option>
          {list.map((user) => (
            <option key={user.username} value={user.username}>
              {user.username} - {user.isVIP ? "VIP" : "Normal"
            </option>
          ))}
        </select>
      </div>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
