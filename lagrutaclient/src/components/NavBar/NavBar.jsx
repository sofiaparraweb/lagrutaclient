import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {

  return (
    <nav className={style.navContainer}>
        <div className={style.LeftSection}>
          <Link to="/" className={style.link}>
            LOGO!!!
          </Link>
          <Link to="/about" className={style.link}> 
            About
          </Link>
          <Link to="/Noticias" className={style.link}> 
            Noticias
          </Link>
        </div>
        <div className={style.rightSection}>
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
            <Link to="/Tienda" className={style.link}>
              Tienda
            </Link>
            <Link to="/Login" className={style.link}>
              Inicia sesión
            </Link>
          </div>
    </nav>
  );
}

export default NavBar;