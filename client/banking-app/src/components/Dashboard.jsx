import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFlags } from 'launchdarkly-react-client-sdk';
import { useUserContext } from './UserContext';
import { LuCrown } from "react-icons/lu";
import { RiVipLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import '../style/components/Dashboard.css'; // Assuming custom styles are in the same folder

const Dashboard = () => {
  const { user, logout } = useUserContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const { chgSignOutBtn } = useFlags();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="dashboard-container">
      <div className="header">
        <div className="user-info">
          <h2>Welcome {user.username}!</h2>
          <div className="user-status">
            <LuCrown color={user.isVIP ? 'gold' : 'silver'} size={24} />
            <span className={user.isVIP ? 'vip' : 'normal'}>{user.isVIP ? 'VIP User' : 'Normal User'}</span>
          </div>
        </div>
        <div className="account-info">
          <p>Account Number: {user.accountInfo.accountNumber}</p>
          <p>Account Balance: RM {user.accountInfo.accountBalance}</p>
        </div>
      </div>

      {/* VIP Promotional Section */}
      {user.isVIP && (
        <div className="promotion-section">
          <h3>Exclusive VIP Promotion</h3>
          <p>As a VIP, you're eligible for exclusive benefits. Enjoy our limited-time offers:</p>
          <ul>
            <li>Priority customer support</li>
            <li>Exclusive rewards & discounts</li>
            <li>Higher transaction limits</li>
            <li>Free monthly financial consultations</li>
          </ul>
          <button onClick={() => navigate('/vip-benefits')}>Explore VIP Benefits</button>
        </div>
      )}

      <div className="services">
        <div className="service-item" onClick={() => navigate('/debit')}>
          <i className="fi fi-rr-money-from-bracket"></i>
          <p>Withdrawal</p>
        </div>
        <div className="service-item" onClick={() => navigate('/credit')}>
          <i className="fi fi-rr-deposit-alt"></i>
          <p>Deposit</p>
        </div>
        <div className="service-item" onClick={() => navigate('/transfer')}>
          <i className="fi fi-rr-money-coin-transfer"></i>
          <p>Transfer Funds</p>
        </div>
        <div className="service-item" onClick={openModal}>
        <i className= {user.isVIP ? 'fi fi-rr-membership-vip' : "fi fi-rr-membership"}></i>
          <p>{user.isVIP ? 'VIP Privilege' : 'How to be a VIP'}</p>
        </div>
      </div>

      {isModalOpen && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <h2>{user.isVIP ? 'VIP Privilege' : 'How to be a VIP'}</h2>
            {user.isVIP ? (
              <p>
                As a VIP, you enjoy exclusive benefits such as:
                <ul>
                  <li>Priority Customer Support</li>
                  <li>Higher Transaction Limits</li>
                  <li>Exclusive Offers and Rewards</li>
                  <li>Personalized Financial Services</li>
                  <li>Complimentary Airport Lounge Access</li>
                </ul>
              </p>
            ) : (
              <p>
                Upgrade to VIP to enjoy exclusive benefits! Here's how:
                <ul>
                  <li>Maintain a high account balance.</li>
                  <li>Use the app actively for transactions.</li>
                  <li>Enroll in priority banking programs.</li>
                  <li>Stay loyal and qualify for invitation-only VIP access.</li>
                </ul>
              </p>
            )}
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      <div className={`sign-out ${chgSignOutBtn ? "new-sign-out" : ""}`} style={{marginTop: 16}}>
        <button onClick={logout}>
          <FiLogOut size={20} />
          Sign Out
        </button>
      </div>
    </div>
  );
};

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    width: '400px',
    maxWidth: '90%',
  },
};

export default Dashboard;
