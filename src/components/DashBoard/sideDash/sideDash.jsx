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
            <Link to="/dashboard">
            <li>
                <i className="fa fa-dashboard fa-lg"></i> Dashboard
                </li>
                </Link>
            {/* Pestañas dashboardmenu*/}
           
            <Link to="/dashboard/shop">
            <li data-target="#tienda">
                <i className="fa fa-gift fa-lg"></i> Tienda{" "}
                </li>
                </Link>
            <Link to="/dashboard/users">
            <li data-target="#usuarios">
                <i className="fa fa-users fa-lg"></i> Usuarios{" "}
                </li>
                </Link>
                <Link to="/dashboard/news"> 
            <li data-target="#noticias">
                <i className="fa fa-rss fa-lg"></i> Noticias y actividades{" "} 
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideDash;
