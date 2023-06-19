import React, { useEffect } from "react";
import style from "./LastNews.module.css";
import Card from "./Card";


const LastNews = ({ allActivity, allTypes }) => {


  return (
    <>
      <section className={style.hero}>
        <div className={style.container}>
          {allActivity?.map((i) => {
            return (
              <Card
                key={i.id}
                id={i.id}
                name={i.name}
                date={i.date}
                img={i.img}
                allTypes={i.allTypes}
              
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default LastNews;
