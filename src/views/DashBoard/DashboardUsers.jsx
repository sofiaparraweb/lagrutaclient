import React from "react";



export default function DashboardUsers() {

    return (<>
    <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-gray-700">Administrar perfiles y usuarios</h1>
        <div className="flex items-center gap-2 text-3xl">
        </div>
      </div>
      {/* aca colocar el componente*/}
      <div className="bg-gray-800 px-4 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0">
        <h1 className="text-2xl text-white my-10">Últmos usuarios registrados</h1>
      </div>
</>
    );
}