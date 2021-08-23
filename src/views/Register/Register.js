import React from "react";
import style from "./Register.module.css";

//Imgs
import Logo from "assets/isotipo/400x128.png";

//Components
import ImgCard from "components/cards/ImgCard/ImgCard";
import TextInput from "components/forms/TextInput/TextInput";

// Material UI
import { Button } from "@material-ui/core";
import UserIcon from "@material-ui/icons/Person";
import PassIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";

const Register = () => {
  return (
    <div className={style.register}>
      <ImgCard title="Registro de cuenta" src={Logo}>
        <TextInput
          type="text"
          Icon={UserIcon}
          label="User Name"
          placeholder="Username"
        />

        <TextInput
          type="text"
          Icon={EmailIcon}
          label="E-mail"
          placeholder="Username"
        />

        <TextInput
          type="password"
          Icon={PassIcon}
          label="Password"
          placeholder="Password"
        />

        <TextInput
          type="password"
          Icon={PassIcon}
          label="Re-enter password"
          placeholder="Password"
        />

        <Button variant="contained" color="primary">
          Registrarse
        </Button>

        <Button variant="contained" color="primary">
          Registrarse
        </Button>
      </ImgCard>
    </div>
  );
};

export default Register;
