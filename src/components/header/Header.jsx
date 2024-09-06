import React from "react";
import Logo from "../../pages/logo/Logo";
import { Link } from "react-router-dom";
import { HeaderDiv } from "./Header.styled";

function Header() {
  return (
    <div className="container">
      <HeaderDiv>
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/signIn">Sign In</Link>
      </HeaderDiv>
    </div>
  );
}

export default Header;
