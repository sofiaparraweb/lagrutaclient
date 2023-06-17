import style from "./SideBar.module.css"
import {AiOutlineShoppingCart, AiOutlineFilter, AiOutlineOrderedList} from "react-icons/ai";

const SideBar = () =>{
  return (
    <div className={style.sidebarContenedor}>
        <div className={style.ContenedorFiltroOrden}>
          <AiOutlineFilter className={style.Icon1}/>
          <h1 className={style.FiltrarOrdenarTexto}>FILTRAR</h1>
        </div>
        <hr color="white"></hr>
        <div className={style.ContenedorFiltroOrden}>
          <AiOutlineOrderedList className={style.Icon1}/>
          <h1 className={style.FiltrarOrdenarTexto}>ORDENAR</h1>
        </div>
        <hr color="white"></hr>
        <div className={style.Changuito}>
            <AiOutlineShoppingCart className={style.Icon} />
        </div>
    </div>
  )
}

export default SideBar;