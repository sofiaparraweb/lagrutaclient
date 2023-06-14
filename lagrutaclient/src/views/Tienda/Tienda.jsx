//import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { getAllProducts } from '../../Redux/actions';
import TiendaItemsContenedor from "../../components/TiendaItems/TiendaItemsContenedor";
import Carrito from "../../components/Carrito/Carrito";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const Tienda = () => {
  //const dispatch = useDispatch();
  const allProducts = useSelector(state => state.allProducts);

//   useEffect(() => {
//     dispatch(getAllProducts());
//   }, [dispatch]);

  return (
    <div>
        <NavBar />
        <h2>Tienda</h2>
        <div>
            <TiendaItemsContenedor products={allProducts}/>
        </div>
        <Carrito />
        <Footer />
    </div>
  );
};

export default Tienda;