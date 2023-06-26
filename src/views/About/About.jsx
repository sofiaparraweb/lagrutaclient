import React from "react";
import style from "./About.module.css";
import Mision from "./Mision/Mision";
import Vision from "./Vision/Vision";
import Valores from "./Valores/Valores";

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
      <section className={style.TextoAbout}>
                <p>A mediados de la década del 50 comienza la labor de Cáritas en Argentina. El objetivo principal de Cáritas, según sus estatutos es “animar y coordinar la obra social y caritativa de la Iglesia, insertada en la pastoral orgánica a través de formas adaptadas al tiempo y las circunstancias, para lograr el desarrollo integral de todo el hombre y de todos los hombres, con especial preferencia por las personas y comunidades más marginadas”.
Desde su nacimiento, Cáritas Argentina muestra características distintivas que le dieron identidad especial: su base parroquial, su amplio voluntariado y sus esfuerzos por desarrollar procesos sustentables con el aporte de las comunidades.
Con el correr del tiempo fue creciendo en estructura y organización. Las diócesis se van sumando a la iniciativa, constituyendo sus sedes, congregando voluntarios y procurando fondos para la tarea.
En 1962 comienzan a reunirse los secretariados diocesanos que se constituían y en 1969 se realiza el Primer Encuentro Nacional de Cáritas, en Villa Carlos Paz (Córdoba). </p>
      </section>
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
