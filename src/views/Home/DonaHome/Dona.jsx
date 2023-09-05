import { Link } from "react-router-dom";
import "./Dona.css";

const DonaHome = () => {
  
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="dona-home">
      <p className="text-dona-home">
        En La Gruta queremos devolver la alegría y la espontaneidad a los niños.
        Queremos que jueguen, que aprendan y que se rían, que se sientan queridos,
        que abracen, que bailen, que inventen, que admiren. 
        Queremos que los niños sean niños
      </p>
      <p className="text-dona-home">
        Gracias a los contribuyentes, vamos creciendo cada vez más. Tu aporte permite
        transformar y mejorar la calidad de vida de los más de 130 chicos del barrio
        que concurren al comedor. ¿Cómo contribuir?
      </p>
      <Link to="/dona" className="boton-para-donar" onClick={handleClick}>
        Ver más
      </Link>
    </div>
  );
};

export default DonaHome;
