import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Travel Wishlist</h1>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
