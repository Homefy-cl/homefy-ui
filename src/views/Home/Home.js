import React from "react";
import style from "./Home.module.css";

import ImgCard from "components/cards/ImgCard/ImgCard";
import PlanInfo from "components/cards/PlanInfo/PlanInfo";
import Banner from "components/banner/Banner";

//Imgs
import bannerImg from "assets/banner/background.png";
import cardImg1 from "assets/home/post.png";
import cardImg2 from "assets/home/admin.png";
import cardImg3 from "assets/home/market.png";
import planInfoImg from "assets/home/plan.png";

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.banner}>
        <Banner className={style.banner} src={bannerImg} />
      </div>

      <div className={style.cards}>
        <ImgCard
          src={cardImg1}
          title="Crea tus anuncios"
          description="Crea tus propios anuncios y publica digitalmente tu producto o servicio."
        />
        <ImgCard
          src={cardImg2}
          title="Administra Gastos Comunes"
          description="Revisa el estado de tus gastos comunes de manera fácil y organizada."
        />
        <ImgCard
          src={cardImg3}
          title="Marketplace Comunitario"
          description="Interactua con tu comunidad y los diferentes servicios que tienen para ofrecer."
        />
      </div>
      <div className={style.plan}>
        <PlanInfo
          src={planInfoImg}
          title="Planes Administrativos"
          description="Escoge los diferentes planes que ofrecemos para que puedas admistrar tu comunidad de la mejor manera."
        />
      </div>
    </div>
  );
};

export default Home;
