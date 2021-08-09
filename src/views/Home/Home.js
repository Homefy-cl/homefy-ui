import React from "react";
import style from "./Home.module.css";

import Card from "components/card/Card";
import Banner from "components/banner/Banner";

const testImg =
  "https://c2.staticflickr.com/8/7225/7210160572_f5b2a58e7e_b.jpg";

const Home = () => {
  return (
    <>
      <div className={style.banner}>
        <Banner src={testImg} />
      </div>

      <div className={style.cards}>
        <Card
          src={testImg}
          title="Crea tus anuncios"
          description="Crea tus propios anuncios y publica digitalmente tu producto o servicio."
        />
        <Card
          src={testImg}
          title="Administra Gastos Comunes"
          description="Revisa el estado de tus gastos comunes de manera fácil y organizada."
        />
        <Card
          src={testImg}
          title="Marketplace Comunitario"
          description="Interactua con tu comunidad y los diferentes servicios que tienen para ofrecer."
        />
      </div>
    </>
  );
};

export default Home;
