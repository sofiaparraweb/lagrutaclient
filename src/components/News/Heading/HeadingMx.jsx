import React from "react"
import style from "./Heading.module.css";

const HeadingMx = ({ title }) => {
  return (
    <>
      <div className={style.headingMx}>
        <h2 className={style.h6Mx}>{title}</h2>
      </div>
    </>
  )
}

export default HeadingMx;
