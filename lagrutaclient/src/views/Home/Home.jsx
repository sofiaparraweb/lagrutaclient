import NavBar from "../../components/NavBar/NavBar";
import LastNews from "../../components/News/HeaderNews/LastNews"
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import style from "./Home.module.css";
import DonaHome from "./DonaHome/Dona";
import SePadrinoHome from "./SePadrino/SePadrino"

const Home = () => {

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    return (
        <div>
            <NavBar/>
            <div className={style.Home}>
                <div className={style.NoticiasContenedor}>
                    <LastNews className={style.Noticias}/>
                    <Link to="/noticias" className={style.BotonMasNoticias} onClick={handleClick}>Ver más noticias</Link>
                </div>
                <DonaHome />
                <SePadrinoHome />
                {/* <div className="imagen-contenedor">
                    <div className="slider-contenedor">
                        <div className="contenido-slider">
                            <img src="https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg" alt=""></img>
                        </div>
                        <div className="contenido-slider">
                            <img src="https://marketing4ecommerce.co/wp-content/uploads/2019/07/tipos-de-im%C3%A1genes-1280x720.jpg" alt=""></img>
                        </div>
                        <div className="contenido-slider">
                            <img src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww&w=1000&q=80" alt=""></img>
                        </div>
                        <div className="contenido-slider">
                            <img src="https://kinsta.com/es/wp-content/uploads/sites/8/2019/09/jpg-vs-jpeg.jpg" alt=""></img>
                        </div>
                        

                            <div className={style.NavigationAuto}>
                                <div className={style.AutoBtn1}></div>
                                <div className={style.AutoBtn2}></div>
                                <div className={style.AutoBtn3}></div>
                                <div className={style.AutoBtn4}></div>
                            </div>
    
                        <div className={style.NavigationManual}>
                            <label htmlFor="radio1" className={style.ManualBtn}></label>
                            <label htmlFor="radio2" className={style.ManualBtn}></label>
                            <label htmlFor="radio3" className={style.ManualBtn}></label>
                            <label htmlFor="radio4" className={style.ManualBtn}></label>
                        </div>
                    </div>
                </div> */}
                <h1>Fotos</h1>
                <h1>Videos</h1>
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