import React from "react";
import Logo from "../pages/logo/Logo";
import { Link } from "react-router-dom";
import Home from "../pages/home/Home";

function Header() {
  return (
    <div>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/home">
        <Home />
      </Link>

      <div>Sign in</div>
    </div>
  );
}

export default Header;
