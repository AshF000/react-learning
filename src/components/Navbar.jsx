import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <li><Link to="/">Home</Link>
      </li>
      <li><Link to="/about">About</Link></li>
    </div>
  );
};

export default Navbar;
