import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';
import P from '../assets/p.jpg';
import PayLogic from '../assets/PayLogic.jpg';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src={P} alt="logo" />
        <img src={PayLogic} alt="logo" />
      </Link>
      <div className="all">
        <ul className={click ? 'nav-menu active'
          : 'nav-menu'}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <div className="hamburger">
          {click ? <FaTimes size={20} style={{ color: '#000' }} onClick={handleClick} />
            : <FaBars size={20} style={{ color: '#000' }} onClick={handleClick} /> }
        </div>
        <div
          className={click ? 'nav-menu active'
            : 'nav-menu'}
          id="user"
        >
          <button type="button" className="btn" id="btn1">
            <Link to="login">Log In</Link>
          </button>
          <button type="button" className="btn" id="btn2">
            <Link to="signup">Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
