import React from "react";
import style from "./TextInput.module.css";

const Register = ({ Icon, label, type, placeholder }) => {
  return (
    <div className={style.input}>
      <div className={style.wrapper}>
        {Icon && <Icon className={style.icon} />}
        {label}
      </div>

      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Register;
