import React from "react";
import logo from "../../assets/logo.png";

const Header = () => (
   <header>
      <nav className='navbar'>
        <ul className='nav-list'>
          <li className='logo'>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/...">Services</Link></li>
          <li><Link to="/...">Locations</Link></li>
        </ul>
      </nav>
    </header>
);

export default Header;