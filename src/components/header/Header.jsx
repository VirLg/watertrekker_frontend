import React from "react";
import Logo from "../../pages/logo/Logo";
import { Link } from "react-router-dom";
import Container from "../utils/container/Container";
function Header() {
  return (
    <div className="container">
      <div className="ml-[94px] mr-[94px] flex items-center justify-between h-[48px]">
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/signIn">Sign In</Link>
      </div>
    </div>
  );
}

export default Header;
