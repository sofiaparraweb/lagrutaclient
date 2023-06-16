import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../../assets/logo.png'
import './NavBar.css'; 

const NavBar = ({ isAuthenticated }) => {
  const { loginWithRedirect, logout, user } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleLogin = () => {
    loginWithRedirect({ appState: { targetUrl: "/perfil" } });
  };

  return (
    <nav className="navContainer">
      <div className="LeftSection">
        <Link to="/home">
          <img src={logo} alt="logo" width="60px" className="logo" />
        </Link>
        <div className="dropdownContainer">
          <Link to="/about" className="link">
            Sobre nosotros
          </Link>
          <Link to="/noticias" className="link">
            Nuestros proyectos
          </Link>
        </div>
       <div>
       <Link to="/tienda" className="link">
          Tienda
        </Link>
        </div> 
        <div className="dropdownContainer">
          <Link to="/ayuda-Hoy" className="link">
            Ayuda Hoy
          </Link>
          <div className="dropdownContent">
            <Link to="/dona" className="dropdownOption">
              Dona
            </Link>
            <Link to="/sePadrino" className="dropdownOption">
              Sé padrino
            </Link>
            <Link to="/seVoluntario" className="dropdownOption">
              Sé voluntario
            </Link>
          </div>
        </div>
        {isAuthenticated ? (
          <Link to="/perfil" className="link">
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
