import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{backgroundColor:"rgb(203 213 225)"}} className="shadow-sm py-2">
      <nav className="navbar container">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
          Dream-Dictionary အိပ်မက်အဘိဓာန်
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
