import React, { useState } from "react"
import { useSelector } from "react-redux";
import FormCreacion from "../../components/DashBoard/Tienda/FormCreacion";
import TablaTienda from "../../components/DashBoard/Tablas/TablaTienda";
import Paginado from "../../components/DashBoard/Tienda/Paginado/Paginado";



export default function DashboardShop() {

  const [currentPage, setCurrentPage] = useState(1); 
  const productosPerPage = 4;

  const productos = useSelector(state => state.LocalPersist.allProducts);


  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };  
  
  const indexOfLastProduct = currentPage * productosPerPage; 
  const indexOfFirstProduct = indexOfLastProduct - productosPerPage;
  const currentProductos = productos?.length > 0 && productos.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );


  return (
    <>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-gray-700">
          Administrar productos y tienda
        </h1>
        <div className="flex items-center gap-2 text-3xl"></div>
      </div>
      {/* aca colocar el componente*/}

      <TablaTienda  productos = {currentProductos} />
      <Paginado 
           productosPerPage = {productosPerPage}
           allProductos={productos?.length}
           currentPage = {currentPage}
           handlePaginate = {handlePaginate}/>

      <div className="bg-gray-800 px-4 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0 mt-20">
        <h1 className="text-2xl text-white my-10">Añadir nuevos productos</h1>
      </div>
      <FormCreacion />
    </>
  );
}
