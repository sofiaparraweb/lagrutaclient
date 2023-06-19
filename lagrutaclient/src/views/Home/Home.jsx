import NavBar from "../../components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import LastNews from "../../components/News/HeaderNews/LastNews"
import { Link } from "react-router-dom";
import style from "./Home.module.css";
import DonaHome from "./DonaHome/Dona";
import SePadrinoHome from "./SePadrino/SePadrino"
import FotosSlider from "./FotosSlider/FotosSlider"
import lagruta from '../../assets/lagruta.png';
//import { getAllActivity } from "../../Redux/actions.jsx"

const Home = () => {

    const dispatch = useDispatch();
    const allActivity = useSelector(state => state.allActivity);

    // useEffect(() => {
    // dispatch(getAllActivity());
    // }, [dispatch]);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    return (
        <div>
            <NavBar/>
            <div className={style.Home}>
                <FotosSlider />
                <div className="imageHomeContainer">
                    <img src={lagruta} alt="lagruta"></img>
                </div>
                <DonaHome />
                <SePadrinoHome />
                <div className={style.NoticiasContenedor}>
                    <LastNews className={style.Noticias} allActivity={allActivity}/>
                    <Link to="/noticias" className={style.BotonMasNoticias} onClick={handleClick}>Ver más noticias</Link>
                </div>
                {/* <h1>Frases</h1>
                <div>
                    <h1>Ubicacion</h1>
                </div> */}
            </div>
        </div>
    );
}

export default Home; 