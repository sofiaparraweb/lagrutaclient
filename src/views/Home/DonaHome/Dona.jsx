import React from "react";
import { Link } from "react-router-dom";
import style from "./Dona.module.css";

const DonaHome = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={style.DonaHome}>
      <p id="PrimerAmarillo">
        En La Gruta queremos devolver la alegría y la espontaneidad a los niños.
        Queremos que jueguen, que aprendan y que se rían, que se sientan queridos,
        que abracen, que bailen, que inventen, que admiren. Queremos que los niños sean niños
      </p>
      <p id="SegundoAmarillo">
        Gracias a los contribuyentes, vamos creciendo cada vez más. Tu aporte permite
        transformar y mejorar la calidad de vida de los más de 130 chicos del barrio
        que concurren al comedor. ¿Cómo contribuir?
      </p>
      <Link to="/dona" className={style.BotonMasNoticias} onClick={handleClick} id="Dona">
        Ver más
      </Link>
    </div>
  );
};

export default DonaHome;
