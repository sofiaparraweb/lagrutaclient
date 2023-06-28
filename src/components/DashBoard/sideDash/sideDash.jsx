import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link to="/3">
                <i className="fa fa-gift fa-lg"></i> Tienda{" "}
                </Link>
            </li>
            <li data-target="#usuarios">
            <Link to="/4"> 
                <i className="fa fa-users fa-lg"></i> Usuarios{" "}
                </Link>
            </li>
            <li data-target="#noticias">
            <Link to="/2"> 
                <i className="fa fa-rss fa-lg"></i> Noticias y actividades{" "}
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideDash;
