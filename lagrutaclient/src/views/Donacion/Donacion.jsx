import React from 'react';
import { useState } from 'react';
import style from "./Donacion.module.css";
import dona1 from "../../assets/Donaciones/dona2.jpg"



const DonationForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [customValue, setCustomValue] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);

    if (event.target.value === 'otraOpcion') {
      setShowInput(true);
    } else {
      setShowInput(false);
      setCustomValue(''); 
    }
  };

  const handleCustomValueChange = (event) => {
    setCustomValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedOption || (selectedOption === 'otraOpcion' && !customValue)) {
      setError(true);
      return;
    }

    alert('Opción seleccionada:', selectedOption);
    if (selectedOption === 'otraOpcion') {
      alert('Valor personalizado:', customValue);
    }
    setError(false);
  };


  return (
    <>
    <div className={style.container} >
      <div>
        <img src={dona1} alt="img" />
    </div>

      <form className={style.contenForm} onSubmit={handleSubmit}>
      <h3 className={style.title1} >¡DONÁ AHORA!</h3>

      <p className={style.parrafoDona} >LA GRUTA está presente para ayudar a las niñas y niños que nos necesitan HOY.</p>
      <h3 className={style.title2} >Mensual</h3>
      <label className={style.labels} >
        <input
        className={style.inputs}
          type="radio"
          value="opcion1"
          checked={selectedOption === 'opcion1'}
          onChange={handleOptionChange}
        />
       ARS 5.000
      </label>

      <label className={style.labels}>
        <input
        className={style.inputs}
          type="radio"
          value="opcion2"
          checked={selectedOption === 'opcion2'}
          onChange={handleOptionChange}
        />
        ARS 10.000
      </label>

      <label className={style.labels}>
        <input
        className={style.inputs}
          type="radio"
          value="opcion3"
          checked={selectedOption === 'opcion3'}
          onChange={handleOptionChange}
        />
       ARS 15.000
       </label>

      <label className={style.labels}>
      <input
      className={style.inputs}
          type="radio"
          value="otraOpcion"
          checked={selectedOption === 'otraOpcion'}
          onChange={handleOptionChange}
        />
       
        Otro
        </label>
        <label className={style.labelOtro}>
        {showInput && (
        <input
          className={style.inputOtro}
          type="text"
          value={customValue}
          onChange={handleCustomValueChange}
          placeholder="Ingrese otro valor"
        />
      )}
      </label>
      {error && <p style={{ color: 'red' }}>Por favor, ingresar un monto.</p>}

      <button className={style.btnDona} type="submit">Siguiente</button>
    </form>

       
     
    </div>
   
     
   </>
  );
};

export default DonationForm;
