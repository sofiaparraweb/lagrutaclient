import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import { getAllUsers, deleteUser } from "../../../Redux/actions";

export default function TablaUsers() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.LocalPersist.allUsers);
  const [buttonStates, setButtonStates] = useState({});
  const [buttonTexts, setButtonTexts] = useState({});

  useEffect(() => {
    dispatch(getAllUsers());

    const storedButtonStates = localStorage.getItem("buttonStates");
    const storedButtonTexts = localStorage.getItem("buttonTexts");

    if (userInfo && storedButtonStates && storedButtonTexts) {
      setButtonStates(JSON.parse(storedButtonStates));
      setButtonTexts(JSON.parse(storedButtonTexts));
    }
  }, [dispatch]);

  const handleButtonClick = (id) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));

    setButtonTexts((prevTexts) => ({
      ...prevTexts,
      [id]: !prevTexts[id] ? "Activar" : "Bloquear",
    }));

    if (buttonStates[id]) {
      handleDeleteUser(id);
    }

    localStorage.setItem("buttonStates", JSON.stringify(buttonStates));
    localStorage.setItem("buttonTexts", JSON.stringify(buttonTexts));
  };

  const url = "http://localhost:3001";

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`${url}/user/status/${id}`);
      dispatch(deleteUser(id)); // Actualiza el estado de Redux
      alert("Usuario eliminado correctamente");
    } catch (error) {
      console.log(error);
      alert("Ocurrió un error al eliminar el usuario");
    }
  };

  console.log(userInfo);

  return (
    <>
      <div className="bg-gray-800 px-4 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0">
        <h1 className="text-2xl text-white my-10">
          Últimos usuarios registrados
        </h1>
      </div>

      {userInfo?.map((u) => (
        <div className="bg-secondary-100 p-8 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
            <div key={u.id}>
              <h5 className="md:hidden text-gray-700 font-bold mb-2">ID</h5>
              <span className="text-gray-700">{u.id}</span>
            </div>
            <div>
              <h5 className="md:hidden text-gray-700 font-bold mb-2">Nombre</h5>
              <p className="text-gray-700">{u.fullName}</p>
            </div>
            <div>
              <h5 className="md:hidden text-gray-700 font-bold mb-2">Rol</h5>
              <span className="py-1 px-2 text-yellow-500 rounded-lg">
                {u.Rols && u.Rols.length > 0 ? (
                  u.Rols.map((catgory) => (
                    <span className="py-1 px-2 bg-blue-800/30 text-gray-700 rounded-lg">
                      {catgory.name}
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
            {/*botones banneo/activación*/}
            <div>
              <button
                className={`w-14 h-7 ${
                  u.status === true
                    ? "w-14 h-7 bg-green-700 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-green-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-green-700 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 "
                    : "bg-red-700 w-14 h-7 bg-green-700 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-red-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-red-700 after:border after:rounded-full after:h-6 after:w-6 after:transition-all "
                } relative inline-flex items-center cursor-pointer`}
                onClick={() => {
                  console.log(u.id);
                  console.log(u.status);
                  handleButtonClick(u.id);
                }}>
                <span class="ml-20 text-ms font-medium text-black dark:text-black">
                  {u.status ? buttonTexts[u.id] : "Bloquear"}
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
