import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import { LDProvider } from 'launchdarkly-react-client-sdk';

import NavBar from './components/NavBar';
import Intro from './components/Intro';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Debit from './components/Debit';
import Credit from './components/Credit';
import Transfer from './components/Transfer';

import './style/App.css';

function App() {
  return (
    // <LDProvider
    //   clientSideID="your-client-side-id" // Replace with your LaunchDarkly client-side ID
    //   context={{ 
    //     kind: 'user',
    //     key: 'user-key',
    //     name: 'MH1',
    //     email: 'mh1@gmail.com'
    //   }} 
    // >
      <Router>
          <NavBar />
          <Routes>
              <Route path="/" element={<Intro />} />      
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/signup" element={<CreateUser />} />
              <Route path="/debit" element={<Debit />} />
              <Route path="/credit" element={<Credit />} />
              <Route path="/transfer" element={<Transfer />} />
          </Routes>
      </Router>
    // </LDProvider>
  );
}

export default App;