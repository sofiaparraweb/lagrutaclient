import React from "react";
import { Link } from "react-router-dom";
import style from "./LastNews.module.css";

const Card = ({ id, img, allTypes, name, date }) => {
  return (
    <>
      <div className={style.box}>
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className={style.text}>
          {allTypes?.map((t, index) => {
            return (
              <span 
         
              className={style.category}>{t.name}</span>
            );
          })}      
          <Link to={`/Noticias/${id}`}>
          <h1 className="titleBg">{name}</h1>
        </Link>
          <div className={style.date}>
            <i className="fas fa-calendar-days"></i>
            <label>{date}</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
