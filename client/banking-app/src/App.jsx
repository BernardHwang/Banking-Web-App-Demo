import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// 1. Import
import { LDProvider, useLDClient } from 'launchdarkly-react-client-sdk';

import NavBar from './components/NavBar';
import Intro from './components/Intro';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Debit from './components/Debit';
import Credit from './components/Credit';
import Transfer from './components/Transfer';

import './style/App.css';
import { UserProvider } from './components/UserContext';

function App() {
  // State to track whether the user has scrolled past 20px
  const [isScrolled, setIsScrolled] = useState(false);
  const ldClient = useLDClient();

  // Add a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    // 2. Initialize 
    <LDProvider
      clientSideID="6751064001dbff09a1662058" // Replace with your LaunchDarkly client-side ID
    >
      <Router>
        {/* Pass the isScrolled prop to the NavBar */}
        <UserProvider>
          <NavBar isScrolled={isScrolled} />
          <Routes>
            <Route path="/" element={<Intro />} />      
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<CreateUser />} />
            <Route path="/debit" element={<Debit />} />
            <Route path="/credit" element={<Credit />} />
            <Route path="/transfer" element={<Transfer />} />
          </Routes>
        </UserProvider>
      </Router>
    </LDProvider>
  );
}

export default App;
