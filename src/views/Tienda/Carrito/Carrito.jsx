import { getCarrito, cargarProductos, addToCart, deleteAllCarrito, deleteCarrito, QuitarProducto, url } from "../../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Image , Card, HStack, Text, Heading, CardBody } from '@chakra-ui/react';
import {AiOutlineShoppingCart, AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import style from "./Carrito.module.css";
import { Toaster, toast } from "react-hot-toast";

const Carrito = ({ id, name, image, price, stock }) => {

  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.LocalPersist.Carrito);
  //const Cart = useSelector((state) => state.LocalPersist.allProducts);
  const userId = useSelector((state) => state.LocalPersist.userId);
  const [productCount, setProductCount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [subTotalFinal, setSubTotalFinal] = useState(0);

  useEffect(() => {
    dispatch(getCarrito(), subTotal, servicio, total, subTotalFinal);
  }, [dispatch]);

  useEffect(() => {
    const newSubTotalFinal = Cart.reduce((accumulator, product) => accumulator + (product.price * productCount), 0);
    setSubTotalFinal(newSubTotalFinal);
  }, [Cart, productCount]);

  const servicio = subTotalFinal * 0.10;
  const total = subTotalFinal + servicio;

  const handleClickAdd = (userId, id, name, image, price, stock) => {
    if (productCount < stock) {
      dispatch(cargarProductos(userId, id, name, image, price, stock));
      setProductCount(productCount + 1);
      const newSubTotal = price * (productCount + 1);
      setSubTotal(newSubTotal);
      toast.success("Producto agregado al carrito", {
        duration: 3000
      });
    } else {
      setProductCount(stock);
      toast.error("No hay más productos disponibles");
    }
  };

  console.log(Cart)

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
      setSubTotal(price * (productCount - 1));
      toast.success("Producto eliminado del carrito", {
        duration: 3000
      })
    } else {
      dispatch(QuitarProducto(id)); 
      setProductCount(0);
      toast.success("Producto eliminado del carrito", {
        duration: 3000
      });
    } 
  };

  const handleDeleteProductCart = (id) =>{
    dispatch(QuitarProducto(id));
    setProductCount(0);
    toast.success("Producto eliminado del carrito", {
      duration: 3000
    })
  }

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
                <span>${subTotalFinal}</span>
              </div>
              <div style={{marginBottom: '2%'}}>
                <span>Cargos = </span>
                <span>${servicio}</span>
              </div>
              <hr style={{ width: '80%', margin: '1% auto', border: '1px solid black', paddingRight: '20%'}}></hr>
              <div style={{marginTop: '2%'}}>
                <span>Total a pagar = </span>
                <span>${total}</span>
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
              <CardBody p={1} size='md'>
                <Heading width='230px' size='md'>Nombre</Heading>
                <Text py='3' >
                  {name}
                </Text>
              </CardBody>
              <CardBody p={4} size='md'>
                <Heading width='100px' size='md' textAlign='center' >Precio</Heading>
                <Text py='3' textAlign='center'>
                  ${price}
                </Text>
              </CardBody>
              <CardBody p={4} size='md'>
                <Heading width='100px' size='md' textAlign='center'>Cantidad</Heading>
                <Text py='3' className={style.ContenedorBotonesCart}>
                  <button className={style.ButtonsSumaResta} onClick={handleDeleteFromCart} value="less" >-</button>
                    {productCount}
                  <button className={style.ButtonsSumaResta} onClick={() => handleClickAdd(userId, id, name, image, price, stock)} value="add" >+</button>
                </Text>
              </CardBody>
              <CardBody p={4} size='md'>
                <Heading width='100px' size='md' textAlign='center'>Subtotal</Heading>
                <Text py='3' textAlign='center'>
                  {subTotal}
                </Text>
              </CardBody>
              <CardBody p={4}>
                <Text textAlign='center' color='#B9362C'>
                  <button onClick={handleDeleteProductCart} value="less" ><AiOutlineDelete size='2em'/></button>
                </Text>
              </CardBody>
            </HStack>
          </Card>

      </div>
    </div>
  )
}

export default Carrito;