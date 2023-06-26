import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../../assets/logo.png'
import './NavBar.css'; 

const NavBar = ({ isAuthenticated }) => {
  const { loginWithRedirect, logout, user } = useAuth0();
  const [isHovered, setIsHovered] = useState(false);
  const [isOptionHovered, setIsOptionHovered] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  const handleLogout = () => {
    logout({ returnTo: window.location.origin }); 
  };

  const handleLogin = () => {
    loginWithRedirect({ appState: { targetUrl: "/perfil" } });
    setIsLoggingIn(true);
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
        <Link to="/">
          <img src={logo} alt="logo" width="60px" className="logo" onClick={handleClick}/>
        </Link>
        <NavLink to="/about" className="link" activeClassName="active" id="conocenosNav" onClick={handleClick}> 
          Conocenos
        </NavLink>
        <NavLink to="/noticias" className="link" activeClassName="active" id="noticiasNav" onClick={handleClick}>
          Noticias
        </NavLink>
        <NavLink to="/tienda" className="link" activeClassName="active" id="tiendaNav" onClick={handleClick}>
          Tienda
        </NavLink>
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
              <NavLink to="/dona" className="dropdownOption" activeClassName="active" id="donaNav" onClick={handleClick}>
                Dona
              </NavLink>
              <NavLink to="/se-padrino" className="dropdownOption" activeClassName="active" id="sepadrinoNav" onClick={handleClick}>
                Sé padrino
              </NavLink>
              <NavLink to="/se-voluntario" className="dropdownOption" activeClassName="active" id="sevoluntarioNav" onClick={handleClick}>
                Sé voluntario
              </NavLink>
            </div>
          )}
        </div>
        {isAuthenticated ? (
          <NavLink to="/perfil" className="link" activeClassName="active" id="perfilNav" onClick={handleClick}>
            Perfil
          </NavLink>
        ) : null}
      </div>
      <div className="rightSection">
        {isAuthenticated ? (
          <button onClick={handleLogout} id="cerrariniciarNav" className="link logoutButton">
            Cerrar Sesión
          </button>
        ) : (
          <button onClick={handleLogin} id="cerrariniciarNav" className={`link loginButton ${isLoggingIn ? "loggingIn" : ""}`}>
            Iniciar sesión
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;