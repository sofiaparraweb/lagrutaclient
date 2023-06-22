import style from "./SideBar.module.css"
import Filter from "../Filtros/Filter"
import {AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const SideBar = ({ setCurrentPage }) =>{

  return (
    <div className={style.sidebarContenedor}>
        <span className={style.Changuito}>
          <Link to="/cart">
            <AiOutlineShoppingCart size={30} />
            <p className={style.NumeroChango}>0</p>
          </Link>
        </span>
        <div className={style.ContenedorFiltroOrden}>
          <Filter setCurrentPage={setCurrentPage}/>
        </div>
    </div>
  )
}

export default SideBar;