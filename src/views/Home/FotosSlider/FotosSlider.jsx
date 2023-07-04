import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { gallery } from "../../../dummyData";
import style from "./FotosSlider.module.css";

const FotosSlider = () => {

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
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <Slider className={style.GalleryHome} ref={sliderRef} {...settings}>
            {gallery?.map((val) => {
                return (
                    <div className={style.ImagenesCarrusel}>
                        <img src={val.cover} alt="" />
                    </div>
                );
            })}
        </Slider>
    )
}

export default FotosSlider;