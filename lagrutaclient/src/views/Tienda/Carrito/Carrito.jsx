import { getCarrito, addToCart, deleteAllCarrito, deleteCarrito } from "../../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Image , Card, HStack, Text, Heading, CardBody } from '@chakra-ui/react';
import {AiOutlineShoppingCart } from "react-icons/ai";
//import { Link } from 'react-router-dom';
import axios from "axios";
import style from "./Carrito.module.css";
import { Toaster, toast } from "react-hot-toast";

const Carrito = ({ id, name, image, price, stock, quantity }) => {

  const dispatch = useDispatch();
  const CarritoProductos = useSelector((state) => state.allProductos);
  const Cart = useSelector((state) => state.Carrito);

  let subTotalProd = Cart.map((el) => el.price);
  let subtotal = Cart.reduce((acc, el) => acc + el.price, 0);
  let servicio = subtotal * 0.10;
  let total = subtotal + servicio;

  const handleAddToCart = (name) => {
    if(quantity<stock) {
      dispatch(addToCart(name));
      toast.success("Producto agregado al carrito", {
        duration: 3000
      })
    } else {
      toast.error("La cantidad supera el stock disponible", {
        duration: 3000
      })    
    }
  }

  // const delRemoveCart = (name, all = false) => {
  //   if (all) {
  //     dispatch(handleDeleteCart(name));
  //     window.localStorage.removeItem("Cart");
  //   } else {
  //     dispatch(handleDeleteFromCart(name));
  //     window.localStorage.removeItem("Cart");
  //   }
  // };
    
  const handleDeleteFromCart = (user_id, product_id) => {
    dispatch(deleteCarrito(user_id, product_id));
    toast.success("Producto eliminado del carrito", {
      duration: 3000
    })
  };

  const handleDeleteCart = () =>{
    dispatch(deleteAllCarrito());
    toast.success("Carrito vaciado correctamente", {
      duration: 3000
    })
  }

  const handlePay = async () => {
    try {
      const { data } = await axios.post("/payment", Cart);
      window.location.href = data.init_point;
      window.localStorage.removeItem("Cart");
    } catch (error) {
      console.error(error);
      toast.error("Debes seleccionar un producto", {
        duration: 3000
      })
    }
  }

  useEffect(() => {
    if(Cart.length) {
      window.localStorage.setItem("Cart", JSON.stringify(Cart));
    }
  }, [Cart]);

  return (
    <div className={style.ContenedorTiendaCART}>
      <Toaster />
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
          <div className={style.ContenedorVaciarCarro}>
            <div className={style.VaciarCarrito}>
              <p>Pagar</p>
            </div>
            <div className={style.ContenedorDetallePago}>
              <div>
                <span>Sub-Total = </span>
                <span>${subtotal}</span>
              </div>
              <div>
                <span>Servicio = </span>
                <span>${servicio}</span>
              </div>
              <div>
                <span>Total a pagar = </span>
                <span>${total}</span>
              </div>
            </div>
            <button className={style.ButtonVaciarCarro} value="pagar" onClick={handlePay}>Checkout</button>
          </div>
        </div>
      </div>
      <div className={style.ContenedorCartProductos}>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          backgroundColor='white'
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
          <HStack >
            <CardBody p={1}>
              <Heading width='230px' size='xs' >Nombre</Heading>
              <Text py='3' >
                {name}
              </Text>
            </CardBody>
            <CardBody p={4}>
              <Heading width='100px' size='xs' textAlign='center' >Precio</Heading>
              <Text py='3' textAlign='center'>
                ${price}
              </Text>
            </CardBody>
            <CardBody p={4}>
              <Heading width='100px' size='xs' textAlign='center'>Cantidad</Heading>
              <Text py='3' className={style.ContenedorBotonesCart}>
                <button className={style.ButtonsSumaResta} onClick={handleDeleteFromCart} value="less" >-</button>
                5
                {/* {quantity} */}
                <button className={style.ButtonsSumaResta} onClick={handleAddToCart} value="add" >+</button>
              </Text>
            </CardBody>
            <CardBody p={4}>
              <Heading width='100px' size='xs' textAlign='center' >Sub Total</Heading>
              <Text py='3' textAlign='center'>
              ${subTotalProd}
              </Text>
            </CardBody>
          </HStack>
        </Card>
      </div>
    </div>
  )
}

export default Carrito;