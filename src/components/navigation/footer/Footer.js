import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

//Logo
import Logotipo from "assets/imgs/logo/64x64.png";

//Card
import NavCard from "components/cards/navigation/Navigation";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.imgContainer}>
        <img src={Logotipo} alt="Logotipo" />
      </div>

      <div className={style.navItems}>
        <NavCard title="Company">
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </NavCard>

        <NavCard title="Services">
          <li>
            <Link to="/premium">Premium</Link>
          </li>
        </NavCard>
      </div>
    </div>
  );
};

export default Footer;
