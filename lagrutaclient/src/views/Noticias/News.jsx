import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./News.module.css"
import LastNews from "../../components/News/HeaderNews/LastNews.jsx";
import Homes from "../../components/News/Homes/Homes.jsx";


import  { getActivity, getTypeActi, getActiId } from "../../Redux/actions.jsx"




export default function News() {

const dispatch = useDispatch();
const allActi = useSelector ((state) => state.activity); 
const typesActi = useSelector ((state) => state.activityTypes)

  return (
    <div className={style.News}>
      <LastNews />
      <Homes />
    </div>
  );
}
