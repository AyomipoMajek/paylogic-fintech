import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        Pay
        <span>
          Logic
        </span>
      </Link>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} />
        ) : (
          <FaBars size={20} />
        )}
      </div>
      <ul className="navmenu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About Us</Link>
        </li>
        <li>
          <Link to="services">Services</Link>
        </li>
        <li>
          <Link to="pricing">Pricing</Link>
        </li>
        <li>
          <Link to="blog">Blog</Link>
        </li>
      </ul>
      <div className="user">
        <button type="button" className="btn" id="btn1">
          <Link to="login">Log In</Link>
        </button>
        <button type="button" className="btn" id="btn2">
          <Link to="signup">Sign Up</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
