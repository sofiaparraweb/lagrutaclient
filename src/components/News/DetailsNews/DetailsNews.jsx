import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getActiId, cleanDetail } from "../../../Redux/actions.jsx";

import Side from "../SideBar/side/Side";
import AutoSlider from "../Homes/NewsCarrousel/AutoSlider.jsx";
import LikeButton from "./LikeButton";

import style from "./DetailsNews.module.css";

export default function DetailsNews() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.activityDetail);
// console.log(details)

  useEffect(() => {
    dispatch(getActiId(id));
    return () => dispatch(cleanDetail)
  }, []);

  return (
    <main className={style.main}>
          <AutoSlider />
          <Link to="/home">
          <button type="submit">
            BackHome
          </button>
          </Link>
          <div className={style.containerDetail}>
            <section className={style.details}>
              <img src={details.img} alt="" />
              <div className={style.row}>
                <div className={style.time}>
                  <i class="fas fa-calendar-days"></i>
                  <label>{details.date}</label>
                </div>
                <div className={style.social}>
                  <i className="fab fa-facebook-f"></i>
                  <span>Compartir</span>
                </div>
                <div className={style.social1}>
                  <span>
                    <LikeButton />
                  </span>
                </div>
              </div>
                    <h1 className={style.title}>{details.name}</h1>
              <div className={style.ddescription}>
                      <p>{details.description}</p>
                      <p>{details.description}</p>
                      </div>
                      </section> 
                          <section className={style.sideContent}>
              <Side />
            </section>
      </div>
  
      </main> 
  );
}
