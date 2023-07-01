import React from "react";
import CardsHeader from "../../components/DashBoard/General/CardsHeader.jsx"; 
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";




export default function Dashboard() {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-gray-700">Estadísticas Generales</h1>
        <div className="flex items-center gap-2 text-3xl">
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-8 mb-8">
        <CardsHeader
          datacard="usuarios"
          totalValue="145"
          text="Usuarios totales"
          icon="usuarios"
          route="usuarios"
          per="usuarios"
        />
        <CardsHeader
          datacard="totalNews"
          totalValue="130"
          text="Noticias totales"
          icon="totalNews"
          route="totalNews"
          per="totalNews"
        />
         <CardsHeader
          datacard="ventas"
          totalValue="500"
          text="Total de productos"
          icon="ventas"
          route="ventas"
          per="ventas"
        />
        <CardsHeader
          datacard="messagesend"
          totalValue="10,000"
          text="Mensajes recibidos"
          icon="messagesend"
          per="messagesend"
        />
       </div>
       <div className="bg-gray-800 px-4 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0">
        <h1 className="text-2xl text-white my-10">Últimos usuarios registrados</h1>
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
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Fecha registro</h5>
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
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-700 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Información
                </Link>
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
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Fecha registro</h5>
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
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-700 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Información
                </Link>
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
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Nombre</h5>
            <p className="text-gray-700">Josefina Ramirez</p>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700text-gray-700 font-bold mb-2">Rol</h5>
            <span className="py-1 px-2 bg-green-500/10 text-green-500 rounded-lg">
              Padrino
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Fecha registro</h5>
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
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-700 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Información
                </Link>
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
            <h5 className="md:hidden text-gray-700 font-bold mb-2">Fecha registro</h5>
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
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-700 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Información
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
        </div>
        {/* por debajo tile*/}

        <div className="bg-gray-800 px-4 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0">
  <h1 className="text-2xl text-white my-10">Últimas ventas</h1>
</div>
  <div className="bg-secondary-100 p-8 rounded-xl">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
      <div>
        hhhh22
      </div>
    </div>
</div>

  <div className="bg-gray-800 px-4 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0">
    <h1 className="text-2xl text-white my-10">Trafíco</h1>
  </div>
  <div className="bg-secondary-100 p-8 rounded-xl">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
      <div>
        hhhh
      </div>
    </div>
  </div>






      </div>
  );
}
