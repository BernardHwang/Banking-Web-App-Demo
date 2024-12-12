import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/components/Debit.css';

const Debit = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();

  const handleDebit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/api/user/debit', {
        accountNumber,
        amount: parseFloat(amount),
      });

      if (response.data.responseCode === '007') {
        setResponseMessage(`Success: ${response.data.responseMessage}`);
        
        // Update user data in local storage
        const updatedUser = { ...JSON.parse(localStorage.getItem('user')) };
        updatedUser.accountInfo.accountBalance -= parseFloat(amount);
        localStorage.setItem('user', JSON.stringify(updatedUser));

        setTimeout(() => {
          navigate('/dashboard');
        }, 2000); // Adjust the delay as needed
      } else {
        setResponseMessage(`Error: ${response.data.responseMessage}`);
      }
    } catch (error) {
      setResponseMessage('Network Error: Please try again later.');
    }
  };

  return (
    <div className='debit-container'>
      <h2>Withdrawal</h2>
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

        <button type='submit'>Submit</button>
      </form>
      {responseMessage && <p className='response-message'>{responseMessage}</p>}
    </div>
  );
};

export default Debit;