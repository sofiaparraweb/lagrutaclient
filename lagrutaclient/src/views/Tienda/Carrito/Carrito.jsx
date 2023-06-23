import { getCarrito, addToCart, deleteAllCarrito, deleteCarrito, amountCarrito } from "../../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Image , Card, HStack, Text, Heading, CardBody } from '@chakra-ui/react';
import {AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import style from "./Carrito.module.css";

const Carrito = ({ id, name, image, price, stock }) => {

    const dispatch = useDispatch();
    // const CarritoProductos = useSelector((state) => state.allProductos);
    // const Carrito = useSelector((state) => state.Carrito);

    const handleAddToCart = () => {
      dispatch(addToCart());
    };
    
    const handleDeleteFromCart = () => {
      dispatch(deleteCarrito(userId, product.id)); // Revisar el user id
    };

    const handleDeleteCart = () =>{
      dispatch(deleteAllCarrito());
    }

    return (
      <div className={style.ContenedorTiendaCART}>
        <div className={style.TiendaSideBarCART}>
          <div className={style.sidebarContenedorCART}>
            <span className={style.ChanguitoCART}>
              <AiOutlineShoppingCart size={30} /> 
              <p className={style.NumeroChangoCART}>0</p>
            </span>
            <div className={style.ContenedorVaciarCarro}>
              <div className={style.VaciarCarrito}>
                <p>Vaciar carrito</p>
              </div>
              <button onClick={handleDeleteCart} className={style.ButtonVaciarCarro}>x</button>
            </div>
          </div>
        </div>
        <div className={style.ContenedorCartProductos}>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            backgroundColor='rgb(241, 241, 241)'
          >
            <Image 
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src={image}
              alt='product-image'
              width='120px'
              height='120px'
              marginRight='80px'
            />
            <HStack>
              <CardBody width='300px'>
                <Heading size='sm' >Nombre</Heading>
                <Text py='1' marginRight='20px' >
                  {name}
                </Text>
              </CardBody>
              <CardBody>
                <Heading size='sm' textAlign='center'>Precio</Heading>
                <Text py='3' textAlign='center'>
                  ${price}
                </Text>
              </CardBody>
              <CardBody>
                <Heading size='sm' textAlign='center'>Cantidad</Heading>
                <Text py='3' className={style.ContenedorBotonesCart}>
                  <button className={style.ButtonsSumaResta} onClick={handleDeleteFromCart} value="less" >-</button>
                    5
                  <button className={style.ButtonsSumaResta} onClick={handleAddToCart} value="add" >+</button>
                </Text>
              </CardBody>
              <CardBody>
                <Heading size='sm' textAlign='center'>Precio Total</Heading>
                <Text py='3' textAlign='center'>
                  ${price}
                </Text>
              </CardBody>
              <CardBody>
                <Heading size='sm' textAlign='center' >Pagar</Heading>
                <Text py='3'>
                  <Link to="/checkout" className={style.ButtonPagarCart} value="pagar" >Checkout</Link>
                </Text>
              </CardBody>
            </HStack>
          </Card>
        </div>
      </div>
    )
}

export default Carrito;