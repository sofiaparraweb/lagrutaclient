import React from "react";

import style from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <>
      <section className={style.social}>
        <div className={style.socBox}>
          <i className="fab fa-facebook-f"></i>
          <span>12,740 Me gusta</span>
        </div>
        <div className={style.socBox}>
          <i className="fab fa-instagram"></i>
          <span>22,700 Seguidores</span>
        </div>
        <div className={style.socBox}>
          <i className="fab fa-youtube"></i>
          <span>2,700 Suscriptores</span>
        </div>
      </section>
    </>
  );
};

export default SocialMedia;
