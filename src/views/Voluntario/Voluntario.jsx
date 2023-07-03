import axios from 'axios';
import React from 'react';
import './Voluntario.css';
import FormVoluntario from '../../components/FormVoluntario/FormVoluntario';
import FotosSlider from '../Home/FotosSlider/FotosSlider';

const Voluntario = () => {

  return (
    <div className="voluntario-container">
      <h1 className="voluntario-title">Se Voluntario</h1>
      
      <div className="voluntario-section">
  <h2 className="voluntario-section-title">¿Qué es ser voluntario?</h2>
  <p className="voluntario-section-description">
    Ser voluntario es dejar que la realidad te interpele. Es una experiencia gratificante y enriquecedora para generar un impacto positivo. Es animarte a salir de la zona de comfort y ser parte del cambio. Te animas a entregar tu tiempo y energía en La Gruta?
  </p>
</div>

      <FotosSlider />
      
      <div className="voluntario-section">
  <h2 className="voluntario-section-title">¿Cómo ser voluntario?</h2>
  <p className="voluntario-section-description">
    Para ser voluntario en La gruta, simplemente necesitas contactar a nuestro equipo de voluntariado y manifestar tu interés en sumarte. Te brindaremos toda la información necesaria sobre nuestras actividades y proyectos, así como los requisitos y las opciones de participación. No se requiere experiencia previa, solo las ganas de ayudar y el compromiso de dedicar tu tiempo de acuerdo a tus posibilidades. ¡Anímate a ser voluntario y contribuir con tu granito de arena!
  </p>
</div>

      <div className="voluntario-section">
  <h2 className="voluntario-section-title">Proyectos para ser voluntario</h2>
  <ul className="voluntario-section-description">
    <li>Comedor infanto juvenil</li>
    <li>Taller de niños</li>
    <li>Taller de jóvenes</li>
    <li>Taller de mujeres</li>
    <li>Salud y Comunidad</li>
    <li>Catequesis y pastoral</li>
  </ul>
</div>

<div className="voluntario-section">
  <h2 className="voluntario-section-title">¿Interesado en ser voluntario? ¡Contáctanos!</h2>
  <p className="voluntario-section-description">
    Si estás interesado en ser voluntario en nuestra fundación y deseas obtener más información, puedes completar el formulario a continuación. Nos pondremos en contacto contigo para brindarte todos los detalles y responder a tus preguntas. ¡Gracias por tu interés en ser parte!
  </p>
  </div>

  <FormVoluntario />
    </div>
  );
};

export default Voluntario;
