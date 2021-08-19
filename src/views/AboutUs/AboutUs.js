import React from "react";
import style from "./AboutUs.module.css";
import { Button } from "@material-ui/core";

//Components
import ImgCard from "components/cards/ImgCard/ImgCard";
import TextCard from "components/cards/TextCard/TextCard";

//Imgs
import FelipeF from "assets/developers/FelipeF.jpg";
import ArielH from "assets/developers/ArielH.jpg";

const AboutPage = () => {
  return (
    <div>
      <div className={style.about}>
        <h1>Sobre Nosotros</h1>
        <div className={style.aboutWrapper}>
          <TextCard
            title="Hello"
            text=" Fusce malesuada pellentesque sollicitudin. In leo sapien, eleifend finibus urna at, malesuada viverra lectus. Quisque ut odio non tortor scelerisque laoreet eu nec dolor. Vivamus urna risus, interdum ac felis et, pharetra imperdiet nulla."
          >
            <ul>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
            </ul>
          </TextCard>

          <TextCard
            title="Hello"
            text=" Fusce malesuada pellentesque sollicitudin. In leo sapien, eleifend finibus urna at, malesuada viverra lectus. Quisque ut odio non tortor scelerisque laoreet eu nec dolor. Vivamus urna risus, interdum ac felis et, pharetra imperdiet nulla."
          >
            <Button variant="contained" color="primary">
              Contáctanos
            </Button>
          </TextCard>
        </div>
      </div>

      <div className={style.team}>
        <div className={style.teamContent}>
          <h1>Desarrolladores:</h1>
          <p>
            Nunc id turpis sed augue malesuada dapibus ut ut diam. Donec eros
            risus, rutrum non volutpat eu, semper aliquam diam. Donec facilisis
            lectus ut lacinia tempor. Nam dapibus vehicula nibh, efficitur
            ultricies elit mattis a. Aliquam fermentum gravida rutrum.
          </p>
          <div className={style.cards}>
            <ImgCard
              src={ArielH}
              title="Ariel Herrera"
              description="Front-end Developer, especializado en React, React Native, Redux."
            />
            <ImgCard
              src={FelipeF}
              title="Felipe Farías"
              description="Back-end API Developer, especializado en Node.JS, API REST."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

//</div>
