import React from "react";
import style from "./PlanInfo.module.css";

import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import imgNotFound from "assets/imgNotFound.png";

const PlanInfo = ({ src, icon, title, description }) => {
  const history = useHistory();
  return (
    <div className={style.plan}>
      <img src={src} alt="planImg" />
      <div className={style.icon}>{icon}</div>
      <div className={style.info}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button
          onClick={() => history.push("/premium")}
          className={style.infoButton}
          variant="contained"
          color="primary"
        >
          Go Premium
        </Button>
      </div>
    </div>
  );
};

PlanInfo.defaultProps = {
  src: imgNotFound,
  title: "No Title",
  description: "No description",
};

export default PlanInfo;
