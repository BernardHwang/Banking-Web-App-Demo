import React, { useState } from 'react';
import axios from 'axios';
import '../style/components/Debit.css';

const Debit = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleDebit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/api/user/debit', {
        accountNumber,
        amount: parseFloat(amount),
      });

      if (response.data.responseCode === '007') {
        setResponseMessage(`Success: ${response.data.responseMessage}`);
      } else {
        setResponseMessage(`Error: ${response.data.responseMessage}`);
      }
    } catch (error) {
      setResponseMessage('Network Error: Please try again later.');
    }
  };

  return (
    <div className='debit-container'>
      <h2>Debit Account</h2>
      <form className='debit-form' onSubmit={handleDebit}>
        <div className='form-group'>
          <label htmlFor='accountNumber'>Account Number:</label>
          <input
            type='text'
            id='accountNumber'
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='amount'>Amount to Debit:</label>
          <input
            type='number'
            id='amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <button type='submit'>Debit</button>
      </form>
      {responseMessage && <p className='response-message'>{responseMessage}</p>}
    </div>
  );
};

export default Debit;