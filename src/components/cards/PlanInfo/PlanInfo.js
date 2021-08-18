import React from "react";
import style from "./PlanInfo.module.css";

import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const PlanInfo = ({ src, icon, title, description }) => {
  const history = useHistory();
  return (
    <div className={style.plan}>
      <img src={src} alt="planImg" />
      {icon && <icon className={style.icon} />}

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

export default PlanInfo;
