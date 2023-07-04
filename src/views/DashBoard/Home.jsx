import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardsHeader from "../../components/DashBoard/General/CardsHeader.jsx";
import TablaUsers from "../../components/DashBoard/Usuarios/TablaUsers.jsx";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import { getUserId } from "../../Redux/actions.jsx";

export default function Dashboard() {
  const userInfo = useSelector((state) => state.LocalPersist.userInfo);

  useEffect(() => {
    dispatch(getUserId());
  }, [dispatch]);

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-gray-700">Estadísticas Generales</h1>
        <div className="flex items-center gap-2 text-3xl"></div>
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
      {userInfo?.map((i) => {
        return (
          <TablaUsers
            key={i.id}
            id={i.id}
            name={i.fullname}
            updatedAt={i.updatedAt}
            rol={i.Rol}
          />
        );
      })}

      {/* por debajo tile*/}

      <div className="bg-gray-800 px-4 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0">
        <h1 className="text-2xl text-white my-10">Últimas ventas</h1>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>hhhh22</div>
        </div>
      </div>

      <div className="bg-gray-800 px-4 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0">
        <h1 className="text-2xl text-white my-10">Trafíco</h1>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>hhhh</div>
        </div>
      </div>
    </div>
  );
}
