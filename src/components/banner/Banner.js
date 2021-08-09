import React from "react";
import style from "./Banner.module.css";

const Banner = ({ src }) => {
  return (
    <div className={style.banner}>
      <img src={src} alt="BannerImg" />
    </div>
  );
};

export default Banner;
