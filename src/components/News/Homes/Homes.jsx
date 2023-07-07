import React, { useState } from "react"
import { useSelector } from "react-redux";
import Side from "../SideBar/side/Side.jsx";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import NewsCarrousel from "./NewsCarrousel/NewsCarrousel.jsx";
import Paginado from "./CardNews/Paginado/Paginado.jsx";
import CardNews from "./CardNews/CardNews.jsx";
import style from "./style.module.css"



const Homes = () => {


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
  
  return (
    <>
      <div className={style.mainNews}>
        <div className={style.container}>
          <section className={style.mainContent}>
           <NewsCarrousel />
           <CardNews notices = {currentNotices}/>
           <hr />
           <Paginado 
           noticesPerPage = {noticesPerPage}
           allNotices={notices?.length}
           currentPage = {currentPage}
           handlePaginate = {handlePaginate}/>
         {/* aqui van componentes de relleno, actualmente desactivados*/}
          </section>
          <section className={`${style.sideContent} sidebar-container`}>
            <Side />
          </section>
        </div>
      </div>
    </>
  )
}

export default Homes;
