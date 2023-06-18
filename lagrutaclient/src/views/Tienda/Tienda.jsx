import { useEffect } from 'react';
import { getAllProducts } from '../../Redux/actions';
import NavBar from "../../components/NavBar/NavBar";
import TiendaItemsContenedor from "../../components/Store/TiendaItemsContenedor/TiendaItemsContenedor";
import style from "./Tienda.module.css";
import { useDispatch, useSelector } from 'react-redux'
import Order from "../../components/Store/Order/Order"

const Tienda = () => {

  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Order />
      <div className={style.tienda}>
        <TiendaItemsContenedor products={allProducts} />
      </div>
    </div>
  );
}

export default Tienda;