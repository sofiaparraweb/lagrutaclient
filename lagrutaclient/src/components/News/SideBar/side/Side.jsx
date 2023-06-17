import React from "react";
import Slider from "react-slick";
import Heading from "../../Heading/Heading.jsx";
import Tpost from "../Tpost/Tpost";
import SocialMedia from "../social/SocialMedia";

import GalerySlider from "./GalerySlider.jsx";
import style from "./Side.module.css";

const Side = () => {


  return (
    <>
      <Heading title="Redes sociales" />
      <SocialMedia />
      <Heading title="Suscríbete" />
      <section className={style.subscribe}>
        <h1 className={style.title}>Suscríbete a nuestras Nuevas Historias</h1>
        <form action="">
          <input type="email" placeholder="Correo electrónico..." />
          <button>
            <i className="fa fa-paper-plane"></i> Suscribir
          </button>
        </form>
      </section>
      <section className={style.banner}>
        <img src="./images/sidebar-banner-new.jpg" alt="" />
      </section>

      <Tpost />
      <section className={style.gallery}>
        <Heading title="Galería" />
        <GalerySlider>
        </GalerySlider>
      </section>
    </>
  );
};

export default Side;
