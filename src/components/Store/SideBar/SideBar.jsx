
import style from "./SideBar.module.css";
import Filter from "../Filtros/Filter";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getCarrito } from "../../../Redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import { auth } from "../../../Firebase/Firebase"; // Import the Firebase authentication instance

const SideBar = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Carrito = useSelector(state => state.LocalPersist.Carrito.Products);
  const userId = useSelector(state => state.LocalPersist.userProfile.id);
  const user = auth.currentUser;

  useEffect(() => {
    dispatch(getCarrito(userId));
  }, [userId]);

  const handleCartClick = () => {
    if (user) {
      navigate('/cart');
    } else {
      toast.error('Debe iniciar sesión para acceder al carrito.');
    }
  };

  return (
    <div className={style.sidebarContenedor}>
      <Toaster />
      <span className={style.Changuito}>
        <button onClick={handleCartClick}>
          <AiOutlineShoppingCart size={30} />
          {user ? (
            <p className={style.NumeroChango}>{Carrito?.length || 0}</p>
          ) : (
            <p className={style.NumeroChango}>0</p>
          )}
        </button>
      </span>
      <div className={style.ContenedorFiltroOrden}>
        <Filter setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default SideBar;
