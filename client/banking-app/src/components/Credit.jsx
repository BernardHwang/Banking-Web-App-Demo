import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFlags } from 'launchdarkly-react-client-sdk';
import '../style/components/Credit.css';

const Credit = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const { 'maintenanceFeature': isMaintenanceMode } = useFlags(); 
  console.log(isMaintenanceMode)
  const flags = useFlags();
  console.log('Flags:', flags); // Logs all flags retrieved by the SDK

  const handleCredit = async (e) => {
    e.preventDefault();

    const requestData = {
      accountNumber,
      amount: parseFloat(amount),
    };

    try {
      const response = await fetch('http://localhost:8081/api/user/credit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(`Success: ${result.responseMessage}`);
        
        // Update user data in local storage
        const updatedUser = { ...JSON.parse(localStorage.getItem('user')) };
        updatedUser.accountInfo.accountBalance += parseFloat(amount);
        localStorage.setItem('user', JSON.stringify(updatedUser));

        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } else {
        setMessage(`Error: ${result.responseMessage}`);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="credit-container">
      {isMaintenanceMode? (
        <div className='maintenance-message'>
          <h2>The service is currently under maintenance. Please try again later</h2>
        </div>
      ) : (
        <>
        <h2>Deposit</h2>
          <form onSubmit={handleCredit}>
            <div className="form-group">
              <label>Account Number:</label>
              <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Amount:</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          {message && <p className="message">{message}</p>}
        </>
      )}
    </div>
  );
};

export default Credit;