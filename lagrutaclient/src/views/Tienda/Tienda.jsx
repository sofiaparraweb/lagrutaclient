import { useEffect } from 'react';
import { getAllProducts } from '../../Redux/actions';
// import Carrito from "../../components/Carrito/Carrito";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import TiendaItemsContenedor from "../../components/Store/TiendaItemsContenedor/TiendaItemsContenedor";
import style from "./Tienda.module.css";
import { useDispatch, useSelector } from 'react-redux'

const Tienda = () => {

//   const allProducts= [{
//     id: 1, 
//     name: "remera blanca", 
//     price: 100, 
//     image: "https://afaar.vtexassets.com/arquivos/ids/155903-1600-auto?v=638113837487800000&width=1600&height=auto&aspect=true",
//     type: "Remera",
//     description: "remera blanca",
//     stock: 5,
// },
// {
//     id: 2, 
//     name: "remera negra", 
//     price: 100, 
//     image: "https://afaar.vtexassets.com/arquivos/ids/155904-1600-auto?v=638113839210270000&width=1600&height=auto&aspect=true",
//     type: "Remera",
//     description: "remera negra",
//     stock: 6,
// },
// {
//     id: 3, 
//     name: "remera gris", 
//     price: 100, 
//     image: "https://afaar.vtexassets.com/arquivos/ids/155902-1600-auto?v=638113835917000000&width=1600&height=auto&aspect=true",
//     type: "Remera",
//     description: "remera gris",
//     stock: 3,
// },
// {
//     id: 4, 
//     name: "remera roja", 
//     price: 100, 
//     image: "https://aedlp.vtexassets.com/arquivos/ids/156138-500-auto?v=1772979721&width=500&height=auto&aspect=true",
//     type: "Remera",
//     description: "remera roja",
//     stock: 3,
// },
// {
//     id: 5, 
//     name: "remera verde", 
//     price: 100, 
//     image: "https://http2.mlstatic.com/D_NQ_NP_926685-MLA42160565643_062020-O.webp",
//     type: "Remera",
//     description: "remera verde",
//     stock: 3,
// },
// {
//     id: 6, 
//     name: "remera amarilla", 
//     price: 100, 
//     image: "https://http2.mlstatic.com/D_NQ_NP_803855-MLA46308276931_062021-O.webp",
//     type: "Remera",
//     description: "remera amarilla",
//     stock: 3,
// },
// {
//     id: 7, 
//     name: "gorra", 
//     price: 150, 
//     image: "https://http2.mlstatic.com/D_NQ_NP_2X_930720-MLA48164080171_112021-F.webp",
//     type: "Gorra",
//     description: "gorra nike",
//     stock: 3,
// }]

  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <div className={style.tienda}>
        <TiendaItemsContenedor products={allProducts} />
      </div>
      <Footer />
    </div>
  );
}

export default Tienda;