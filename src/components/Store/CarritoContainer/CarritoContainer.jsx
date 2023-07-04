import Carrito from "../../../views/Tienda/Carrito/Carrito";
import style from "./CarritoContainer.module.css";
import { useEffect } from 'react';
import { getCarrito } from '../../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";

const CarritoContainer = () => {

    const dispatch = useDispatch();
    const Cart = useSelector((state) => state.LocalPersist.Carrito.Products);
    const userId = useSelector(state => state.LocalPersist.userInfo.id);
    // const Cart = useSelector((state) => state.LocalPersist.allProducts);
    console.log(Cart)

    useEffect(() => { 
        dispatch(getCarrito(userId));
    },[dispatch]);
      
    return (
        <div className={style.TiendaItemsContainerCART}> 
            {Cart?.length === 0 ? (
                <>
                    <p className={style.MensajeCartVacio}>Tu carrito está vacío, volvé a la tienda para colaborar con La Gruta</p>
                    <Link to="/tienda" className={style.BtnVolverTienda}>tienda</Link>
                </>
                ) : (
                    <>
                    <h1 className={style.ContenedorCartProductosTitulo}>Productos seleccionados</h1>
                    {Cart?.length > 0 && Cart?.map((prod) => {
                        return (
                            <Carrito
                                key={prod.id} 
                                id={prod.id}
                                name={prod.name}
                                image={prod.image}
                                price={prod.price}
                                stock={prod.stock}
                                quantityProd={prod.Cart_Products.quantity}
                            />
                        ); 
                    })}
                    </>
                )}
        </div>
    );
}

export default CarritoContainer;