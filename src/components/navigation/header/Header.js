import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

//Logo img
import LogoImg from "assets/logo/128x128.png";

//Components
import SearchBar from "components/forms/SearchBar/SearchBar";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <Link to="/">
          <img src={LogoImg} alt="Logo" border="0" />
        </Link>
      </div>

      <SearchBar />

      <div className={style.leftNav}>
        <Link className={style.item} to="/about">
          About Us
        </Link>
        <Link className={style.item} to="/premium">
          Premium
        </Link>
      </div>

      <div className={style.rightNav}>
        <Link className={style.item} to="/register">
          Register
        </Link>
        <span>|</span>
        <Link className={style.item} to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
