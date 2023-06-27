import React from "react"
import Side from "../SideBar/side/Side.jsx";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import NewsCarrousel from "./NewsCarrousel/NewsCarrousel.jsx";

import CardNews from "./CardNews/CardNews.jsx";

import style from "./style.module.css"


const Homes = ({ allActivity }) => {
  return (
    <>
      <div className={style.mainNews}>
        <div className={style.container}>
          <section className={style.mainContent}>
           <NewsCarrousel />
           <CardNews allActivity={allActivity} />
         {/* aqui van componentes de relleno, actualmente desactivados*/}
          </section>
          <section className={style.sideContent}>
            <Side />
          </section>
        </div>
      </div>
    </>
  )
}

export default Homes;
