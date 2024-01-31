import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import { getAllUsers } from "../../../Redux/actions";

export default function TablaUsers() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.LocalPersist.allUsers);
  const [buttonStates, setButtonStates] = useState({});
  const [buttonTexts, setButtonTexts] = useState({});
  //const url = "http://localhost:3001";
  const url = "https://lagruta.onrender.com";


  useEffect(() => {
    dispatch(getAllUsers());
  
    const storedButtonStates = localStorage.getItem("buttonStates");
    const storedButtonTexts = localStorage.getItem("buttonTexts");
  
    if (userInfo && storedButtonStates && storedButtonTexts) {
      setButtonStates(JSON.parse(storedButtonStates));
      setButtonTexts(JSON.parse(storedButtonTexts));
    } else if (userInfo) {
      const initialButtonStates = {};
      userInfo.forEach((u) => {
        initialButtonStates[u.id] = true; // Todos los usuarios comienzan como activos
      });
      setButtonStates(initialButtonStates);
    }
  }, [dispatch]);
  

  const handleButtonClick = async (id) => {
    try {
      const updatedButtonStates = { ...buttonStates };

      if (buttonStates[id]) {
        await axios.delete(`${url}/user/status/${id}`);
        alert("Usuario bloqueado correctamente");
        updatedButtonStates[id] = false; // Cambia el estado del usuario a baneado
      } else {
        await axios.post(`${url}/user/restore/${id}`);
        alert("Usuario restaurado correctamente");
        updatedButtonStates[id] = true; // Cambia el estado del usuario a activo
      }

      // Actualiza el estado local de los botones
      setButtonStates(updatedButtonStates);

      // Actualiza los textos de los botones
      setButtonTexts((prevTexts) => ({
        ...prevTexts,
        [id]: buttonStates[id] ? "BANEADO" : "ACTIVO",
      }));
    } catch (error) {
      console.log(error);
      alert("Ocurrió un error al cambiar el estado del usuario");
    }
  };

  return (
    <>
      <div className="bg-gray-800 px-4 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0">
        <h1 className="text-2xl text-white my-10">
          Últimos usuarios registrados
        </h1>
      </div>

      {userInfo?.map((u) => (
        <div className="bg-secondary-100 p-8 rounded-xl" key={u.id}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
            <div>
              <h5 className="md:hidden text-gray-700 font-bold mb-2">Nombre</h5>
              <p className="text-gray-700">{u.fullName}</p>
            </div>
            <div>
              <h5 className="md:hidden text-gray-700 font-bold mb-2">Rol</h5>
              <span className="py-1 px-2 text-yellow-500 rounded-lg">
                {u.Rols && u.Rols.length > 0 ? (
                  u.Rols.map((category) => (
                    <span
                      key={category.id}
                      className="py-1 px-2 bg-blue-800/30 text-gray-700 rounded-lg"
                    >
                      {category.name}
                    </span>
                  ))
                ) : (
                  <span>No hay categorías disponibles</span>
                )}
              </span>
            </div>
            <div>
              <h5 className="md:hidden text-gray-700 font-bold mb-2">
                Fecha Nacimiento
              </h5>
              <span className="text-gray-700">{u.birthDate}</span>
            </div>
            {/* Botones banneo/activación */}
            <div>
              <button
                className={`w-14 h-7 relative inline-flex items-center cursor-pointer`}
                style={{
                  backgroundColor: buttonStates[u.id] ? "green" : "red", // Cambia el color según el estado del usuario
                  color: "white",
                  borderRadius: "999px",
                }}
                onClick={() => {
                  console.log(u.id);
                  console.log(u.status);
                  handleButtonClick(u.id);
                }}
              >
                <span className="ml-20 text-ms font-medium text-black dark:text-black">
                  {buttonStates[u.id] ? "ACTIVO" : "BANEADO"} {/* Cambia el texto del botón según el estado del usuario */}
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}


//el tema es asi... en el back, los usuarios tienen una propiedad paranoid que puede estare n true o false
//si esta en true el usuario esta activo, si esta en false el suuario esta baneado.
//yo necesito que 
