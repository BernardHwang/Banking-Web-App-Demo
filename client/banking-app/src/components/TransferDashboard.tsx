import React from 'react'
import { useNavigate } from 'react-router-dom';
import duitnow from '../assets/duit_now.png';

const TransferDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard-container">
      <div style={{display: 'flex', justifyContent: 'center', margin: 16}}>
        <h1>Transaction Type</h1>
      </div>
      <div className='services'>
        <div className="service-item" onClick={() => navigate('/transfer')}>
          <i className="fi fi-rr-deposit-alt"></i>
          <p>Acc No.</p>
        </div>
        <div className="service-item" onClick={() => navigate('/transfer')}>
          <img src={duitnow} width={'100%'}/>
        </div>
        <div className="service-item" onClick={() => navigate('/transfer')}>
          <i className="fi fi-rr-mobile-notch"></i>
          <p>Phone No.</p>
        </div>
      </div>
      <div className='services'>
        <div className="service-item" onClick={() => navigate('/transfer')}>
          <i className="fi fi-rr-id-card-clip-alt"></i>
          <p>NRIC No.</p>
        </div>
        <div className="service-item" onClick={() => navigate('/transfer')}>
          <i className="fi fi-rr-general"></i>
          <p>Army No./Police No.</p>
        </div>
        <div className="service-item" onClick={() => navigate('/transfer')}>
          <i className="fi fi-rr-corporate-alt"></i>
          <p>Business Registration No.</p>
        </div>
      </div>
    </div>
  )
}

export default TransferDashboard