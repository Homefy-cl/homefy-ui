import React from "react";
import style from "./ImgCard.module.css";

import imgNotFound from "assets/imgNotFound.png";

const ImgCard = ({ src, title, description }) => {
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

ImgCard.defaultProps = {
  src: imgNotFound,
  title: "No Title",
  description: "No description"
}


export default ImgCard;
