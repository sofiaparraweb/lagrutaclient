import React from "react";

import style from "./News.module.css"
import LastNews from "../../components/News/HeaderNews/LastNews.jsx";
import Homes from "../../components/News/Homes/Homes.jsx";


export default function News() {
  return (
    <div className={style.News}>
      <LastNews />
      <Homes />
    </div>
  );
}
