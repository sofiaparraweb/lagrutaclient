import { Link } from "react-router-dom";
import "./SePadrino.css"

const SePadrinoHome = () =>{

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return(
        <div className="se-padrino-home">
            <p className="se-padrino-texto">
                Te invitamos a formar parte de esta comunidad tan linda, sumate como padrino o madrina de los niños que están esperando por vos, por tu abrazo y todo el cariño que tenés para brindarles
            </p>
            <Link to="/se-padrino" className="boton-sePadrino-home" onClick={handleClick}>
                Sumate!
            </Link>
        </div>
    )
}

export default SePadrinoHome;