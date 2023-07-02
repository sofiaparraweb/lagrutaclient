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
        <p className="padrino-section-description">
          Ser padrino es marcar la diferencia en Tucumán. Al unirte a nuestro programa, tenes la posibilidad de brindarles un futuro mejor a los chicos del barrio. Tu apoyo mensual sostenido es fundamental para que podamos continuar con nuestro movimiento y seguir ayudando a estos niños en su crecimiento y desarrollo.
        </p>
      </div>
  
      <FotosSlider />

    <div className="padrino-section">
      <h2 className="padrino-section-title">Cómo ser padrino</h2>
      <p className="padrino-section-description">
        Como padrino, deberás elegir un monto determinado para donar mensualmente. Hay distintas formas de aportar:
      </p>      
      <ul>
        <li>Débito Automático</li>
        <li>Transferencia</li>
        <li>Cobrador personal en tu domicilio</li>
      </ul>
      <p className="padrino-section-description">
        El Monto Mínimo ($2500) se calcula para poder cubrir cada mes la alimentación, insumos necesarios e incluso talleres y educación para el desarrollo de UN niño que asista a La Gruta. NO es obligatorio. Si no pudieses alcanzar el monto mínimo, puedes aportar con otro valor.
      </p>
    </div>

    <h2 className="padrino-section-title">¿Interesado en ser padrino? ¡Contáctanos!</h2>
    <p className="padrino-section-description">
    Si estás interesado en ser voluntario en nuestra fundación y deseas obtener más información, puedes completar el formulario a continuación. Nos pondremos en contacto contigo para brindarte todos los detalles y responder a tus preguntas. ¡Gracias por tu interés en ser parte!
  </p>

    <FormPadrino />
    </div>
  );
  
};

export default Padrino;
