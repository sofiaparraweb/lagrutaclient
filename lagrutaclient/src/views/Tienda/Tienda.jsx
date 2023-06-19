import { useEffect } from 'react';
import { getAllProducts } from '../../Redux/actions';
import NavBar from "../../components/NavBar/NavBar";
import TiendaItemsContenedor from "../../components/Store/TiendaItemsContenedor/TiendaItemsContenedor";
import style from "./Tienda.module.css";
import { useDispatch, useSelector } from 'react-redux'
import Order from "../../components/Store/Order/Order"
import Search from "../../components/Store/Search/Search"

const Tienda = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <div className={style.tienda}>
        <div className={style.SearchOrder}>
          <Search />
          <Order />
        </div>
        <TiendaItemsContenedor products={products} />
      </div>
    </div>
  );
}

export default Tienda;