import Carrito from "../../../views/Tienda/Carrito/Carrito";
import style from "./CarritoContainer.module.css";
import { useEffect } from 'react';
import { getAllProducts } from '../../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";

const CarritoContainer = () => {

    //const Cart = useSelector(state=>state.allProducts);
    const Cart = useSelector(state=>state.LocalPersist.Carrito);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
      },[]);
      
    return (
        <div className={style.TiendaItemsContainerCART}> 
            {Cart.length === 0 ? (
                <>
                    <p className={style.MensajeCartVacio}>Tu carrito está vacío, volvé a la tienda para colaborar con La Gruta</p>
                    <Link to="/tienda" className={style.BtnVolverTienda}>tienda</Link>
                </>
                ) : (
                    <>
                    <h1 className={style.ContenedorCartProductosTitulo}>Productos seleccionados</h1>
                    {Cart.length > 0 && Cart?.map((prod) => {
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
                    </>
                )}
        </div>
    );
}

export default CarritoContainer;