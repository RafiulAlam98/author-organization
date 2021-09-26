import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <div className="header-container">
      <div>
        <h1 className="header">World Best Author</h1>
      </div>
      <div>
        <h3 className="header">
          Total Welfare: <span className="welfare">50 Million</span>
        </h3>
      </div>
      <nav class="mt-3">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/details">Details</a>
      </nav>
    </div>
  );
};

export default Header;
