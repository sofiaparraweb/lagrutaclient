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
        <p className="voluntario-section-description">Aquí va la descripción de qué significa ser voluntario.</p>
      </div>

      <FotosSlider />
      
     <div className="voluntario-section">
        <h2 className="voluntario-section-title">Proyectos para ser voluntario</h2>
        <p className="voluntario-section-description">
<p className="voluntario-section-description">Comedor infanto juvenil</p>
<p>Taller de niños</p>
<p>Taller de jóvenes</p>
<p>Taller de mujeres</p>
<p>Salud y Comunidad </p>
<p></p>Catequesis y pastoral</p>
      </div>
      
      <FormVoluntario />
    </div>
  );
};

export default Voluntario;
