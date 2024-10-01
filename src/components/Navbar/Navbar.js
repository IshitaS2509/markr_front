import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import logo from "../../../src/assets/logo-1.png"; // Import your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    alert(`You searched for: ${searchQuery}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav className="navbar">
      {/* Logo Image */}
      <img src={logo} alt="MyApp Logo" className="logo" />

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>

      {/* Profile icon and login button */}
      <div className="profile-login">
        <div className="profile-icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <button className="login-btn">Login</button>
      </div>

      {/* Hamburger menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
