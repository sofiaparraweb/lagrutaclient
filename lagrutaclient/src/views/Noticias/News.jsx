import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./News.module.css"
import LastNews from "../../components/News/HeaderNews/LastNews.jsx";
import Homes from "../../components/News/Homes/Homes.jsx";
import Footer from "../../components/Footer/Footer";

import { getAllActivity } from "../../Redux/actions.jsx"
import { FaCommentsDollar } from "react-icons/fa";


export default function News() {

const dispatch = useDispatch();
const allActivity = useSelector(state => state.allActivity);
/* const allTypes = useSelector(state => state.activityTypes);
 */

useEffect(() => {
  dispatch(getAllActivity());
}, [dispatch]);

/* useEffect(() => {
  dispatch(getTypeActi());
}, [dispatch]);
 */

  return (<>
    <div className={style.News}>
      <LastNews allActivity={allActivity} /* allTypes={allTypes} */ />
      <Homes />
    </div>
      </>
  );
}
