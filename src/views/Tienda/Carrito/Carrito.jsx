import { getCarrito, cargarProductos, addToCart, deleteAllCarrito, deleteCarrito, url } from "../../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Image , Card, HStack, Text, Heading, CardBody } from '@chakra-ui/react';
import {AiOutlineShoppingCart } from "react-icons/ai";
//import { Link } from 'react-router-dom';
import axios from "axios";
import style from "./Carrito.module.css";
import { Toaster, toast } from "react-hot-toast";

const Carrito = ({ id, name, image, price, stock }) => {

  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.LocalPersist.Carrito);
  const userId = useSelector((state) => state.LocalPersist.userId);
  const [productCount, setProductCount] = useState(0);
  //const [total, setTotal] = useState(price)

//   useEffect(() => {
//     setTotal(productCount * price);
//     setArray([
//       ...array,{
//         id,
//         name,
//         price: total,
//         amount: cant,
//       }]
//     )
// },[]);

  let subTotalProd = Cart.map((el) => el.price);
  let subtotal = Cart.reduce((acc, el) => acc + el.price, 0);
  let servicio = subtotal * 0.10;
  let total = subtotal + servicio;
  console.log(Cart)

  const handleClickAdd = (id, userId, name, image, price, stock) => { // agregamos el producto seleccionado al estado local
    if(productCount<stock){
      dispatch(cargarProductos(id, userId, name, image, price, stock));
      setProductCount(productCount + 1);
      toast.success("Producto agregado al carrito", {
        duration: 3000
      })
    } else {
      setProductCount(stock)
      toast.error("No hay mas productos disponibles")
    }
  };

  // const handleAddToCart = (id) => {
  //   if(productCount<stock) {
  //     dispatch(addToCart(user_id, id));
  //     setProductCount(productCount + 1);
  //     toast.success("Producto agregado al carrito", {
  //       duration: 3000
  //     })
  //   } else {
  //     toast.error("La cantidad supera el stock disponible", {
  //       duration: 3000
  //     })    
  //   }
  // }
    
  const handleDeleteFromCart = (userId, id) => {
    if(productCount>0){
      dispatch(deleteCarrito(userId, id));
      setProductCount(productCount - 1);
      toast.success("Producto eliminado del carrito", {
        duration: 3000
      })
    } else {
      dispatch(deleteCarrito(userId, id)); 
      setProductCount(1);
      toast.success("Producto eliminado del carrito", {
        duration: 3000
      });
    } 
  };

  const handleDeleteCart = (userId) =>{
    dispatch(deleteAllCarrito(userId));
    setProductCount(0);
    toast.success("Carrito vaciado correctamente", {
      duration: 3000
    })
  }

  const handlePay = async (userId) => {
    try {
      const { data } = await axios.post(`${url}/payment/create-order?user_id=${userId}`, Cart);
      window.location.href = data.init_point;
      window.localStorage.removeItem("Cart");
    } catch (error) {
      toast.error("Debes seleccionar un producto", {
        duration: 3000
      })
    }
  }

  useEffect(() => {
    dispatch(getCarrito());
  }, [dispatch]);

  return (
    <div className={style.ContenedorTiendaCART}>
      <Toaster />
      <div className={style.TiendaSideBarCART}>
        <div className={style.sidebarContenedorCART}>
          <span className={style.ChanguitoCART}>
            <AiOutlineShoppingCart size={30} /> 
            <p className={style.NumeroChangoCART}>{Cart.length}</p>
          </span>
          <div className={style.ContenedorVaciarCarro}>
            <div className={style.VaciarCarrito}>
              <p>Vaciar carrito</p>
            </div>
            <button onClick={handleDeleteCart} className={style.ButtonVaciarCarro}>x</button>
          </div>
          <div className={style.ContenedorVaciarCarro}>
            <div className={style.VaciarCarrito}>
              <p>Checkout</p>
            </div>
            <div className={style.ContenedorDetallePago}>
              <div>
                <span>Subtotal = </span>
                {/* <span>${subtotal}</span> */}
              </div>
              <div style={{marginBottom: '2%'}}>
                <span>Cargos = </span>
                <span>${servicio}</span>
              </div>
              <hr style={{ width: '80%', margin: '1% auto', border: '1px solid black', paddingRight: '20%'}}></hr>
              <div style={{marginTop: '2%'}}>
                <span>Total a pagar = </span>
                {/* <span>${total}</span> */}
              </div>
            </div>
            <button className={style.ButtonVaciarCarro} value="pagar" onClick={handlePay}>Confirmar</button>
            <button className={style.ButtonVaciarCarro} value="pagar" onClick={handlePay}>Pagar</button>
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
                    {productCount}
                  <button className={style.ButtonsSumaResta} onClick={() => handleClickAdd(id, userId, name, image, price, stock)} value="add" >+</button>
                </Text>
              </CardBody>
              <CardBody p={4}>
                <Heading width='100px' size='xs' textAlign='center' >Sub Total</Heading>
                <Text py='3' textAlign='center'>
                  {price * productCount}
                </Text>
              </CardBody>
            </HStack>
          </Card>

      </div>
    </div>
  )
}

export default Carrito;