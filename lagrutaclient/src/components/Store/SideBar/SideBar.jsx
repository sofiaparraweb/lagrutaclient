import style from "./SideBar.module.css"
import Filter from "../Filtros/Filter"
import {AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBar = ({ setCurrentPage }) =>{

  const Carrito = useSelector(state=>state.Carrito)
 
  return (
    <div className={style.sidebarContenedor}>
        <span className={style.Changuito}>
          <Link to="/cart">
            <AiOutlineShoppingCart size={30} /> 
            <sup className={style.NumeroChango}>Carrito.length</sup>
          </Link>
        </span>
        <div className={style.ContenedorFiltroOrden}>
          <Filter setCurrentPage={setCurrentPage}/>
        </div>
    </div>
  )
}

export default SideBar;