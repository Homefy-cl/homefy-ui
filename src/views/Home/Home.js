import React from "react";
import style from "./Home.module.css";

import Card from "components/cards/Card/Card";
import PlanInfo from "components/cards/PlanInfo/PlanInfo";

//Img
import imgNotFound from "assets/imgNotFound.png";

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.banner}></div>

      <div className={style.cards}>
        <Card
          title="Crea tus anuncios"
          description="Crea tus propios anuncios y publica digitalmente tu producto o servicio."
        />
        <Card
          title="Administra Gastos Comunes"
          description="Revisa el estado de tus gastos comunes de manera fácil y organizada."
        />
        <Card
          title="Marketplace Comunitario"
          description="Interactua con tu comunidad y los diferentes servicios que tienen para ofrecer."
        />
      </div>
      <div className={style.plan}>
        <PlanInfo
          src={imgNotFound}
          title="Planes Administrativos"
          description="Escoge los diferentes planes que ofrecemos para que puedas admistrar tu comunidad de la mejor manera."
        />
      </div>
    </div>
  );
};

export default Home;
