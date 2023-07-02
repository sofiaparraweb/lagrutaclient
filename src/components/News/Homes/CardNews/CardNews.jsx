import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import HeadingMx from "../../Heading/HeadingMx";
import style from "./CardNews.module.css";

const CardNews = () => {

  const allActivity = useSelector(state => state.LocalPersist.allActivity);


  return (
    <>
      <section className={style.popularPost}>
        <HeadingMx title="Más noticias" />
        <div className={style.row}>
        {allActivity.map((news) => (
           <div className={style.box}>
                <div key={news.id} className={style.items}>
                  <div className={style.shadow}>
                    <div className={style.images}>
                      <div className={style.img}>
                        <img src={news.img} alt="" />
                      </div>
                    </div>
                    <div className={style.text}>
                    <Link to={`/Noticias/${news.id}`}>
                    <h1 className={style.title}>{news.name.slice(0, 40)}...</h1>
                      </Link>
                      <div className={style.date}>
                        <i class="fas fa-calendar-days"></i>
                        <label>{news.date}</label>
                      </div>
                      <p className={style.desc}>{news.description.slice(0, 140)}...</p>
                    </div>
                  </div>
                </div>
                </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CardNews;
