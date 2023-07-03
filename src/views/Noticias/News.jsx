import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./News.module.css"
import LastNews from "../../components/News/HeaderNews/LastNews.jsx";
import Homes from "../../components/News/Homes/Homes.jsx";


import { getAllActivity } from "../../Redux/actions.jsx"


export default function News() {

const dispatch = useDispatch();
const allActivity = useSelector(state => state.LocalPersist.allActivity);


useEffect(() => {
  dispatch(getAllActivity());
}, [dispatch]);



  return (<>
    <div className={style.News}>
      <LastNews allActivity={allActivity} />
      <Homes />
    </div>
      </>
  );
}
