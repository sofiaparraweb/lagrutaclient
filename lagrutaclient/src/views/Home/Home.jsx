import NavBar from "../../components/NavBar/NavBar";
import LastNews from "../../components/News/HeaderNews/LastNews"
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
    return (
        <div>
            <NavBar/>
            <div className={style.NoticiasContenedor}>
                <LastNews className={style.Noticias}/>
                <Link to="/noticias" className={style.BotonMasNoticias} onClick={handleClick}>Ver más noticias</Link>
            </div>
            <h1>Fotos</h1>
            <h1>Videos</h1>
            <h1>Frases</h1>
            <div>
                <h1>Ubicacion</h1>
            </div>
            <Footer/>
        </div>
    );
}

export default Home; 