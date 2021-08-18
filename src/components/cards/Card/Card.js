import React from "react";
import style from "./Card.module.css";

import imgNotFound from "assets/imgNotFound.png";

const Card = ({ src, title, description }) => {
  return (
    <div className={style.card}>
      <img src={src} alt="cardImg" />

      <div className={style.text}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

Card.defaultProps = {
  src: imgNotFound,
  title: "No Title",
  description: "No description"
}


export default Card;
