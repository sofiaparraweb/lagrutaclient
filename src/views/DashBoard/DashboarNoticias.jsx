import React, { useState } from "react"
import { useSelector } from "react-redux";
import FormularioNews  from "../../components/DashBoard/Noticias/FormularioNew.jsx";
import TablaNoticias from "../../components/DashBoard/Tablas/TablaNoticias.jsx";
import Paginado from "../../components/News/Homes/CardNews/Paginado/Paginado.jsx";

export default function DashboardNoticias() {


  const [currentPage, setCurrentPage] = useState(1); 
  const noticesPerPage = 4;

  const notices = useSelector(state => state.LocalPersist.allActivity);


  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };  
  
  const indexOfLastProduct = currentPage * noticesPerPage; 
  const indexOfFirstProduct = indexOfLastProduct - noticesPerPage;
  const currentNotices = notices?.length > 0 && notices.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

    return (<>
    <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-gray-700">Administrar publicaciones</h1>
        <div className="flex items-center gap-2 text-3xl">
        </div>
      </div>
      {/* aca colocar el componente */}
    
          <TablaNoticias  notices = {currentNotices} />
          <Paginado 
           noticesPerPage = {noticesPerPage}
           allNotices={notices?.length}
           currentPage = {currentPage}
           handlePaginate = {handlePaginate}/>
    
          <div className="bg-gray-800 px-4 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0 mt-8">
        <h1 className="text-2xl text-white my-10">Crear nuevas publicaciones</h1>
      </div>
    <FormularioNews  />
</>
    );
}