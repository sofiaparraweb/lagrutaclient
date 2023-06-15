import React, { useState } from "react"
import { hero } from "../../../dummyData.js"
import style from "./LastNews.module.css";
import Card from "./Card"

const LastNews = () => {
  const [items, setIems] = useState(hero)

  return (
    <>
      <section className={style.hero}>
        <div className={style.container}>
          {items.map((item) => {
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}


export default LastNews;
