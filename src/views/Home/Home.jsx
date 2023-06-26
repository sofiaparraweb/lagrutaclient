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
import { getAllActivity, createProfile } from "../../Redux/actions.jsx"
import { useAuth0 } from "@auth0/auth0-react";
import { useRef } from 'react';

const Home = () => {

    const { user, isAuthenticated } = useAuth0();
    const dispatch = useDispatch();
    const allActivity = useSelector(state => state.allActivity);
    const isProfileCreatedRef = useRef(false);

    useEffect(() => {
        if (isAuthenticated && user && !isProfileCreatedRef.current) {
          const newUser = {
            fullName: user.name,
            mail: user.email,
          };
          dispatch(createProfile(newUser));
          isProfileCreatedRef.current = true;
        }
      }, [dispatch, isAuthenticated, user]);
    
 
    useEffect(() => {
    dispatch(getAllActivity());
    },[]);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    return (
        <div>
            <div className={style.Home}>
                <FotosSlider />
                <div className="imageHomeContainer">
                    <img src={lagruta} alt="lagruta"></img>
                </div>
                <p className={style.frase}>“Los científicos dicen que estamos hechos de átomos, pero un pajarito me contó que estamos hechos de historias”</p>
                <p className={style.frase}>Eduardo Galeano</p>
                <DonaHome />
                <SePadrinoHome />
                <div className={style.NoticiasContenedor}>
                    <LastNews className={style.Noticias} allActivity={allActivity} />
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