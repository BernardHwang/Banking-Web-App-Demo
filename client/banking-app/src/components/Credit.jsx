import React, { useState } from 'react';
import '../style/components/Credit.css';

const Credit = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

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
      } else {
        setMessage(`Error: ${result.responseMessage}`);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="credit-container">
      <h2>Credit Account</h2>
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
        <button type="submit">Credit Account</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Credit;