// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllProducts } from '../../Redux/actions';
//import Carrito from "../../components/Carrito/Carrito";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import TiendaItemsContenedor from "../../components/Store/TiendaItemsContenedor/TiendaItemsContenedor";
import style from "./Tienda.module.css";

const Tienda = () => {

  const allProducts= [{
    id: 1, 
    name: "remera blanca", 
    price: 100, 
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsublitextil.com.ar%2Fproductos%2Fremera-adulto-sublimable%2F&psig=AOvVaw3zq9FNNJeW4JVGF5uAJXUF&ust=1686788224614000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKicyvm9wf8CFQAAAAAdAAAAABAE",
    description: "remera blanca",
    stock: 5,
},
{
    id: 2, 
    name: "remera negra", 
    price: 100, 
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpiet.com.ar%2Fproductos%2Fremera-negra-cuadrado-blanco%2F&psig=AOvVaw01WCnbXLC6A1z68EE_qa3X&ust=1686788342790000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCmlrK-wf8CFQAAAAAdAAAAABAE",
    description: "remera negra",
    stock: 6,
},
{
    id: 3, 
    name: "remera azul", 
    price: 100, 
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpda.com.ar%2Fproductos%2Fremera-azul%2F&psig=AOvVaw3tdRD4BLSNxc9q0ZYQd4Kc&ust=1686788454076000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNin8ea-wf8CFQAAAAAdAAAAABAE",
    description: "remera azul",
    stock: 3,
},
{
    id: 4, 
    name: "remera roja", 
    price: 100, 
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farticulo.mercadolibre.com.ar%2FMLA-690151182-remera-roja-lisa-para-trabajo-_JM&psig=AOvVaw2kPfy10QxLXacyQIVrASPn&ust=1686788507428000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjGuIC_wf8CFQAAAAAdAAAAABAE",
    description: "remera roja",
    stock: 3,
},
{
    id: 5, 
    name: "remera verde", 
    price: 100, 
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpda.com.ar%2Fproductos%2Fremera-verde%2F&psig=AOvVaw0ZmCzlyza6tmOvdf-AXDGT&ust=1686788550130000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjx8JS_wf8CFQAAAAAdAAAAABAE",
    description: "remera verde",
    stock: 3,
},
{
    id: 6, 
    name: "remera amarilla", 
    price: 100, 
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Flistado.mercadolibre.com.ar%2Fremera-amarilla&psig=AOvVaw0ni8ItFGy1StZ5GiWj0y-5&ust=1686788605919000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJCbmbG_wf8CFQAAAAAdAAAAABAE",
    description: "remera amarilla",
    stock: 3,
},
{
    id: 7, 
    name: "gorra", 
    price: 150, 
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.redsportonline.com.ar%2Fgorra-nike-l91-novelty-cap-unisex-cu9892-025%2Fp&psig=AOvVaw1iOvXhX7F-134rtPW_-ao0&ust=1686788389600000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCkqMi-wf8CFQAAAAAdAAAAABAE",
    description: "gorra nike",
    stock: 3,
}]

  // const dispatch = useDispatch();
  // const allProducts = useSelector(state => state.allProducts);

  // useEffect(() => {
  //   dispatch(getAllProducts());
  // }, [dispatch]);

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