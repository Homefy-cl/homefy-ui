import React, { useState, useContext } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";

import { Link, Redirect } from "react-router-dom";

import "./Form.css";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const validateForm = () => {
        return email.length > 0 && pwd.length > 7;
    };

    const submitHandler = async (e) => {
        const data = { mail: email, password: pwd };

        //Send data to API
        axios
            .post("http://localhost:5000/user/login", data)
            .then((response) => {
                if (response.status == 202) {
                    console.log("User Found");
                    console.log(response.status);
                    <Redirect to="/comunidad"/>
                }
            })
            .catch((error) => {
                console.log("User not found")
                console.log(error.response.status);
            });
    };

    const registerClicked = () => {
        window.open("/registro");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Ingresar a mi comunidad</h2>

                <div className="form__group">
                    <label htmlFor="mail">Correo:</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                    />
                    <span className="form__loginError"></span>
                </div>

                <div className="form__group">
                    <label htmlFor="pwd">Contraseña:</label>
                    <input
                        type="password"
                        id="pwd"
                        onChange={(e) => {
                            setPwd(e.target.value);
                        }}
                        value={pwd}
                    />
                    <span className="form__loginError"></span>
                </div>
                <div className="form__buttonLogin">
                    <Button
                        className="login__button"
                        disabled={!validateForm()}
                        variant="contained"
                        color="primary"
                        onClick={submitHandler}
                    >
                        Ingresar
                    </Button>
                </div>

                {/* Redirección al Registro de usuario */}
                <div className="register-info">
                    <p>¿Aun no tienes una cuenta?</p>
                    <p>
                        Ingresa <Link to="/registro"> aqui</Link> para
                        conectarte con tu comunidad.
                    </p>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
