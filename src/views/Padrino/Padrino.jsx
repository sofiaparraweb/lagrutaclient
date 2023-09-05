import React from 'react';
import FotosSlider from '../Home/FotosSlider/FotosSlider';
import FormPadrino from '../../components/FormPadrino/FormPadrino';
import corazones from "../../assets/corazones.png";
import './Padrino.css';

const Padrino = () => {
  return (
    <div className="padrino-container">
      <div style={{display: "flex"}}>
        <div style={{display: "flex", alignItems: "center"}}>
          <h1 className="padrino-title">Sé Padrino</h1>
        </div>
        <img src={corazones} alt="padrino" style={{height: "100px"}} />
      </div>
  
      <FotosSlider />
      <div className="padrino-section">
        <div className="padrino-sections">
          <h2 className="padrino-section-title">¿Por qué ser padrino?</h2>
          <p className="padrino-section-description">
            Ser padrino es marcar la diferencia en Tucumán. Al unirte a nuestro programa, tenes la posibilidad de brindarles un futuro mejor a los chicos del barrio. Tu apoyo mensual sostenido es fundamental para que podamos continuar con nuestro movimiento y seguir ayudando a estos niños en su crecimiento y desarrollo.
          </p>
        </div>
        <div className="padrino-sections">
          <h2 className="padrino-section-title">¿Cómo ser padrino?</h2>
          <p className="padrino-section-description">
            Como padrino, podrás elegir un monto para donar entre las siguientes formas de pago:
          </p>  
          <h2 style={{display:"flex", justifyContent:"space-around", color:"#EB5D0B"}}>
            <p> Débito Automático</p>
            <p>|</p>
            <p> Transferencia</p>
            <p>|</p>
            <p> Cobro a domicilio</p>
          </h2>            
          <p className="padrino-section-description">
            Una contribución mensual de $2500 sirve para cubrir la alimentación, insumos y actividades educativas de un niño en La Gruta. Sin ebmbargo, no es un requisito estricto, si no puedes llegar a este monto, cualquier aporte es valioso.
          </p>
        </div>
      </div>

      <div className="padrino-sections">
        <h2 className="padrino-section-title">¿Interesado en ser Padrino? ¡Contáctanos!</h2>
        <p className="padrino-section-description2">
          Si estás interesado en ser voluntario en nuestra fundación y obtener más información, completa el siguiente formulario y te contactaremos para más detalles. ¡Gracias por tu interés en ser parte!
        </p>
      </div>
      <FormPadrino />
    </div>
  );
  
};

export default Padrino;
