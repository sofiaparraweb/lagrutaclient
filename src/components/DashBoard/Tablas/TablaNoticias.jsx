import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivity } from "../../../Redux/actions.jsx";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";

export default function TablaNoticias() {
  const dispatch = useDispatch();
  const allActivity = useSelector((state) => state.LocalPersist.allActivity);

  useEffect(() => {
    dispatch(getAllActivity());
  }, []);

  return (
    <div>
      <div className="bg-gray-800 px-4 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0 ">
        <h1 className="text-2xl  text-white my-10">
          Todas las publicaciones publicaciones
        </h1>
      </div>
      <div className="mb-8">
      {allActivity?.map((n) => (
        <div className="bg-secondary-100 p-8 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl ">
            <div>
              <h5 className="md:hidden text-gray-700 font-bold mb-2">ID</h5>
              <span className="text-gray-700">{n.id}</span>
            </div>
            <div>
              <h5 className="md:hidden text-gray-700 font-bold mb-2">
                Títutlo
              </h5>
              <p className="text-gray-700">{n.name}</p>
            </div>
            <div>
              <h5 className="md:hidden text-gray-700 font-bold mb-2">
                Categoría
              </h5>
              {n.ActivityTypes && n.ActivityTypes.length > 0 ? (
                n.ActivityTypes.map((catgory) => (
                  <span className="py-1 px-2 bg-blue-800/30 text-gray-700 rounded-lg">
                    {catgory.name}
                  </span>
                ))
              ) : (
                <span>No hay categorías disponibles</span>
              )}
            </div>
            <div>
              <h5 className="md:hidden text-gray-700 font-bold mb-2">
                Fecha de creación
              </h5>
              <span className="text-gray-700">{n.date}</span>
            </div>
            <div>
              <h5 className="md:hidden text-gray-700 font-bold mb-2">
                Modificar
              </h5>
              <Menu
                menuButton={
                  <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors text-gray-700">
                    Modificar
                  </MenuButton>
                }
                align="end"
                arrow
                arrowClassName="bg-secondary-100"
                transition
                menuClassName="bg-secondary-100 p-4">
                <MenuItem className="p-0 hover:bg-transparent">
                  <button className="rounded-lg transition-colors text-gray-700 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1">
                    Editar
                  </button>
                  <button className="rounded-lg transition-colors text-gray-700 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1">
                    Eliminar
                  </button>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
