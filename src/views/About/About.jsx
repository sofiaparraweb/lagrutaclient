import React from "react";
import style from "./About.module.css";
import Mision from "./Mision/Mision";
import Vision from "./Vision/Vision";
import Valores from "./Valores/Valores";
import Timeline from "./Historia/Historia";

const About = () => {
  return (
    <div className={style.container}>
      <header className={style.headerAboutLaGruta}>
        <h1>La Gruta</h1>
        <p>Un espacio para construir juntos</p>
      </header>
      <div className={style.TextoAbout}>
  <p>
    En La Gruta trabajamos con personas de diferentes edades y profesiones.
    Lo que nos une es el Espíritu Juvenil y el deseo de construir juntos un lugar
    donde todos puedan formar parte.
    No solo brindamos a la comunidad, sino que creamos junto a ella. Nuestra
    premisa fundamental es el absoluto resguardo de la dignidad de cada persona.
    Después de tantos años, seguimos disfrutando de este lugar que nos enseña
    tanto. Estamos orgullosos de contar con diversos programas, como un comedor
    infantil y talleres para niños, jóvenes y mujeres. Trabajamos en colaboración
    con la comunidad para mejorar su salud y bienestar.
  </p>
      </div>

      <Mision />
      <Vision />
      <Valores />

      {/* <section className={style.section}>
        <h2>¿Qué hacemos?</h2>
        
      </section> */}

      <header className={style.headerAboutLaGruta}>
        <h1>Historia</h1>
      </header>
      <Timeline />
{/* 
      <section className={style.section}>
        <h2>¿Quiénes somos? Equipo</h2>
      
      </section> */}

      <section className={style.section}>
        <button className={style.donationButton}>Donar</button>
      </section>
    </div>
  );
};

export default About;
