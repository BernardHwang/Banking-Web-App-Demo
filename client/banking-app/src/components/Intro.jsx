import { useState } from 'react';
import '../style/components/MainPage.css';

function MainPage() {
  const [count, setCount] = useState(0);
  
  return (

    <div className="main-content">
      <h1>Welcome to XYZ Bank</h1>
      <p>Your trusted partner in financial growth and security.</p>

      <div className="card promotional-offers">
          <h2>Promotional Offers</h2>
          <p>Get a 5% cashback on all online purchases with our new credit card. <a href="www.google.com">Learn more</a></p>
      </div>

      <div className="card contact-info">
          <h2>Contact Us</h2>
          <p>Phone: 1-800-XYZ-BANK</p>
          <p>Email: support@xyzbank.com</p>
          <p>Address: 123 Bank Street, Financial City, Country</p>
      </div>
    </div>
  );
}

export default MainPage;