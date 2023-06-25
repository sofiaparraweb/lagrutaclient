import React from 'react';
import FotosSlider from '../Home/FotosSlider/FotosSlider';
import FormPadrino from '../../components/FormPadrino/FormPadrino';
import './Padrino.css';

const Padrino = () => {
  return (
    <div className="padrino-container">
      <h1 className="padrino-title">Sé Padrino</h1>
      
      <div className="padrino-section">
        <h2 className="padrino-section-title">¿Qué es ser padrino?</h2>
        <p className="padrino-section-description">Aquí va la descripción de qué significa ser padrino.</p>
      </div>

      <FotosSlider />
      
     <div className="padrino-section">
        <h2 className="padrino-section-title">Proyectos para ser padrino</h2>
        <p className="padrino-section-description">Aquí van los títulos y descripciones de los proyectos en los que puedes ser padrino.</p>
      </div>
      
      <FormPadrino />
    </div>
  );
};

export default Padrino;
