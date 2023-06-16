import React from "react";
import { Link } from "react-router-dom";
import style from "./LastNews.module.css";

const Card = ({ item: { id, cover, catgeory, title, time } }) => {
  return (
    <>
      <div className={style.box}>
        <div className="img">
          <img src={cover} alt="" />
        </div>
        <div className={style.text}>
          <span className={style.category}>{catgeory}</span>
          <Link to={`/Noticias/${id}`}>
            <h1 className="titleBg">{title}</h1>
          </Link>
          <div className={style.date}>
            <i class="fas fa-calendar-days"></i>
            <label>{time}</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
