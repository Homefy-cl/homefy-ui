import React from "react";
import style from "./Banner.module.css";

import imgNotFound from "assets/imgNotFound.png"

const Banner = ({ src }) => {
  return (
    <div className={style.banner}>
      <img src={src} alt="BannerImg" />
    </div>
  );
};

Banner.defaultProps = {
  src: imgNotFound,
}

export default Banner;
