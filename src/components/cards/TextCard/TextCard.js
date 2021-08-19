import React from "react";
import style from "./TextCard.module.css";

const TextCard = ({ title, text, children }) => {
  return (
    <div className={style.card}>
      <div className={style.text}>
        <h2>{title}</h2>
        <p>{text}</p>
        {children}
      </div>
    </div>
  );
};

export default TextCard;
