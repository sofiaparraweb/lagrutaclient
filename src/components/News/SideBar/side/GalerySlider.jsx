import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { gallery } from "../../../../dummyData";
import style from "./Side.module.css";

const GalerySlider = () => {

    const sliderRef = useRef(null);
    useEffect(() => {
      const slider = sliderRef.current;
  
      const interval = setInterval(() => {
        slider.slickNext(); 
      }, 3000);
  
      return () => {
        clearInterval(interval); // Limpia el intervalo al desmontar el componente
      };
    }, []);

    

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };


       return (
<Slider ref={sliderRef} {...settings}>
        {gallery.map((val, index) => {
            return (
              <div key={index} className={style.imgg}>
                <img src={val.cover} alt="" />
              </div>
            );
          })}
            </Slider>
       )
}

export default GalerySlider;