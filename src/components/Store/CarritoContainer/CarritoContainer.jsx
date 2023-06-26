import Carrito from "../../../views/Tienda/Carrito/Carrito";
import style from "./CarritoContainer.module.css";
import { useEffect } from 'react';
import { getAllProducts } from '../../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux'

const CarritoContainer = () => {

    const CarritoCompra = useSelector(state=>state.allProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
      },[]);
      
    return (
        <div className={style.TiendaItemsContainerCART}> 
            <h1 className={style.ContenedorCartProductosTitulo}>Productos seleccionados</h1>
            {CarritoCompra.length > 0 && CarritoCompra?.map((prod) => {
                return (
                    <Carrito
                        key={prod.id}
                        id={prod.id}
                        image={prod.image}
                        name={prod.name}
                        price={prod.price}
                        stock={prod.stock}
                        quantity={prod.quantity}
                    />
                ); 
            })}
        </div>
    );
}

export default CarritoContainer;