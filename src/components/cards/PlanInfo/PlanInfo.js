import React from "react";
import style from "./PlanInfo.module.css";

import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const PlanInfo = ({ src, icon, title, description }) => {
  const history = useHistory();
  return (
    <div className={style.plan}>
      <img src={src} alt="plan-img" />
      {icon && <icon className="plan__icon" />}

      <div className={style.info}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button
          onClick={() => history.push("/planes")}
          className={style.infoButton}
          variant="contained"
          color="primary"
        >
          Ver Planes
        </Button>
      </div>
    </div>
  );
};

export default PlanInfo;
