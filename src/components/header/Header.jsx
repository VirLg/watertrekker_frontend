import React from "react";
import Logo from "../../pages/logo/Logo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/signIn">Sign In</Link>
    </div>
  );
}

export default Header;
