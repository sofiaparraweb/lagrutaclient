// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllProducts } from '../../Redux/actions';
// import Carrito from "../../components/Carrito/Carrito";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import TiendaItemsContenedor from "../../components/Store/TiendaItemsContenedor/TiendaItemsContenedor";
import style from "./Tienda.module.css";

const Tienda = () => {

  // const dispatch = useDispatch();
  // const allProducts = useSelector(state => state.allProducts);

  // useEffect(() => {
  //   dispatch(getAllProducts());
  // }, [dispatch]);

  const allProducts = [{
    id: 1, 
    name: "remera blanca", 
    image: "https://afaar.vtexassets.com/arquivos/ids/155903-1600-auto?v=638113837487800000&width=1600&height=auto&aspect=true",
    price: 100, 
    description: "remera blanca",
    stock: 5,
},
{
    id: 2, 
    name: "remera negra", 
    image: "https://afaar.vtexassets.com/arquivos/ids/155904-1600-auto?v=638113839210270000&width=1600&height=auto&aspect=true",
    price: 100, 
    description: "remera negra",
    stock: 6,
},
{
    id: 3, 
    name: "remera gris", 
    image: "https://afaar.vtexassets.com/arquivos/ids/155902-1600-auto?v=638113835917000000&width=1600&height=auto&aspect=true",
    price: 100, 
    description: "remera gris",
    stock: 3,
},
{
    id: 4, 
    name: "remera roja",
    image: "https://afaar.vtexassets.com/arquivos/ids/156138-1600-auto?v=638204547362430000&width=1600&height=auto&aspect=true", 
    price: 100, 
    description: "remera roja",
    stock: 3,
},
{
    id: 5, 
    name: "remera verde", 
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_926685-MLA42160565643_062020-F.webp",
    price: 100, 
    description: "remera verde",
    stock: 3,
},
{
    id: 6, 
    name: "remera amarilla", 
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_803855-MLA46308276931_062021-F.webp",
    price: 100, 
    description: "remera amarilla",
    stock: 3,
},
{
    id: 7, 
    name: "gorra", 
    image: "https://piet.com.ar/wp-content/uploads/PIET-Cap-Trucker-00.jpg",
    price: 150, 
    description: "gorra nike",
    stock: 3,
}]

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