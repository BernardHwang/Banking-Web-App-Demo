import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useFlags } from "launchdarkly-react-client-sdk";

import "../style/components/NavBar.css";

const NavBar = () => {
  // LaunchDarkly flag
  const { chgLoginBtn } = useFlags();

  // State to track if the navbar is scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // Get the current location path
  const location = useLocation();

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if the path matches `/`, `/login`, or `/signup`
  const showButtons = ["/", "/login", "/signup"].includes(location.pathname);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <img src="https://pngimg.com/uploads/bank/bank_PNG3.png" alt="Logo" />
      </div>
      {showButtons && (
        <div className="navbar-buttons">
          <Link
            to="/login"
            className={`btn ${chgLoginBtn ? "btn-primary-new" : "btn-primary"}`}
          >
            Login
          </Link>
          <Link to="/signup" className="btn btn-secondary">
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
