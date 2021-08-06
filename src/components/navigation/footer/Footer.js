import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

//Logo
import Logotipo from "assets/imgs/logo/128x128.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__img">
        <img src={Logotipo} alt="Logotipo" />
      </div>

      <div className="footer__nav">
        <h2>Navegación</h2>
        <ul>
          <li>
            <Link to="/AboutUs"/>
            <p>About Us</p>
          </li>
          <li>
            <Link to="/Planes"/>
            <p>Planes</p>
          </li>
          <li>
            <Link to="/Contacto"/>
            <p>Contactoa</p>
          </li>
        </ul>
      </div>
      <p>® 2021 Homefy All rights reserved</p>
    </div>
  );
};

export default Footer;
