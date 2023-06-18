import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../../assets/logo.png'
import './NavBar.css'; 

const NavBar = ({ isAuthenticated }) => {
  const { loginWithRedirect, logout, user } = useAuth0();
  const [isHovered, setIsHovered] = useState(false);
  const [isOptionHovered, setIsOptionHovered] = useState(false);
  
  const handleLogout = () => {
    logout({ returnTo: window.location.origin }); 
  };

  const handleLogin = () => {
    loginWithRedirect({ appState: { targetUrl: "/perfil" } });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleOptionMouseEnter = () => {
    setIsOptionHovered(true);
  };

  const handleOptionMouseLeave = () => {
    setIsOptionHovered(false);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <nav className="navContainer">
      <div className="LeftSection">
        <Link to="/home">
          <img src={logo} alt="logo" width="60px" className="logo" onClick={handleClick}/>
        </Link>
        <Link to="/about" className="link" id="conocenosNav" onClick={handleClick}>
          Conocenos
        </Link>
        <Link to="/noticias" className="link" id="noticiasNav" onClick={handleClick}>
          Noticias
        </Link>
        <Link to="/tienda" className="link" id="tiendaNav" onClick={handleClick}>
          Tienda
          </Link>
        <div className="dropdownContainer">
        <div
            className={`link ${isHovered ? "active" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id="ayudarNav"
          >
            Ayudar
          </div>
          {(isHovered || isOptionHovered) && (
            <div
              className="dropdownContent"
              onMouseEnter={handleOptionMouseEnter}
              onMouseLeave={handleOptionMouseLeave}
            >
              <Link to="/dona" className="dropdownOption" id="donaNav" onClick={handleClick}>
                Dona
              </Link>
              <Link to="/sePadrino" className="dropdownOption" id="sepadrinoNav" onClick={handleClick}>
                Sé padrino
              </Link>
              <Link to="/seVoluntario" className="dropdownOption" id="sevoluntarioNav" onClick={handleClick}>
                Sé voluntario
              </Link>
            </div>
          )}
        </div>
        {isAuthenticated ? (
          <Link to="/perfil" className="link" id="perfilNav" onClick={handleClick}>
            Perfil
          </Link>
        ) : null}
      </div>
      <div className="rightSection">
        {isAuthenticated ? (
          <button onClick={handleLogout} id="cerrariniciarNav" className="link logoutButton">
            Cerrar Sesión
          </button>
        ) : (
          <button onClick={handleLogin} id="cerrariniciarNav" className="link loginButton">
            Iniciar sesión
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
