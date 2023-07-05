import { getCarrito, addToCart, deleteAllCarrito, deleteCarrito, QuitarProducto } from "../../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Image , Card, HStack, Text, Heading, CardBody } from '@chakra-ui/react';
import {AiOutlineShoppingCart, AiOutlineDelete } from "react-icons/ai";
import style from "./Carrito.module.css";
import { Toaster, toast } from "react-hot-toast";
import FormPago from "../Pago/FormPago";

const Carrito = ({ id, name, image, price, stock, quantityProd}) => {

  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.LocalPersist.Carrito.Products);
  const userId = useSelector(state => state.LocalPersist.userInfo.id);
  const [quantity, setQuantity] = useState(1);
  const [subTotal, setSubTotal] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(getCarrito(userId));
  }, [dispatch]);

  useEffect(() => {
    let newSubTotal = 0;
    Cart?.forEach((product) => {
      newSubTotal += product.price * parseInt(product.Cart_Products.quantity, 10);
    });
    setSubTotal(newSubTotal);
  }, [Cart]);

  const cartQuantity = Cart?.reduce((accumulator, product) => accumulator + parseInt(product.Cart_Products.quantity, 10), 0);  
  let servicio = subTotal * 0.10;
  let total = subTotal + servicio;

  // const handleClickAdd = (userId, id, name, image, price, stock) => {
  //   const existingProduct = Cart?.find((item) => item.id === id);
  //   if (existingProduct) {
  //     if (existingProduct.quantity < stock) {
  //       dispatch(cargarProductos(userId, id, name, image, price, stock));
  //       setQuantity(existingProduct.quantity + 1);
  //       toast.success("Producto agregado al carrito", {
  //         duration: 3000
  //       });
  //     } else {
  //       toast.error("No hay más productos disponibles");
  //     }
  //   } else {
  //     dispatch(cargarProductos(userId, id, name, image, price, stock));
  //     setQuantity(1);
  //     toast.success("Producto agregado al carrito", {
  //       duration: 3000
  //     });
  //   }
  // };

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
    
  // const handleDeleteFromCart = async (userId, id) => {
  //   await dispatch(deleteCarrito(userId, id));
  //   setQuantity(0);
  //   toast.success("Se ha eliminado un producto del carrito", {
  //     duration: 3000
  //   });
  //   dispatch(getCarrito(userId));
  // };

  // const handleDeleteProductCart = (id) =>{
  //   dispatch(QuitarProducto(id));
  //   setQuantity(0);
  //   toast.success("Producto eliminado del carrito", {
  //     duration: 3000
  //   })
  // }

  const handleDeleteCart = async (userId) =>{
    await dispatch(deleteAllCarrito(userId));
    setQuantity(0);
    toast.success("Carrito vaciado correctamente", {
      duration: 3000
    })
    dispatch(getCarrito(userId));
  }

  const handlePay = (event) => {
    event.preventDefault();
    if (Cart) {
      setShowForm(true);
    } else {
      toast.error("Debe seleccionar productos", {
        duration: 3000
      })
      return;
    }
  } 

  return (
    <div className={style.ContenedorTiendaCART}>
      <Toaster />
      <div className={style.TiendaSideBarCART}>
        <div className={style.sidebarContenedorCART}>
          <span className={style.ChanguitoCART}>
            <AiOutlineShoppingCart size={30}/> 
            <p className={style.NumeroChangoCART}>{cartQuantity}</p>
          </span>
          <div className={style.ContenedorVaciarCarro}>
            <div className={style.VaciarCarrito}>
              <p>Vaciar carrito</p>
            </div>
            <button onClick={() => handleDeleteCart(userId)} className={style.ButtonVaciarCarro}>x</button>
          </div>
          <div className={style.ContenedorVaciarCarro}>
            <div className={style.VaciarCarrito}>
              <p>Tu carrito</p>
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
          </div>
            <div className={style.ContenedorProcederAlPago}>
              <div className={style.ProcederAlPago}>
                <p>Proceder al Pago</p>
              </div>
              <button className={style.ButtonVaciarCarro} onClick={handlePay}>x</button>
            </div>
        </div>
      </div>
      {showForm ? (
        <FormPago total={total}/>
      ) : (
        <div className={style.ContenedorCartProductos}>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            backgroundColor='white'
            maxH='120px'
          >
            <Image 
              objectFit='cover'
              maxW={{ base: '100%', sm: '14%' }}
              src={image}
              alt='product-image'
              width='13%'
              height='100%'
              marginRight='9%' 
            />
            <HStack >
              <CardBody p={1} size='md'>
                <Heading width='230px' size='md'>Nombre</Heading>
                <Text py='3' >
                  {name}
                </Text>
              </CardBody>
              <CardBody p={4} size='md'>
                <Heading width='100px' size='md' textAlign='center' >Precio unitario  </Heading>
                <Text py='3' textAlign='center'>
                  $ {price}
                </Text>
              </CardBody>
              <CardBody p={4} size='md'>
                <Heading width='100px' size='md' textAlign='center'>Cantidad</Heading>
                <Text py='3' className={style.ContenedorBotonesCart}>
                  <button className={style.ButtonsSumaResta} onClick={()=> handleDeleteFromCart(id)} value="less" >-</button>
                    {quantityProd}
                  <button className={style.ButtonsSumaResta} onClick={() => handleClickAdd(userId, id, name, image, price, stock)} value="add" >+</button>
                </Text>
              </CardBody>
              <CardBody p={4} size='md'>
                <Heading width='100px' size='md' textAlign='center'>Subtotal</Heading>
                <Text py='3' textAlign='center'>
                  $ {price * quantityProd}
                </Text>
              </CardBody>
              <CardBody p={4}>
                <Text textAlign='center' color='#B9362C'>
                  <button onClick={()=>handleDeleteFromCart(userId, id)} value="less" ><AiOutlineDelete size='2em'/></button>
                </Text>
              </CardBody>
            </HStack>
          </Card>
        </div>
      )}
    </div>
  )
}

export default Carrito;