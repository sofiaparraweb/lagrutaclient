import React from "react";
import SideDash from "../../components/DashBoard/sideDash/SideDash.jsx";
import CardsHeader from "../../components/DashBoard/General/CardsHeader.jsx"; 
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";




export default function Dashboard() {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-white">Estadísticas Generales</h1>
        <div className="flex items-center gap-2 text-3xl">
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <CardsHeader
          datacard="usuarios"
          totalValue="145"
          text="Usuarios totales"
        />
        <CardsHeader
          datacard="totalNews"
          totalValue="130"
          text="Noticias totales"
        />
        <CardsHeader
          datacard="messagesend"
          totalValue="10,000"
          text="Mensajes recibidos"
        />
       </div>
      <div>
        <h1 className="text-2xl text-white my-10">Últimos usuarios registrados</h1>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4">
          <h5>ID</h5>
          <h5>Nombre</h5>
          <h5>Rol</h5>
          <h5>Fecha registro</h5>
          <h5>Modificar</h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
            <span>#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Nombre</h5>
            <p>Pepito Gonzales</p>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Rol</h5>
            <span className="py-1 px-2 bg-yellow-500/10 text-yellow-500 rounded-lg">
              Usuario
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Fecha registro</h5>
            <span>28 octubre 2022</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Modificar</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
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
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Información
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
            <span>#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Nombre</h5>
            <p>Rosita Margarita</p>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Rol</h5>
            <span className="py-1 px-2 bg-blue-500/10 text-blue-500 rounded-lg">
              Voluntario
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Fecha registro</h5>
            <span>28 octubre 2022</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Modificar</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
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
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Información
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
            <span>#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Nombre</h5>
            <p>Josefina Ramirez</p>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Rol</h5>
            <span className="py-1 px-2 bg-green-500/10 text-green-500 rounded-lg">
              Padrino
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Fecha registro</h5>
            <span>28 octubre 2022</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Modificar</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
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
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Información
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
            <span>#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Nombre</h5>
            <p>Rodrigo NoseQue</p>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Rol</h5>
            <span className="py-1 px-2 bg-yellow-500/10 text-yellow-500 rounded-lg">
              Usuario
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Fecha registro</h5>
            <span>28 octubre 2022</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Modificar</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
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
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Información
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}
