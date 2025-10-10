import React from "react";
import logo from "../../assets/logo.png";

const Header = () => (
  <div className="header">
    <ul>
      <li><img src={logo} alt="logo"></img></li>
      <li>Home</li>
      <li>Bus Search</li>
      <li>Booking</li>
      <li>About Us</li>
    </ul>
  </div>
);

export default Header;