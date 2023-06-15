import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../../assets/logo.png'

const NavBar = ({ isAuthenticated }) => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <nav className={style.navContainer}>
      <div className={style.LeftSection}>
        <Link to="/">
          <img src={logo} alt="logo" width="60px" className={style.logo}></img>
        </Link>
        <Link 
          to="/Conocenos" 
          style={{ borderBottom:'6px solid rgba(223,184,55,255)', borderBottomLeftRadius: '5px' }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(223, 184, 55, 255)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }} 
          className={style.link}>
          About
        </Link>
        <Link 
          to="/Tienda" 
          style={{ borderBottom:'6px solid rgba(234,93,11,255)'}}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(234,93,11,255)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }} 
          className={style.link}> 
          Tienda
        </Link>
        <div className={style.dropdownContainer}>
        <Link 
          to="/Ayuda-Hoy" 
          style={{ borderBottom:'6px solid rgba(195,64,56,255)', borderBottomRightRadius: '5px' }} 
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(195,64,56,255)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }} 
          className={style.link}>
          Ayuda Hoy
        </Link>
        <div className={style.dropdownContent}>
          <Link to="/Dona" className={style.dropdownOption}>
            Dona
          </Link>
          <Link to="/SePadrino" className={style.dropdownOption}>
            Se padrino
          </Link>
          <Link to="/SeVoluntario" className={style.dropdownOption}>
            Se voluntario
          </Link>
        </div>
      </div>
      </div>
      <div className={style.rightSection}>
        {isAuthenticated ? (
          <>
            <Link to="/Perfil" className={style.link}>
              Perfil
            </Link>
            <button onClick={handleLogout} className={style.link}>
              Cerrar Sesión
            </button>
          </>
        ) : (
          <Link 
            to="/LogIn" 
            style={{ borderBottom:'6px solid rgba(16,68,118,255)', borderRadius: '5px' }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(16,68,118,255)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}  
            className={style.link}>
            Inicia sesión
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
