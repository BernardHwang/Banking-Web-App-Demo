import { useState } from 'react';
import '../style/components/Intro.css';

function MainPage() {
  const [count, setCount] = useState(0);
  
  return (

   <div className="main-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to XYZ Bank</h1>
          <p>Your trusted partner in financial growth and security.</p>
        </div>
      </div>

      <main className="main-content">
        <section id="promotions" className="promotional-offers">
          <h2>Promotional Offers</h2>
          <p>
            Get a 5% cashback on all online purchases with our new credit card.{' '}
            <a href="www.google.com">Learn more</a>
          </p>
          <br/>
          <img src='https://image.freepik.com/free-vector/banking-banner-horizontal_1284-14616.jpg' alt='Promotions' />
        </section>

        <section id="contact" className="contact-info">
          <h2>Contact Us</h2>
          <p>Phone: 1-800-XYZ-BANK</p><br/>
          <p>Email: support@xyzbank.com</p><br/>
          <p>Address: 123 Bank Street, Financial City, Country</p>
        </section>
      </main>
    </div>
  );
}

export default MainPage;