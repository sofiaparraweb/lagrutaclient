import React from "react";
import style from "./informacion.module.css";

import { Link } from "react-router-dom";

const PedirInfo = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className={style.infoCon}>
        <div className={style.innerContainer}>
        <h1 className={style.sectionTitle}>
  Trabajamos para que{" "}
  <span className={style.customFont}>los niños sean sólo niños</span>
</h1>
          <div className={style.border}></div>
          <div className={style.serviceContainer}>
            <div className={style.infobox}>
              <div className={style.infoicon}>
                <i className="fa fa-child"></i>
              </div>
              <div className={style.infoTitle}>Derechos de la infancia</div>
              <div className={style.description}>
                Para que puedan crecer, aprender y jugar
              </div>
            </div>

            <div className={style.infobox}>
              <div className={style.infoicon}>
                <i className="fa fa-heart"></i>
              </div>
              <div className={style.infoTitle}>Acción constante</div>
              <div className={style.description}>
                Todos los días del año acompañandolos
              </div>
            </div>

            <div className={style.infobox}>
              <div className={style.infoicon}>
                <i className="fa fa-hospital-user"></i>
              </div>
              <div className={style.infoTitle}>Emergencias</div>
              <div className={style.description}>
                Y que ninguna emergencia destruya su futuro
              </div>
            </div>
            <Link to="/about" onClick={handleClick}>
              {" "}
              <button className={style.buttoninfo}> Quiero informarme </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PedirInfo;
