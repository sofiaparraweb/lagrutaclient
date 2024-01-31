import style from "./TiendaItems.module.css";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCarrito, addToCart } from "../../../Redux/actions"
import { Image, Card, Text, Heading, CardBody, CardFooter, Button, Box, Grid } from '@chakra-ui/react'
import { Toaster, toast } from "react-hot-toast";
import { auth } from "../../../Firebase/Firebase";
import { Link } from 'react-router-dom';


const TiendaItems = ({ id, name, image, price, stock }) => { 
  
  const dispatch = useDispatch();
  const user_id = useSelector(state => state.LocalPersist.userProfile?.id);
  const userName = useSelector(state => state.LocalPersist.userProfile?.fullName);
  const mail = useSelector(state => state.LocalPersist.userProfile?.mail);
  const Cart = useSelector((state) => state.LocalPersist.Carrito?.Products);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const isAuthenticated = auth.currentUser !==null

  useEffect(()=>{
    if(isAuthenticated) {
      dispatch(getCarrito(user_id))
    }
  },[user_id, isAuthenticated])
  
  
  const handleAdd = (event) => {  // --------------------------------------------------BOTON SUMAR
    event.preventDefault()
    if (quantity < stock) {
      setQuantity(quantity + 1); // Agrega 1 a la cantidad actual
    } else {
      setQuantity(stock);
      toast.error("La cantidad deseada supera el stock disponible", {
        duration: 3000
      })
    }
  };

  const handleDelete = (event) => {  // --------------------------------------------------BOTON SUMAR
    event.preventDefault()
    if (quantity > 0) {
      setQuantity(quantity - 1); // Resta 1 a la cantidad actual
    }
  };

  const handleAddToCart = (user_id, id, quantity) => {  // --------------------------------------------------AGREGAR PRODUCTOS AL CARRITO
    const cartItems = Cart;
    const productInCart = cartItems?.find(item => item.id === id); //Verificamos si el producto ya esta en el carrito

    if (productInCart) {
      toast.error("El producto ya está en el carrito", {
        duration: 3000
      });
    } else if(quantity>stock) {
      toast.error("La cantidad deseada supera el stock disponible", {
        duration: 3000
      })    
    } else {
      dispatch(addToCart(user_id, id, quantity));
      toast.success("Producto agregado al carrito", {
        duration: 3000
      })
      dispatch(getCarrito(user_id))
    }
  }

  
  return (
     <div>
        <Toaster />
          <Card width='280px' h='360px' margin="20px 0" _hover={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'}} >
            <CardBody>
              <Link to={`/detail/${id}`} style={{textDecoration:"none", fontWeight:"400", color:"#17424b"}}>
                <Image
                  src={image} 
                  alt='imagen Producto'
                  maxWidth='270px'
                  height='220px'
                  display='block'
                  margin='auto'
                  cursor='pointer'
                />
              </Link>
              <Heading size='md' paddingTop='3px' >
                <Text fontSize='l' textTransform='uppercase' fontWeight='normal'>{name}</Text>
                <Text fontSize='l' fontWeight='normal'> $ {price}</Text>
              </Heading>
            </CardBody>
            <CardFooter h='20%'> 
              {isAuthenticated ? (
                <>
                  <Grid templateColumns="repeat(2, 1fr)" gap={1} margin='2% 2%' >
                    <Box width='80%'>
                      <Heading size='md' textAlign='center'>Cantidad</Heading>
                      <Text py='1' className={style.ContenedorBotonesCart}>
                        <button className={style.ButtonsSumaResta} onClick={handleDelete} value="less" >-</button>
                          {quantity}
                        <button className={style.ButtonsSumaResta} onClick={handleAdd} value="add" >+</button>
                      </Text>
                    </Box>
                    <Box >
                      <Button className={style.BotonAddToCart} onClick={()=>handleAddToCart(user_id, id, quantity)} backgroundColor='#B9362C' _hover={{ color:'#124476'}} color='white' fontWeight='normal' fontSize='20px'>
                        Agregar al carrito
                      </Button>
                    </Box>
                  </Grid>
                </>
              ) : (
                <Button className={style.BotonAddToCart} onClick={() => toast.error('Debe iniciar sesión para agregar productos.')} backgroundColor='transparent' _hover={{ color: '#124476' }} color='#B9362C' fontWeight='normal' fontSize='20px' marginTop='-5px' width='55%' margin="auto" disabled>
                  Agregar al carrito
                </Button>
              )}
            </CardFooter>
          </Card>
      </div>
  );
};

export default TiendaItems;