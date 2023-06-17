import React from "react";
import { ppost } from "../../../../dummyData";
import HeadingMx from "../../Heading/HeadingMx";

import style from "./CardNews.module.css";

const CardNews = () => {
  return (
    <>
      <section className={style.popularPost}>
        <HeadingMx title="Más noticias" />
        <div className={style.row}>
          {ppost
          .map((val) => {
            return (
              <div className={style.box}>
                <div className={style.items}>
                  <div className={style.shadow}>
                    <div className={style.images}>
                      <div className={style.img}>
                        <img src={val.cover} alt="" />
                      </div>
                    </div>
                    <div className={style.category}>
                  
                          <span>{val.catgeory}</span>
                        
                        </div>
                    <div className={style.text}>
                      <h1 className={style.title}>
                        {val.title.slice(0, 40)}...
                      </h1>
                      <div className={style.date}>
                        <i class="fas fa-calendar-days"></i>
                        <label>{val.date}</label>
                      </div>
                      <p className="desc">{val.desc.slice(0, 140)}...</p>
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
