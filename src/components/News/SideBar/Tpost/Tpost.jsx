import React from "react";
import { tpost } from "../../../../dummyData";
import Heading from "../../Heading/Heading";
import style from "./Tpost.module.css";

const Tpost = () => {
  return (
    <>
      <section className={style.tpost}>
        <Heading title="Instagram" />
        {tpost.map((val, index) => {
          return (
            <div key={index} className={style.box}>
            <div className={style.flexSB}>
              <div className={style.img}>
                <img src={val.cover} alt="" />
              </div>
              <div className={style.text}>
                <h1 className={style.title}>{val.title.slice(0, 35)}...</h1>
                <span className={style.date}>a year ago</span>
              </div>
            </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Tpost;
