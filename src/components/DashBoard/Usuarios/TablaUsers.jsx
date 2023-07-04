import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";



export default function TablaUsers() {


  const [buttonStates, setButtonStates] = useState({});
  const [buttonTexts, setButtonTexts] = useState({});
  
/*   const isButtonActive = useSelector(
    (state) => state.LocalPersist.isButtonActive
  );
  const dispatch = useDispatch(); */

 /*  const handleButtonClick = () => {
    dispatch({ type: "TOGGLE_BUTTON" });
  }; */


  const handleButtonClick = (id) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id] 
    }));
  
    setButtonTexts((prevState) => ({
      ...prevState,
      [id]: prevState[id] ? "Activar" : "Bloquear" 
    }));
  };

  return (
    <>
      <div className="bg-gray-800 px-4 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0">
        <h1 className="text-2xl text-white my-10">
          Últimos usuarios registrados
        </h1>
      </div>

      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">ID</h5>
            <span className="text-gray-700">#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Nombre</h5>
            <p className="text-gray-700">Pepito Gonzales</p>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Rol</h5>
            <span className="py-1 px-2 bg-yellow-500/10 text-yellow-500 rounded-lg">
              Usuario
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">
              Fecha registro
            </h5>
            <span className="text-gray-700">28 octubre 2022</span>
          </div>
          {/*botones banneo/activación*/}
          <div>
            <button
              className={`w-14 h-7 ${
                buttonStates[id] ? "w-14 h-7 bg-green-700 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-green-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-green-700 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 " : "bg-red-700 w-14 h-7 bg-green-700 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-red-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-red-700 after:border after:rounded-full after:h-6 after:w-6 after:transition-all "
              } relative inline-flex items-center cursor-pointer`}
              onClick={handleButtonClick(id)}>
                  <span class="ml-20 text-ms font-medium text-black dark:text-black">
                  {buttonTexts[id]}
              </span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">ID</h5>
            <span className="text-gray-700">#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Nombre</h5>
            <p className="text-gray-700">Rosita Margarita</p>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Rol</h5>
            <span className="py-1 px-2 bg-blue-500/10 text-blue-500 rounded-lg">
              Voluntario
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">
              Fecha registro
            </h5>
            <span className="text-gray-700">28 octubre 2022</span>
          </div>
          <div>
            <div>
            {/* <div>
            <button
              className={`w-14 h-7 ${
                isButtonActive ? "w-14 h-7 bg-green-700 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-green-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-green-700 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 " : "bg-red-700 w-14 h-7 bg-green-700 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-red-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-red-700 after:border after:rounded-full after:h-6 after:w-6 after:transition-all "
              } relative inline-flex items-center cursor-pointer`}
              onClick={handleButtonClick}>
                  <span class="ml-20 text-ms font-medium text-black dark:text-black">
                {isButtonActive ? "Bloquear" : "Activar"}
              </span>
            </button>
          </div> */}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">ID</h5>
            <span className="text-gray-700">#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Nombre</h5>
            <p className="text-gray-700">Josefina Ramirez</p>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700text-gray-700 font-bold mb-2">
              Rol
            </h5>
            <span className="py-1 px-2 bg-green-500/10 text-green-500 rounded-lg">
              Padrino
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">
              Fecha registro
            </h5>
            <span className="text-gray-700">28 octubre 2022</span>
          </div>
          <div>
            {/* <div>
            <button
              className={`w-14 h-7 ${
                isButtonActive ? "w-14 h-7 bg-green-700 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-green-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-green-700 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 " : "bg-red-700 w-14 h-7 bg-green-700 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-red-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-red-700 after:border after:rounded-full after:h-6 after:w-6 after:transition-all "
              } relative inline-flex items-center cursor-pointer`}
              onClick={handleButtonClick}>
                  <span class="ml-20 text-ms font-medium text-black dark:text-black">
                {isButtonActive ? "Bloquear" : "Activar"}
              </span>
            </button>
            </div> */}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">ID</h5>
            <span className="text-gray-700">#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Nombre</h5>
            <p className="text-gray-700">Rodrigo NoseQue</p>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Rol</h5>
            <span className="py-1 px-2 bg-yellow-500/10 text-yellow-500 rounded-lg">
              Usuario
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">
              Fecha registro
            </h5>
            <span className="text-gray-700">28 octubre 2022</span>
          </div>
          <div>
           {/*  <div>
            <button
              className={`w-14 h-7 ${
                isButtonActive ? "w-14 h-7 bg-green-700 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-green-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-green-700 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 " : "bg-red-700 w-14 h-7 bg-green-700 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-red-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-red-700 after:border after:rounded-full after:h-6 after:w-6 after:transition-all "
              } relative inline-flex items-center cursor-pointer`}
              onClick={handleButtonClick}>
                  <span class="ml-20 text-ms font-medium text-black dark:text-black">
                {isButtonActive ? "Bloquear" : "Activar"}
              </span>
            </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
