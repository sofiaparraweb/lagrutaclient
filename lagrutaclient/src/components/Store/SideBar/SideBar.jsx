import style from "./SideBar.module.css"
import {AiOutlineShoppingCart} from "react-icons/ai";

const SideBar = () =>{
  return (
    <div className={style.sidebarContenedor}>
        <h1>FILTRAR</h1>
        <hr color="white"></hr>
        <h1>ORDENAR</h1>
        <hr color="white"></hr>
        <div className={style.Changuito}>
            <AiOutlineShoppingCart className={style.Icon} />
        </div>
    </div>
  )
}

export default SideBar;