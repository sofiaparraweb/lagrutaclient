import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {

  return (
    <nav className={style.navContainer}>
      <div>
        <div className={style.LeftContainer}>
          <Link to="/" className={style.link}>
            LOGO!!!!
          </Link>
          <Link to="/about" className={style.link}> 
            About
          </Link>
          <div className={style.dropdownContainer}>
            <Link to="/Conocenos" className={style.dropdownLink}>
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
          <Link to="/Login" className={style.About}>
            Inicia sesión
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;