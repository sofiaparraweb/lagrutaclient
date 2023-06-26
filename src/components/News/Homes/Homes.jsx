import React from "react"
import Side from "../SideBar/side/Side.jsx";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import NewsCarrousel from "./NewsCarrousel/NewsCarrousel.jsx";

import CardNews from "./CardNews/CardNews.jsx";

import "./style.css"


const Homes = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className="mainContent">
           <NewsCarrousel />
           <CardNews />
         {/* aqui van componentes de relleno, actualmente desactivados*/}
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  )
}

export default Homes;
