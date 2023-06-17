import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../../assets/logo.png'
import './NavBar.css'; 

const NavBar = ({ isAuthenticated }) => {
  const { loginWithRedirect, logout, user } = useAuth0();
  const [isHovered, setIsHovered] = useState(false);

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

  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <nav className="navContainer">
      <div className="LeftSection">
        <Link to="/home">
          <img src={logo} alt="logo" width="60px" className="logo" onClick={handleClick}/>
        </Link>
        <div className="dropdownContainer">
          <Link to="/about" className="link" onClick={handleClick}>
            Conocenos
          </Link>
          <Link to="/noticias" className="link" onClick={handleClick}>
            Noticias
          </Link>
        </div>
        <div>
          <Link to="/tienda" className="link" onClick={handleClick}>
            Tienda
          </Link>
        </div> 
        <div className="dropdownContainer">
          <div
            className={`link ${isHovered ? "active" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
           Ayudar
          </div>
          {isHovered && (
            <div className="dropdownContent">
              <Link to="/dona" className="dropdownOption" onClick={handleClick}>
                Dona
              </Link>
              <Link to="/sePadrino" className="dropdownOption" onClick={handleClick}>
                Sé padrino
              </Link>
              <Link to="/seVoluntario" className="dropdownOption" onClick={handleClick}>
                Sé voluntario
              </Link>
            </div>
          )}
        </div>
        {isAuthenticated ? (
          <Link to="/perfil" className="link" onClick={handleClick}>
            Perfil
          </Link>
        ) : null}
      </div>
      <div className="rightSection">
        {isAuthenticated ? (
          <button onClick={handleLogout} className="link logoutButton">
            Cerrar Sesión
          </button>
        ) : (
          <button onClick={handleLogin} className="link loginButton">
            Iniciar sesión
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
