import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../assets/logo.png";
// import {AiOutlineShoppingCart } from "react-icons/ai";
// import { useDispatch, useSelector } from 'react-redux'
// import { getCarrito } from "../../Redux/actions"
// import { useEffect } from 'react';
//import {HamburgerIcon} from '@chakra-ui/icons'
import "./NavBar.css";

const NavBar = ({ isAuthenticated }) => {

  // const dispatch = useDispatch();
  // const Carrito = useSelector((state) => state.LocalPersist.Carrito.Products);
  // const user_id = useSelector(state => state.LocalPersist.userInfo.id);
  const { loginWithRedirect, logout, user } = useAuth0();
  const [isHovered, setIsHovered] = useState(false);
  const [isOptionHovered, setIsOptionHovered] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // useEffect(()=>{
  //   dispatch(getCarrito(user_id))
  // },[user_id])
 
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
          <>
          {/* <div className="cartNavContainer" style={{padding:"0 15px"}}>
            <NavLink to="/cart">
              <AiOutlineShoppingCart className="IconRightNavBar" />
              <p className="NumeroChango">{Carrito?.length || 0}</p> 
            </NavLink>
          </div> */}
          <button
            onClick={handleLogout}
            id="cerrariniciarNav"
            className="link logoutButton">
            Cerrar Sesión
          </button>
          </>
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
