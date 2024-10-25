import React, { useState } from 'react';
import './App.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">
          <img src="/path/to/logo.png" alt="Logo" />
        </div>

        {/* Hamburger Icon */}
        <div className="navbar-toggle" onClick={toggleSidebar}>
          <span className="hamburger">&#9776;</span> {/* Hamburger icon */}
        </div>

        {/* Navigation Links (For Desktop) */}
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Sidebar (For Mobile) */}
      <div className={`sidebar ${sidebar ? 'active' : ''}`}>
        <div className="close-btn" onClick={toggleSidebar}>&times;</div>
        <ul className="sidebar-links">
          <li><a href="#home" onClick={toggleSidebar}>Home</a></li>
          <li><a href="#about" onClick={toggleSidebar}>About</a></li>
          <li><a href="#services" onClick={toggleSidebar}>Services</a></li>
          <li><a href="#blog" onClick={toggleSidebar}>Blog</a></li>
          <li><a href="#contact" onClick={toggleSidebar}>Contact</a></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;



