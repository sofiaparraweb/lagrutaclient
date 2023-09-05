import axios from 'axios';
import React from 'react';
import './Voluntario.css';
import FormVoluntario from '../../components/FormVoluntario/FormVoluntario';
import FotosSlider from '../Home/FotosSlider/FotosSlider';
import estrellas from "../../assets/estrellas.png";

const Voluntario = () => {

  return (
    <div className="voluntario-container">
      <div style={{display: "flex"}}>
        <div style={{display: "flex", alignItems: "center"}}>
          <h1 className="voluntario-title">Sé Voluntario</h1>
        </div>
        <img src={estrellas} alt="voluntario" style={{height: "100px"}} />
      </div>
      
      <FotosSlider />
      <div className="GridThreeColumns">
        <div className="voluntario-sections">
          <h2 className="voluntario-section-title">¿Por qué ser voluntario?</h2>
          <p className="voluntario-section-description">
            Ser voluntario es dejar que la realidad te interpele. Es una experiencia gratificante y enriquecedora para generar un impacto positivo. Es animarte a salir de la zona de confort y ser parte del cambio. Te animas a entregar tu tiempo y energía en La Gruta?
          </p>
        </div>
        <div className="voluntario-sections">
          <h2 className="voluntario-section-title">Proyectos de voluntariado</h2>
          <h2 className="voluntario-section-description">
            <p style={{padding:"5px", color:"#D7B63E"}}>Comedor infanto juvenil</p>
            <p style={{padding:"5px", color:"#EB5D0B"}}>Taller de niños</p>
            <p style={{padding:"5px", color:"#B9362C"}}>Taller de jóvenes</p>
            <p style={{padding:"5px", color:"#124476"}}>Taller de mujeres</p>
            <p style={{padding:"5px", color:"#D7B63E"}}>Salud y Comunidad</p>
            <p style={{padding:"5px", color:"#EB5D0B"}}>Catequesis y pastoral</p>
          </h2>
        </div>
        <div className="voluntario-sections">
          <h2 className="voluntario-section-title">¿Cómo ser voluntario?</h2>
          <p className="voluntario-section-description">
            Puedes unirte como voluntario en La Gruta contactando a nuestro equipo donde te proporcionaremos información sobre actividades y proyectos, requisitos y opciones de participación. No se requiere experiencia previa, solo tu deseo de ayudar y el compromiso de dedicar tu tiempo de acuerdo a tus posibilidades. 
          </p>
          <p className="voluntario-section-description" style={{fontWeight:"550"}}>
            ¡Anímate a ser voluntario y aportar tu granito de arena!
          </p>
        </div>
      </div>

      <div className="voluntario-sections">
        <div style={{marginTop:"80px"}}>
          <h2 className="voluntario-section-title">¿Interesado en ser voluntario? ¡Contáctanos!</h2>
          <p className="voluntario-section-description2">
            Si estás interesado en ser voluntario en nuestra fundación y obtener más información, completa el siguiente formulario y te contactaremos para más detalles. ¡Gracias por tu interés en ser parte!
          </p>
        </div>
      </div>
      <FormVoluntario />
    </div>
  );
};

export default Voluntario;
