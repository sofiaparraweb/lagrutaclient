import style from "./SideBar.module.css"
import Filter from "../Filtros/Filter"
import {AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from "react-hot-toast";

const SideBar = ({ setCurrentPage }) =>{

  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const Carrito = useSelector(state=>state.LocalPersist.Carrito)

  const handleCartClick = () => {
    if (isAuthenticated) {
      navigate('/cart');
    } else {
      // El usuario no está autenticado, muestra un mensaje de alerta.
      toast.error('Debe iniciar sesión para acceder al carrito.');
    }
  };
 
  return (
    <div className={style.sidebarContenedor}>
      <Toaster />
      <span className={style.Changuito}>
        <button onClick={handleCartClick} >
          <AiOutlineShoppingCart size={30} />
          {isAuthenticated ? <sup className={style.NumeroChango}>{Carrito?.length}</sup> : <sup className={style.NumeroChango}>0</sup>}         
        </button>
      </span>
      <div className={style.ContenedorFiltroOrden}>
        <Filter setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  )
}

export default SideBar;