import React from "react";
import FormularioNews  from "../../components/DashBoard/Noticias/FormularioNew.jsx";
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";


export default function DashboardNoticias() {

    return (<>
    <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-gray-700">Administrar publicaciones</h1>
        <div className="flex items-center gap-2 text-3xl">
        </div>
      </div>
      {/* aca colocar el componente */}
      <div className="bg-gray-800 px-4 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0">
        <h1 className="text-2xl  text-white my-10">Últimas publicaciones</h1>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">ID</h5>
            <span className="text-gray-700">#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Títutlo</h5>
            <p className="text-gray-700">Título de la publicación</p>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Categoría</h5>
            <span className="py-1 px-2 bg-blue-800/30 text-gray-700 rounded-lg">
              Educación
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Fecha de creación</h5>
            <span className="text-gray-700">28 octubre 2022</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Modificar</h5>
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
              menuClassName="bg-secondary-100 p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
                <button className="rounded-lg transition-colors text-gray-700 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1">Editar</button>
                <button className="rounded-lg transition-colors text-gray-700 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1">Eliminar</button>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">ID</h5>
            <span className="text-gray-700">#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Título</h5>
            <p className="text-gray-700">Título de la publicación</p>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Categoría</h5>
            <span className="py-1 px-2 bg-blue-800/30 text-gray-700 rounded-lg">
              Educación
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Fecha de creación</h5>
            <span className="text-gray-700">28 octubre 2022</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Modificar</h5>
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
              menuClassName="bg-secondary-100 p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
              <button className="rounded-lg transition-colors text-gray-700 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1">Editar</button>
                <button className="rounded-lg transition-colors text-gray-700 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1">Eliminar</button>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">ID</h5>
            <span className="text-gray-700">#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Título</h5>
            <p className="text-gray-700">Título de la publicación</p>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 text-gray-700 font-bold mb-2">Categoría</h5>
            <span className="py-1 px-2 bg-blue-800/30 text-gray-700 rounded-lg">
              Actividades
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Fecha de creación</h5>
            <span className="text-gray-700">28 octubre 2022</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Modificar</h5>
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
              menuClassName="bg-secondary-100 p-4"
            >
              
              <MenuItem className="p-0 hover:bg-transparent">
              <button className="rounded-lg transition-colors text-gray-700 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1">Editar</button>
                <button className="rounded-lg transition-colors text-gray-700 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1">Eliminar</button>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">ID</h5>
            <span className="text-gray-700">#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Título</h5>
            <p className="text-gray-700">Título de la publicación</p>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Categoría</h5>
            <span className="py-1 px-2 bg-blue-800/30 text-gray-700 rounded-lg">
              Salud
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Fecha de creación</h5>
            <span className="text-gray-700">28 octubre 2022</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Modificar</h5>
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
              menuClassName="bg-secondary-100 p-4"
            >
              
              <MenuItem className="p-0 hover:bg-transparent">
              <button className="rounded-lg transition-colors text-gray-700 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1">Editar</button>
                <button className="rounded-lg transition-colors text-gray-700 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1">Eliminar</button>
              </MenuItem>
            </Menu>
          </div>
          </div>
          </div>
          <div className="bg-gray-800 px-4 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0">
        <h1 className="text-2xl text-white my-10">Crear nuevas publicaciones</h1>
      </div>
    <FormularioNews  />
</>
    );
}