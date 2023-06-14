import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import style from "./Tienda.module.css";

const Tienda = () => {
  return (
    <div>
      <NavBar />
      <div>
        <h1 className={style.tienda}>Tiendaaaaaaaa</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Tienda;


// //import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// //import { getAllProducts } from '../../Redux/actions';
// import TiendaItemsContenedor from "../../components/TiendaItems/TiendaItemsContenedor";
// import Carrito from "../../components/Carrito/Carrito";

// const Tienda = () => {
//   //const dispatch = useDispatch();
//   const allProducts = useSelector(state => state.allProducts);

// //   useEffect(() => {
// //     dispatch(getAllProducts());
// //   }, [dispatch]);

//   return (
//     <div>
//         <h2>Tienda</h2>
//         <div>
//             <TiendaItemsContenedor products={allProducts}/>
//         </div>
//         <Carrito />
//         
//     </div>
//   );
// };