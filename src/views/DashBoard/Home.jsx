import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardsHeader from "../../components/DashBoard/General/CardsHeader.jsx";
import LineChart from "../../components/DashBoard/General/Graficas/LinesTablet.jsx";
import PieCharts from "../../components/DashBoard/General/Graficas/pieCharts.jsx";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import { getAllActivity, getAllProducts } from "../../Redux/actions.jsx";

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllActivity());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const allActivity = useSelector((state) => state.LocalPersist.allActivity);
  const allProducts = useSelector((state) => state.LocalPersist.allProducts);

  const totalNewsCount = allActivity.length; // Contar la cantidad de...
  const totalProductsCount = allProducts.length;
  console.log("Número total de noticias:", totalNewsCount);

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
          totalValue={totalNewsCount}
          text="Noticias totales"
          icon="totalNews"
          route="totalNews"
          per="totalNews"
        />
        <CardsHeader
          datacard="ventas"
          totalValue={totalProductsCount}
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
      {/* por debajo tile*/}

<div className="flex">
  <div className="bg-secondary-100 p-8 rounded-xl w-1/2">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
      <LineChart/>
    </div>
  </div>

  <div className="bg-secondary-100 p-8 rounded-xl w-1/2">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
      <PieCharts />
    </div>
  </div>
</div>


    </div>
  );
}
