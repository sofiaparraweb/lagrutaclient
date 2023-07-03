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
  const userId = useSelector(state => state.LocalPersist.userInfo.id);
  const [quantity, setQuantity] = useState(1);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => { // Calcula el subtotal inicial al cargar el carrito
    const initialSubTotal = Cart.reduce((amount, item) => item.price * item.quantity + amount, 0);
    setSubTotal(initialSubTotal);
  }, [Cart]);

  useEffect(() => {
    dispatch(getCarrito(), servicio, total, subTotal, quantity);
  }, [dispatch]);

  let servicio = subTotal * 0.10;
  let total = subTotal + servicio;

  const handleClickAdd = (userId, id, name, image, price, stock) => {
    const existingProduct = Cart?.find((item) => item.id === id);

    if (existingProduct) {
      if (existingProduct.quantity < stock) {
        dispatch(cargarProductos(userId, id, name, image, price, stock));
        setQuantity(existingProduct.quantity + 1);
        toast.success("Producto agregado al carrito", {
          duration: 3000
        });
      } else {
        toast.error("No hay más productos disponibles");
      }
    } else {
      dispatch(cargarProductos(userId, id, name, image, price, stock));
      setQuantity(1);
      toast.success("Producto agregado al carrito", {
        duration: 3000
      });
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
    const existingProduct = Cart?.find((item) => item.id === id);

    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        dispatch(deleteCarrito(userId, id));
        setQuantity(existingProduct.quantity - 1);
      } else {
        dispatch(QuitarProducto(id));
        setQuantity(0);
      }
      toast.success("Se ha eliminado un producto del carrito", {
        duration: 3000
      });
    }
  };

  const handleDeleteProductCart = (id) =>{
    dispatch(QuitarProducto(id));
    setQuantity(0);
    toast.success("Producto eliminado del carrito", {
      duration: 3000
    })
  }

  const handleDeleteCart = (userId) =>{
    dispatch(deleteAllCarrito(userId));
    setQuantity(0);
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
            <button onClick={() => handleDeleteCart(userId)} className={style.ButtonVaciarCarro}>x</button>
          </div>
          <div className={style.ContenedorVaciarCarro}>
            <div className={style.VaciarCarrito}>
              <p>Checkout</p>
            </div>
            <div className={style.ContenedorDetallePago}>
              <div>
                <span>Subtotal = </span>
                <span>${subTotal}</span>
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
                  <button className={style.ButtonsSumaResta} onClick={()=> handleDeleteFromCart(id)} value="less" >-</button>
                    {quantity}
                  <button className={style.ButtonsSumaResta} onClick={() => handleClickAdd(userId, id, name, image, price, stock)} value="add" >+</button>
                </Text>
              </CardBody>
              <CardBody p={4} size='md'>
                <Heading width='100px' size='md' textAlign='center'>Subtotal</Heading>
                <Text py='3' textAlign='center'>
                  {price * quantity}
                </Text>
              </CardBody>
              <CardBody p={4}>
                <Text textAlign='center' color='#B9362C'>
                  <button onClick={()=>handleDeleteProductCart(id)} value="less" ><AiOutlineDelete size='2em'/></button>
                </Text>
              </CardBody>
            </HStack>
          </Card>

      </div>
    </div>
  )
}

export default Carrito;