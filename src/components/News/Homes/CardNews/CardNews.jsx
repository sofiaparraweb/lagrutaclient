import React, { useState } from "react";
import HeadingMx from "../../Heading/HeadingMx";
import style from "./CardNews.module.css";

const CardNews = () => {

  const allActivity = useSelector(state => state.allActivity);

  return (
    <>
      <section className={style.popularPost}>
        <HeadingMx title="Más noticias" />
        <div className={style.row}>
          {allActivity.length && allActivity
          .map((val, index) => {
            return (
              <div key={index} className={style.box}>
                <div className={style.items}>
                  <div className={style.shadow}>
                    <div className={style.images}>
                      <div className={style.img}>
                        <img src={val.img} alt="" />
                      </div>
                    </div>
                    <div className={style.category}>
                          {val.catgeory}
                        </div>
                    <div className={style.text}>
                      <h1 className={style.title}>
                        {val.name.slice(0, 40)}...
                      </h1>
                      <div className={style.date}>
                        <i class="fas fa-calendar-days"></i>
                        <label>{val.date}</label>
                      </div>
                      <p className={style.desc}>{val.desc.slice(0, 140)}...</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CardNews;
