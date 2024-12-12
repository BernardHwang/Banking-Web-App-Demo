import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/components/Transfer.css';

const Transfer = () => {
  const [sourceAccount, setSourceAccount] = useState('');
  const [destinationAccount, setDestinationAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleTransfer = async (e) => {
    e.preventDefault();

    const requestData = {
      sourceAccountNumber: sourceAccount,
      destinationAccountNumber: destinationAccount,
      amount: parseFloat(amount),
    };

    try {
      const response = await fetch('http://localhost:8081/api/user/transfer', {
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
        updatedUser.accountInfo.accountBalance -= parseFloat(amount);
        localStorage.setItem('user', JSON.stringify(updatedUser));

        setTimeout(() => {
          navigate('/dashboard');
        }, 2000); // Adjust the delay as needed
      } else {
        setMessage(`Error: ${result.responseMessage}`);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="transfer-container">
      <h2>Transfer Funds</h2>
      <form onSubmit={handleTransfer}>
        <div className="form-group">
          <label>Source Account Number:</label>
          <input
            type="text"
            value={sourceAccount}
            onChange={(e) => setSourceAccount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Destination Account Number:</label>
          <input
            type="text"
            value={destinationAccount}
            onChange={(e) => setDestinationAccount(e.target.value)}
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
        <button type="submit">Transfer</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Transfer;