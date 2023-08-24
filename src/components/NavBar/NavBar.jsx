import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./NavBar.css";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../Firebase/Firebase";

const NavBar = () => {
  const { user, login, logOut } = useAuth(); 
  const [isHovered, setIsHovered] = useState(false);
  const [isOptionHovered, setIsOptionHovered] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const isAuthenticated = auth.currentUser !==null

  const handleLogout = async () => {
    await logOut();
    window.location.href = "/";
  };
  

  const handleLogin =  () => {
    try {
      window.location.href = "/LogIn";
      setIsLoggingIn(true);
    } catch (error) {
      console.log(error);
    }
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

  const isAdmin = isAuthenticated && user.email === "lagrutacdi@gmail.com";
  return (
    <nav className="navContainer">
      <div className="LeftSection">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            width="60px"
            className="logo-NavBar"
            onClick={handleClick}
          />
        </Link>
        <div className="dropdownContainer">
          <div
            className={`link ${isHovered ? "active" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id="conocenosNav">
            Conocenos
          </div>
          {(isHovered || isOptionHovered) && (
            <div
              className="dropdownContent"
              onMouseEnter={handleOptionMouseEnter}
              onMouseLeave={handleOptionMouseLeave}>
              <NavLink
                to="/about"
                className="dropdownOption"
                activeclassname="active"
                id="nosotros"
                onClick={handleClick}>
                NOSOTROS
              </NavLink>
              <NavLink
                to="/historia"
                className="dropdownOption"
                activeclassname="active"
                id="nuestraHistoria"
                onClick={handleClick}>
                Nuestra Historia
              </NavLink>
              <NavLink
                to="/equipo"
                className="dropdownOption"
                activeclassname="active"
                id="nuestroEquipoNav"
                onClick={handleClick}>
                Nuestro equipo
              </NavLink>
            </div>
          )}
        </div>
        <NavLink
          to="/noticias"
          className="link"
          activeclassname="active"
          id="noticiasNav"
          onClick={handleClick}>
          Noticias
        </NavLink>
        <NavLink
          to="/tienda"
          className="link"
          activeclassname="active"
          id="tiendaNav"
          onClick={handleClick}>
          Tienda
        </NavLink>
        <div className="dropdownContainer">
          <div
            className={`link ${isHovered ? "active" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id="ayudarNav">
            Ayudar
          </div>
          {(isHovered || isOptionHovered) && (
            <div
              className="dropdownContent"
              onMouseEnter={handleOptionMouseEnter}
              onMouseLeave={handleOptionMouseLeave}>
              <NavLink
                to="/dona"
                className="dropdownOption"
                activeclassname="active"
                id="donaNav"
                onClick={handleClick}>
                Dona
              </NavLink>
              <NavLink
                to="/se-padrino"
                className="dropdownOption"
                activeclassname="active"
                id="sepadrinoNav"
                onClick={handleClick}>
                Sé padrino
              </NavLink>
              <NavLink
                to="/se-voluntario"
                className="dropdownOption"
                activeclassname="active"
                id="sevoluntarioNav"
                onClick={handleClick}>
                Sé voluntario
              </NavLink>
            </div>
          )}
        </div>
        {isAuthenticated ? (
          <NavLink
            to="/perfil"
            className="link"
            activeclassname="active"
            id="perfilNav"
            onClick={handleClick}>
            Perfil
          </NavLink>
        ) : null}
        {isAdmin && (
          <NavLink
            to="/dashboard"
            className="link"
            activeclassname="active"
            id="administradorNav"
            onClick={handleClick}
          >
            Administrador
          </NavLink>
        )}
      </div>
      <div className="rightSection">
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            id="cerrariniciarNav"
            className="link logoutButton">
            Cerrar Sesión
          </button>
        ) : (
          <button
            onClick={handleLogin}
            id="cerrariniciarNav"
            className={`link loginButton ${isLoggingIn ? "loggingIn" : ""}`}>
            Iniciar sesión
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
