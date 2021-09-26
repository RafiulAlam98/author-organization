import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <div className="navigation-container">
      <nav>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/details">Details</a>
      </nav>
    </div>
  );
};

export default Header;
