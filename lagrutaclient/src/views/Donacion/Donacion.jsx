import React from 'react';
import style from "./Donacion.module.css";
import dona1 from "../../assets/Donaciones/dona2.jpg"



const DonationForm = () => {
  const handleAnonymousDonation = () => {
    // Lógica para procesar una donación anónima
  };

  const handleLoginDonation = () => {
    // Lógica para procesar una donación con inicio de sesión
  };

  const handleConfirmationEmail = () => {
    // Lógica para enviar un correo de confirmación
  };

  const handlePaymentRedirect = () => {
    // Lógica para redireccionar al enlace de pago
  };

 

  return (
    <>
    <div className={style.container} >
      <div>
        <img src={dona1} alt="" />
        <form className={style.contenForm} >
      <h3>¡DONÁ AHORA!</h3>

      <p>LA GRUTA está presente para ayudar a las niñas y niños que nos necesitan HOY.</p>

      <label>
        <input
          type="radio"
          value="opcion1"
         
        />
       ARS 5.000
      </label>

      <label>
        <input
          type="radio"
          value="opcion2"
          
        />
        ARS 10.000
      </label>

      <label>
        <input
          type="radio"
          value="opcion3"
          
        />
       ARS 15.000
      </label>

      <label>
        <input
          type="radio"
          value="otraOpcion"
          
        />
        Ingresar otro valor:
        <input
          type="text"
          value= ''
         
        />
      </label>

      <button type="submit">Siguiente</button>
    </form>

       
      </div>
    </div>
   
     
   </>
  );
};

export default DonationForm;
