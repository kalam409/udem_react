import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-bootstrap';

const Navbar = () => {
    return (
      <div className='navigationMenu'>
        <div className="logo">
          <img
            src="http://trydo.rainbowit.net/assets/images/logo/logo.png"
            alt=""
            srcset=""
          />
        </div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Service</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    );
};

export default Navbar;