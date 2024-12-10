import React, { useState } from 'react';
import '../style/components/Transfer.css';

const Transfer = () => {
  const [sourceAccount, setSourceAccount] = useState('');
  const [destinationAccount, setDestinationAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

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
        <button type="submit">Transfer Funds</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Transfer;