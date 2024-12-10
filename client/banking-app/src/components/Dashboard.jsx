import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/components/Dashboard.css';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <div className='container'>
      <div className='personal-info'>
        <h2>Welcome {user.accountInfo.accountName} !</h2>
        <p>Account Number: {user.accountInfo.accountNumber}</p>
        <p>Account Balance: RM{user.accountInfo.accountBalance}</p>
      </div>

      <div className='image-section'>
        <img src='https://image.freepik.com/free-vector/banking-banner-horizontal_1284-14616.jpg' alt='Promotions' />
      </div>

      <div className='services'>
        <h3>Services</h3>
        <div className='services-container'>
          <div
            className='service-item'
            onClick={() => navigate('/debit')}
          >
            <img src='https://cdn-icons-png.flaticon.com/512/1170/1170627.png' alt='Debit' />
            <p>Withdrawal</p>
          </div>
          <div
            className='service-item'
            onClick={() => navigate('/credit')}
          >
            <img src='https://cdn-icons-png.flaticon.com/512/1161/1161798.png' alt='Credit' />
            <p>Deposit</p>
          </div>
          <div
            className='service-item'
            onClick={() => navigate('/transfer')}
          >
            <img src='https://cdn-icons-png.flaticon.com/512/189/189665.png' alt='Transfer Funds' />
            <p>Transfer Funds</p>
          </div>
        </div>
      </div>

      <div className='sign-out'>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Dashboard;