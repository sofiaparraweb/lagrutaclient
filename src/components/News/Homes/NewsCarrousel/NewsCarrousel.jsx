import React from "react"
import HeadingMx from "../../Heading/HeadingMx";
import AutoSlider from "./AutoSlider";

import style from "./NewsCarrousel.module.css";

const NewsCarrousel = () => {
 
  return (
    <>
      <section className={style.popularPost}>
        <HeadingMx title='Noticias destacadas' />
        <div className={style.content}>
          <AutoSlider  
          />  
        </div>
      </section>
    </>
  )
}

export default NewsCarrousel;
