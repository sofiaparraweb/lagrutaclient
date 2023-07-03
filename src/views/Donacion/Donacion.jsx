import React, { useState } from "react";
import style from "./Donacion.module.css";
import dona1 from "../../assets/Donaciones/dona2.jpg";
import dona3 from "../../assets/Donaciones/dona3.jpg"
import FormDona from "./FormDona";
import Swal from "sweetalert2";


const DonationForm = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [customValue, setCustomValue] = useState("");
  const [error, setError] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setShowInput(event.target.value === "otraOpcion");
    setCustomValue("");
    setError(false);
  };

  const handleCustomValueChange = (event) => {
    setCustomValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedOption || (selectedOption === "otraOpcion" && !customValue)) {
      setError(true);
      return;
    }

    //alert("Opción seleccionada:", selectedOption);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: "Opción seleccionada:",
      showConfirmButton: false,
      timer: 3000
  })
    if (selectedOption === "otraOpcion") {
      alert("Valor personalizado:", customValue);
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: "Valor personalizado:",
    //     showConfirmButton: false,
    //     timer: 3000
    // })
    }
    setError(false);
    setCustomValue("");
    setShowForm(true);
  };

  //const showInput = selectedOption === "otraOpcion";

  return (
    <>
      <div className={style.containerPrincipal}>
        <div className={style.containerSecundario}>
          <div className={style.container1}>
            <img src={dona1} alt="img" id="img-Donacion"/>
          </div>
          
          {showForm ?(
           <FormDona selectedOption={selectedOption} customValue={customValue} />
          ) : (
          <form className={style.contenForm} onSubmit={handleSubmit}>
            <h3 className={style.title1}>¡DONÁ AHORA!</h3>

            <p className={style.parrafoDona}>
              LA GRUTA está presente para ayudar a las niñas y niños que nos
              necesitan HOY.
            </p>

            <h3 className={style.title2}>Selecciona y doná</h3>

            <label className={style.labels}>
              <input
                className={style.inputs}
                name="amount"
                type="radio"
                value="15000"
                checked={selectedOption === "15000"}
                onChange={handleOptionChange}
              />
              ARS 15.000
            </label>

            <label className={style.labels}>
              <input
                className={style.inputs}
                name="amount"
                type="radio"
                value="10000"
                checked={selectedOption === "10000"}
                onChange={handleOptionChange}
              />
              ARS 10.000
            </label>

            <label className={style.labels}>
              <input
                className={style.inputs}
                name="amount"
                type="radio"
                value="5000"
                checked={selectedOption === "5000"}
                onChange={handleOptionChange}
              />
              ARS 5.000
            </label>

            <label className={style.labels}>
              <input
                className={style.inputs}
                name="amount"
                type="radio"
                value="otraOpcion"
                checked={selectedOption === "otraOpcion"}
                onChange={handleOptionChange}
              />
              Otro
            </label>

            {showInput && (
              <label className={style.labelOtro}>
                <div className={style.inputContainer}>
                  <span className={style.currency}>ARS</span>
                  <input
                    className={style.inputOtro}
                    name="amount"
                    type="number"
                    value={customValue}
                    onChange={handleCustomValueChange}
                    placeholder="Ingrese otro valor"
                  />
                </div>
                <p style={{ color: "#fff" }}>Valor personalizado: {customValue}</p>
              </label>
            )}

            {error && (
              <p className={style.errorMessage} style={{ color: "red" }}>
                Por favor, seleccione un monto.
              </p>
            )}
             
                 <button className={style.btnDona} type="submit" >
                 Siguiente
               </button>
                
            
          </form>
           )}
          

          <div className={style.container2}>
            <div className={style.container3}>
              <img
                src={dona3}
                alt="img"
                style={{ width: "600px", height: "300px" }}
              />
              <p className={style.parrafo2}>
                <p>DESNUTRICIÓN </p>
                La desnutrición aguda, la forma más letal de la malnutrición,
                afecta a 47 millones de niñas y niños menores de 5 años en todo
                el mundo. En 2021, 5,4 millones de chicas y chicos recibieron
                tratamiento que salvó sus vidas.
              </p>
              <p className={style.parrafo2}>
                <p>EDUCACIÓN</p>
                En nuestro país, cerca de 93.000 adolescentes que residen en
                ámbitos rurales no tienen acceso a la educación secundaria, de
                los cuales más de 65.000 pertenecen a contextos rurales
                dispersos. La falta de secundarias en las comunidades hace que
                las chicas y chicos deban trasladarse a otras localidades o
                recorrer muchos kilómetros por día.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationForm;
