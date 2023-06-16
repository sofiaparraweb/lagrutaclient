import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { hero } from "../../../dummyData";
import Side from "../SideBar/side/Side";
import AutoSlider from "../Homes/NewsCarrousel/AutoSlider.jsx";
import LikeButton from "./LikeButton";

import style from "./DetailsNews.module.css"


const DetailsNews = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    const item = hero.find((item) => item.id === parseInt(id))
    window.scrollTo(0, 0)
    if (item) {
      setItem(item)
    }
  }, [id])

  return (
    <>
      {item ? (
        <main className={style.main}>
            <AutoSlider/>
          <div className='container'>
            <section className={style.details}>
            <img src={item.cover} alt='' />
            <div className={style.row}>
             <div className={style.time}>
             <i class='fas fa-calendar-days'></i>
                <label>{item.time}</label>
              </div> 
              <div className={style.social}>
                  <i className='fab fa-facebook-f'></i>
                  <span>Compartir</span>
              </div> 
              <div className={style.social1}>
                  <span><LikeButton/></span> 
              </div>
              </div>

              <h1 className={style.title}>{item.title}</h1>
              <div className={style.ddescription}>
                {item.desc.map((val) => {
                  return (
                    <>
                      <p>{val.para1}</p>
                      <p>{val.para2}</p>
                    </>
                  )
                })}
              </div>
              {item.desc.map((val) => (
                <p>{val.para3}</p>
              ))}

              <div className={style.ddescription}>
                {item.details.map((data) => {
                  return (
                    <>
                      <h1>{data.title}</h1>
                      <p>{data.para1}</p>
                    </>
                  )
                })}
              </div>

              <div className={style.quote}>
                <i className='fa fa-quote-left'></i>
                {item.details.map((data) => (
                  <p>{data.quote}</p>
                ))}
              </div>

              <div className={style.ddescription}>
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para2}</p>
                      <p>{data.para3}</p>
                    </>
                  )
                })}
              </div>
            </section>
            <section className='sideContent'>
              <Side />
            </section>
          </div>
        </main>
      ) : (
        <h1>not found</h1>
      )}
    </>
  )
}



export default DetailsNews;