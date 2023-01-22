import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      <div className="navigationMenu">
        <div className="logo">
          <img
            src="https://www.linkpicture.com/q/logo_274.png"
            alt=""
            srcset=""
          />
        </div>
        <div className='menu'>
          <Link to="/">Home</Link>
          <Link to="/services">Service</Link>
          <Link to="/about">About</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    );
};

export default Navbar;