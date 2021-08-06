import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

//Logo img
import LogoImg from "assets/imgs/logo/128x128.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={LogoImg} alt="Logo" border="0" />
        </Link>
      </div>

      <nav>
        <Link className="link" to="/about">
          About Us
        </Link>

        <Link className="link" to="/premium">
          Premium
        </Link>
      </nav>
    </div>
  );
};

export default Header;
