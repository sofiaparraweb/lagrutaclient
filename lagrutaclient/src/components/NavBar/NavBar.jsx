// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = ({ isAuthenticated }) => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <nav className={style.navContainer}>
        <div className={style.LeftContainer}>
          <Link to="/" className={style.link}>
            LOGO!!!
          </Link>
          <Link to="/about" className={style.link}> 
            About
          </Link>
        </div>
        <div className={style.dropdownContainer}>
            <Link to="/Conocenos" className={style.link}>
              Ayuda Hoy
            </Link>
            <div className={style.dropdownContent}>
              <Link to="/Dona" className={style.dropdownOption}>Dona</Link>
              <Link to="/SePadrino" className={style.dropdownOption}>Se padrino</Link>
              <Link to="/SeVoluntario" className={style.dropdownOption}>Se voluntario</Link>
            </div>
          </div>
        <div className={style.rightSection}>
            <Link to="/Tienda" className={style.link}>
              Tienda
            </Link>
            <Link to="/Login" className={style.link}>
              Inicia sesión
            </Link>
            <button onClick={handleLogout} className={style.link}>
              Cerrar Sesión
            </button>
          </>
        ) : (
          <Link to="/LogIn" className={style.link}>
            Inicia sesión
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
