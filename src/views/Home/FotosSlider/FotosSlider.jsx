import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import style from "./FotosSlider.module.css";
import img1 from "../../../assets/ninasonriendo.jpg";
import img2 from '../../../assets/niñamochila.jpg';
import img3 from '../../../assets/niñofeliz.jpg';
import img4 from '../../../assets/niñosmisa.jpg';
import img5 from '../../../assets/nino.jpg'

const imagePaths = [
img1,
img2,
img3,
img4,
img5
];

const FotosSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

const interval = setInterval(() => {
      slider.slickNext();
    }, 3000);

    return () => {
      clearInterval(interval);
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
      {imagePaths.map((path, index) => (
        <div key={index} className={style.ImagenesCarrusel}>
          <img src={path} alt="nino" />
        </div>
      ))}
    </Slider>
  );
};

export default FotosSlider;
