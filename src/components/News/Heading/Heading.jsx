import React from "react"
import style from "./Heading.module.css";

const Heading = ({ title }) => {
  return (
    <>
      <div className={style.headingms}>
        <h6 className={style.h6ms}>{title}</h6>
      </div>
    </>
  )
}

export default Heading
