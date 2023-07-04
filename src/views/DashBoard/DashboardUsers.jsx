import React from "react";
import TablaUsers from "../../components/DashBoard/Tablas/TablaUsers";


export default function DashboardUsers() {

    return (<>
    <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-gray-700">Administrar perfiles y usuarios</h1>
        <div className="flex items-center gap-2 text-3xl">
        </div>
      </div>
      {/* aca colocar el componente*/}
      <TablaUsers />
</>
    );
}