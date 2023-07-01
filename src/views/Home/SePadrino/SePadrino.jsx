import style from "./SePadrino.module.css"
import Sumate from '../../../assets/Sumate.png';
import naranja from '../../../assets/naranja.png';
import { Link } from "react-router-dom";

const SePadrinoHome = () =>{

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return(
        <div className={style.SePadrinoHome}>
            <div className={style.ImagenContainer}>
                <img src={Sumate} alt="sumate" width="550px"></img>
            </div>
            <div className={style.SumateContainerParteDerecha}>
                <img src={naranja} alt="naranja"></img>
                <p id="SePadrino">Te invitamos a formar parte de esta comunidad tan linda, sumate como padrino o madrina de los niños que están esperando por vos, por tu abrazo y todo el cariño que tenés para brindarles</p>
            </div>
            <Link to="/sePadrino" className={style.BotonSePadrino} onClick={handleClick}>Sumate! </Link>
        </div>
    )
}

export default SePadrinoHome;