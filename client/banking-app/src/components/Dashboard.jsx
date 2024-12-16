import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/components/Dashboard.css';
import { useFlags } from 'launchdarkly-react-client-sdk';

const Dashboard = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const navigate = useNavigate();

  useEffect(() => {
    // Re-fetch user data from local storage
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  const { chgSignOutBtn } = useFlags();

  const handleSignOut = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <div className='dashboard-container'>
      <div className='personal-info'>
        <h2>Welcome {user.accountInfo.accountName} !</h2>
        <p>Account Number: {user.accountInfo.accountNumber}</p>
        <p>Account Balance: RM{user.accountInfo.accountBalance}</p>
      </div>

      <div className='services'>
        <div className='services-container'>
          <div
            className='service-item'
            onClick={() => navigate('/debit')}
          >
            <i className="fi fi-rr-money-from-bracket"></i>
            <p>Withdrawal</p>
          </div>
          <div
            className='service-item'
            onClick={() => navigate('/credit')}
          >
            <i className="fi fi-rr-deposit-alt"></i>
            <p>Deposit</p>
          </div>
          <div
            className='service-item'
            onClick={() => navigate('/transfer')}
          >
            <i className="fi fi-rr-money-coin-transfer icon"></i>
            <p>Transfer Funds</p>
          </div>
        </div>
      </div>

      <div className={`${chgSignOutBtn ? "sign-out-new" : "sign-out"}`}>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Dashboard;