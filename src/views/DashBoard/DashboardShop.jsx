import React from "react";
import FormCreacion from "../../components/DashBoard/Tienda/FormCreacion";
import TablaTienda from "../../components/DashBoard/Tablas/TablaTienda";

export default function DashboardShop() {
  return (
    <>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-gray-700">
          Administrar productos y tienda
        </h1>
        <div className="flex items-center gap-2 text-3xl"></div>
      </div>
      {/* aca colocar el componente*/}

      <TablaTienda />
      <div className="bg-gray-800 px-4 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0">
        <h1 className="text-2xl text-white my-10">Añadir nuevos productos</h1>
      </div>
      <FormCreacion />
    </>
  );
}
