import style from "./SideBar.module.css"
import {AiOutlineShoppingCart, AiOutlineFilter, AiOutlineOrderedList} from "react-icons/ai";

const SideBar = () =>{
  return (
    <div className={style.sidebarContenedor}>
        <div className={style.FILTRAR}>
          <AiOutlineFilter className={style.Icon}/>
          <h1>FILTRAR</h1>
        </div>
        <hr color="white"></hr>
        <div className={style.FILTRAR}>
          <h1>ORDENAR</h1>
        </div>
        <hr color="white"></hr>
        <div className={style.Changuito}>
            <AiOutlineShoppingCart className={style.Icon} />
        </div>
    </div>
  )
}

export default SideBar;