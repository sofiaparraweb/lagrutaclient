import style from "./SideBar.module.css"
import Filter from "../Filtros/Filter"
import {AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const SideBar = ({ setCurrentPage }) =>{

  const Carrito = useSelector(state=>state.Carrito)
 
  return (
    <div className={style.sidebarContenedor}>
        <span className={style.Changuito}>
        {/* {isAuthenticated ? ( */}
          <Link to="/cart">
            <AiOutlineShoppingCart size={30} /> 
            <sup className={style.NumeroChango}>{Carrito.length}</sup>
          </Link>
        {/* ) : null} */}
        </span>
        <div className={style.ContenedorFiltroOrden}>
          <Filter setCurrentPage={setCurrentPage}/>
        </div>
    </div>
  )
}

export default SideBar;