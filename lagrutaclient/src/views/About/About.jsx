import React from "react";
import style from "./About.module.css";
import Mision from "./Mision/Mision";
import Vision from "./Vision/Vision";
import Valores from "./Valores/Valores";

const About = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1>La Gruta</h1>
        <p>Un espacio para construir juntos</p>
      </header>
      <div className={style.introduction}>
  <p>
    En La Gruta trabajamos con personas de diferentes edades y profesiones.
    Lo que nos une es el Espíritu Juvenil y el deseo de construir juntos un lugar
    donde todos puedan formar parte.
  </p>
  <p>
    No solo brindamos a la comunidad, sino que creamos junto a ella. Nuestra
    premisa fundamental es el absoluto resguardo de la dignidad de cada persona.
  </p>
  <p>
    Después de tantos años, seguimos disfrutando de este lugar que nos enseña
    tanto. Estamos orgullosos de contar con diversos programas, como un comedor
    infantil y talleres para niños, jóvenes y mujeres. Trabajamos en colaboración
    con la comunidad para mejorar su salud y bienestar.
  </p>
      </div>

      <Mision />
      <Vision />
      <Valores />

      <section className={style.section}>
        <h2>¿Qué hacemos?</h2>
        {/* Agrega aquí el contenido de "Qué hacemos" */}
      </section>

      <section className={style.section}>
      <h1>Historia
                <p>A mediados de la década del ´50 comienza la labor de Cáritas en Argentina. El objetivo principal de Cáritas, según sus estatutos es “animar y coordinar la obra social y caritativa de la Iglesia, insertada en la pastoral orgánica a través de formas adaptadas al tiempo y las circunstancias, para lograr el desarrollo integral de todo el hombre y de todos los hombres, con especial preferencia por las personas y comunidades más marginadas”.

Desde su nacimiento, Cáritas Argentina muestra características distintivas que le dieron identidad especial: su base parroquial, su amplio voluntariado y sus esfuerzos por desarrollar procesos sustentables con el aporte de las comunidades.

Con el correr del tiempo fue creciendo en estructura y organización. Las diócesis se van sumando a la iniciativa, constituyendo sus sedes, congregando voluntarios y procurando fondos para la tarea.

En 1962 comienzan a reunirse los secretariados diocesanos que se constituían y en 1969 se realiza el Primer Encuentro Nacional de Cáritas, en Villa Carlos Paz (Córdoba). El principal objetivo del mismo fue responder “Qué es Cáritas en la Argentina, Qué debe ser Cáritas en la Argentina y Cómo hacerlo”.

Promediando los años setenta, gran parte de las energías de Cáritas se destinaban a la ayuda inmediata, especialmente a través de la donación de alimentos, medicamentos y ropa, como sucedía en la mayoría de las Cáritas de América Latina.

Esa actividad se fue transformando en los años 80, cuando se descubre la necesidad de animar procesos de promoción humana y un mayor protagonismo de quienes participan de los distintos proyectos, procurando el propio desarrollo y el de sus comunidades.

Teniendo ese contexto, en 1986 la Conferencia Episcopal aprueba los actuales Estatutos de Cáritas Argentina como organismo de la Iglesia que coordinará la obra caritativa oficial de la misma.

En la actualidad, Cáritas Argentina se encuentra trabajando activamente en las 66 Diócesis de la Iglesia Argentina. Gracias al compromiso solidario de toda la sociedad y al esfuerzo cotidiano de más de 32.000 voluntarios, Cáritas canaliza su acción a través de más de 3.500 parroquias, capillas y centros misionales.</p>
            </h1>
        {/* Agrega aquí el contenido de la historia */}
      </section>

      <section className={style.section}>
        <h2>¿Quiénes somos? Equipo</h2>
        {/* Agrega aquí el contenido de "Quiénes somos" y muestra el equipo */}
      </section>

      <section className={style.section}>
        <button className={style.donationButton}>Donar</button>
      </section>
    </div>
  );
};

export default About;
