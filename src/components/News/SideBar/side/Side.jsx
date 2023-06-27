import React, { useState } from "react";
import Slider from "react-slick";
import Heading from "../../Heading/Heading.jsx";
import Tpost from "../Tpost/Tpost";
import SocialMedia from "../social/SocialMedia";

import GalerySlider from "./GalerySlider.jsx";
import style from "./Side.module.css";

const Side = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      alert("Correo electrónico no válido");
      return;
    }
    alert("¡Formulario enviado!");
    setEmail("");
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email.trim());
  };

  return (
    <>
{/*       <Heading title="Redes sociales" />
      <SocialMedia /> */}
      <section className={style.banner}>
{/*         <img src="./images/sidebar-banner-new.jpg" alt="" />  */}
      </section>
      <Heading title="Suscríbete" />
      <section className={style.subscribe}>
        <h1 className={style.title}>Suscribete a nuestras Nuevas Historias</h1>
        <form onSubmit={handleSubmit} action="">
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico..."
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit">
            <i className="fa fa-paper-plane"></i> Suscribir
          </button>
        </form>
      </section>
      <Tpost />
      <section className={style.gallery}>
        <Heading title="Galería" />
        <GalerySlider></GalerySlider>
      </section>
    </>
  );
};

export default Side;
