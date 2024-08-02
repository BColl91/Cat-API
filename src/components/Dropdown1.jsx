import React, { useState } from 'react';
import './Dropdown1.css'; 

const Dropdown1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        Menu
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <a href="/" className="dropdown-item">Home</a>
          <a href="/About" className="dropdown-item">About</a>
          <a href="/Contact" className="dropdown-item">Contact</a>
          <a href="/Products" className="dropdown-item">Products</a>
        </div>
      )}
    </div>
  );
};

export default Dropdown1;
