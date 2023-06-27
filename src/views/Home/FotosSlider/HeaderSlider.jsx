import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { galleryHead } from "../../../dummyData";
import style from "./HeaderSlider.module.css";

const Headerslider = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sliderRef = useRef(null);
  useEffect(() => {
    const slider = sliderRef.current;

    const interval = setInterval(() => {
      slider.slickNext();
    }, 9000);

    return () => {
      clearInterval(interval); // Limpia el intervalo al desmontar el componente
    };
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className={style.GalleryHome} ref={sliderRef} {...settings}>
      {galleryHead.map((val) => {
        return (
          <div className={style.ImagenesCarrusel}>
            <img src={val.image} alt="" />
            <h2 className={style.sectionTitle}> {val.title} </h2>
            <Link to="/about" onClick={handleClick}>
              {" "}
              <button className={style.buttoninfo}> Únete</button>
            </Link>
          </div>
        );
      })}
    </Slider>
  );
};

export default Headerslider;
