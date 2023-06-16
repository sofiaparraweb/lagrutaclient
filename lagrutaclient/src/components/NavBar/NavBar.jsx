import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../../assets/logo.png'

const NavBar = ({ isAuthenticated }) => {
  const { loginWithRedirect, logout } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };
  
  return (
    <nav className={style.navContainer}>
      <div className={style.LeftSection}>
        <Link to="/home">
          <img src={logo} alt="logo" width="60px" className={style.logo} onClick={handleClick}></img>
        </Link>
        <div className={style.dropdownContainer}>
          <Link 
            to="/about" 
            style={{ borderBottom:'6px solid rgba(223,184,55,255)', borderBottomLeftRadius: '5px' }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(223, 184, 55, 255)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }} 
            className={style.link}>
            Conocenos
          </Link>
          <div className={style.dropdownContent}>
            <Link 
              to="/about" 
              className={style.dropdownOption}
              style={{ borderBottom:'3px solid rgba(234,93,11,255)'}}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(234,93,11,255)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }} >
              Sobre nosotros
            </Link>
            <Link 
              to="/noticias" 
              className={style.dropdownOption}
              style={{ borderBottom:'3px solid rgba(195,64,56,255)'}} 
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(195,64,56,255)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }} >
              Nuestros proyectos
            </Link>
          </div>
        </div>
        <Link 
          to="/noticias" 
          style={{ borderBottom:'6px solid rgba(234,93,11,255)'}}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(234,93,11,255)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }} 
          className={style.link}> 
          Noticias
        </Link>
        <Link 
          to="/tienda" 
          style={{ borderBottom:'6px solid rgba(195,64,56,255)' }} 
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(195,64,56,255)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }} 
          className={style.link}> 
          Tienda
        </Link>
        <div className={style.dropdownContainer}>
        <div 
          to="/ayuda-Hoy" 
          style={{ borderBottom:'6px solid rgba(16,68,118,255)', borderBottomRightRadius: '5px' }} 
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(16,68,118,255)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }} 
          className={style.link}>
          Ayuda Hoy
        </div>
        <div className={style.dropdownContent}>
        <Link 
            to="/dona" 
            className={style.dropdownOption}
            style={{ borderBottom:'3px solid rgba(223,184,55,255)'}}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(223, 184, 55, 255)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}>
            Dona
          </Link>
          <Link 
            to="/sePadrino" 
            className={style.dropdownOption}
            style={{ borderBottom:'3px solid rgba(234,93,11,255)'}}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(234,93,11,255)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }} >
            Sé padrino
          </Link>
          <Link 
            to="/seVoluntario" 
            className={style.dropdownOption}
            style={{ borderBottom:'3px solid rgba(195,64,56,255)'}} 
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(195,64,56,255)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }} >
            Sé voluntario
          </Link>
        </div>
      </div>
      </div>
        <div className={style.rightSection}>
        {isAuthenticated ? (
          <button onClick={handleLogout} 
          style={{ borderBottom: '6px solid rgba(16,68,118,255)', borderRadius: '5px' }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(16,68,118,255)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
            className={`${style.link} ${style.logoutButton}`}>
            Cerrar Sesión
          </button>
        ) : (
          <button
            onClick={handleLogin}
            style={{ borderBottom: '6px solid rgba(16,68,118,255)', borderRadius: '5px' }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(16,68,118,255)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
            className={`${style.link} ${style.loginButton}`}
          >
            Inicia sesión
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
