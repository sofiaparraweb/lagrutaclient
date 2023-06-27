import React, { useState } from "react";
import style from "./sideDash.module.css";

const SideDash = () => {
  return (
    <>
      <div className={style.navsidemenu}>
        <div className={style.brand}>Panel administrador</div>
        <div className="menulist">
          <ul id="menu-content">
            <li>
              <a href="#">
                <i className="fa fa-dashboard fa-lg"></i> Dashboard
              </a>
            </li>
            {/* Pestañas dashboardmenu*/}
            <li data-target="#tienda">
              <a href="#">
                <i className="fa fa-gift fa-lg"></i> Tienda{" "}
              </a>
            </li>
            <li data-target="#usuarios">
              <a href="#">
                <i className="fa fa-users fa-lg"></i> Usuarios{" "}
              </a>
            </li>
            <li data-target="#noticias">
              <a href="#activity">
                <i className="fa fa-rss fa-lg"></i> Noticias y actividades{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-user fa-lg"></i> otros
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-users fa-lg"></i> otros
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideDash;
