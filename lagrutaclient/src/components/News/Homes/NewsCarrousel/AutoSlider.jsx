import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import { lifestyle } from "../../../../dummyData";

import style from "./NewsCarrousel.module.css";

const AutoSlider = () => {
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
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {lifestyle.map((val, index) => {
              return (
                <div key={index} className={style.items}>
                    <div className={style.images}>
                      <div className={style.img}>
                        <img src={val.cover} alt='' />
                      </div>
                    </div>
                    <div className={style.text}>
                    <Link to={`/Noticias/${val.id}`}>
                      <h1 className={style.title}>{val.title.slice(0, 40)}...</h1>
                      </Link>
                      <div className={style.date}>
                        <i class='fas fa-calendar-days'></i>
                        <label>{val.date}</label>
                      </div>
                    </div>
                </div>
              )
            })}
    </Slider>
  );
};

export default AutoSlider;