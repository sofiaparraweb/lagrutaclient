import React from "react";
import style from "./HeadingDash.module.css";

const HeadingDash = () => {
  return (
    <div className={style.infoCon}>
      <div className={style.innerContainer}>
        <h1 className={style.sectionTitle}>
          <br></br>
          Estadísticas <span>Generales</span>
        </h1>
      </div>
    </div>
  );
};

export default HeadingDash;
