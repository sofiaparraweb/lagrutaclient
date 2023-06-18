import NavBar from "../../components/NavBar/NavBar";
import LastNews from "../../components/News/HeaderNews/LastNews"
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import style from "./Home.module.css";
import DonaHome from "./DonaHome/Dona";
import SePadrinoHome from "./SePadrino/SePadrino"
import FotosSlider from "./FotosSlider/FotosSlider"

const Home = () => {

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    return (
        <div>
            <NavBar/>
            <div className={style.Home}>
                <FotosSlider />
                <div className={style.NoticiasContenedor}>
                    <LastNews className={style.Noticias}/>
                    <Link to="/noticias" className={style.BotonMasNoticias} onClick={handleClick}>Ver más noticias</Link>
                </div>
                <DonaHome />
                <SePadrinoHome />
                <h1>Frases</h1>
                <div>
                    <h1>Ubicacion</h1>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home; 