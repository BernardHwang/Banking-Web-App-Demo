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
            <i class="fi fi-rr-money-from-bracket"></i>
            <p>Withdrawal</p>
          </div>
          <div
            className='service-item'
            onClick={() => navigate('/credit')}
          >
            <i class="fi fi-rr-deposit-alt"></i>
            <p>Deposit</p>
          </div>
          <div
            className='service-item'
            onClick={() => navigate('/transfer')}
          >
            <i class="fi fi-rr-money-coin-transfer icon"></i>
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