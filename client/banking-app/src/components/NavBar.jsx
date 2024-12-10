import React from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.css"

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://static.vecteezy.com/system/resources/previews/013/948/616/original/bank-icon-logo-design-vector.jpg" alt="Logo" />
      </div>
      <div className="navbar-buttons">
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
        <Link to="/signup" className="btn btn-secondary">
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;