import style from "./SideBar.module.css"
import Filter from "../Filtros/Filter"
import {AiOutlineShoppingCart } from "react-icons/ai";

const SideBar = () =>{
  return (
    <div className={style.sidebarContenedor}>
        <div className={style.Changuito}>
          <AiOutlineShoppingCart className={style.Icon} />
        </div>
        <div className={style.ContenedorFiltroOrden}>
          <Filter />
        </div>
    </div>
  )
}

export default SideBar;