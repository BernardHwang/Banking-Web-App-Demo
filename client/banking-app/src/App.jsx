import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import './style/App.css';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Debit from './components/Debit';
import Credit from './components/Credit';
import Transfer from './components/Transfer';

function App() {
  const [count, setCount] = useState(0);

  return (
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
  );
}

export default App;
