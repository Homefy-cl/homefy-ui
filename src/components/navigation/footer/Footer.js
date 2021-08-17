import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

//Logo
import Logotipo from "assets/logo/64x64.png";

//Card
import NavColum from "components/columns/navColumn/NavColumn";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.imgContainer}>
        <img src={Logotipo} alt="Logotipo" />
      </div>

      <div className={style.navItems}>
        <NavColum title="Company">
          <Link to="/about">About Us</Link>
        </NavColum>

        <NavColum title="Services" text>
          <Link to="/premium">Premium</Link>
        </NavColum>
      </div>
    </div>
  );
};

export default Footer;
