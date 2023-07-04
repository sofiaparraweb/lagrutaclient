import axios from "axios";
//import PropTypes from 'prop-types';
import style from "./TiendaItems.module.css";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCarrito, addToCart } from "../../../Redux/actions"
import { Image, Card, Text, Heading, CardBody, CardFooter, Button, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Box, Grid } from '@chakra-ui/react'
import { Toaster, toast } from "react-hot-toast";
import { useAuth0 } from "@auth0/auth0-react"; 
import { cartArrowDown } from "fontawesome";

const TiendaItems = ({ id, name, image, price, stock, description, ProductsTypes, Reviews }) => {
  
  const dispatch = useDispatch();
  const user_id = useSelector(state => state.LocalPersist.userInfo.id);
  const Cart = useSelector((state) => state.LocalPersist.Carrito);
  const { isAuthenticated } = useAuth0();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  
  useEffect(()=>{
    dispatch(getCarrito())
  },[dispatch])
  
  const [review, setReview] = useState({
    user_id:`${user_id}`, /* <----------------------- FALTA ASIGNARLE BIEN EL USERID QUE TIENE EL USUARIO QUE COMENTA */
    rating: 0,
    content: "",
    product_id: `${id}`, 
  })
  
  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    
    setReview({ ...review, [property]: value});
  }
  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  const handleAdd = (event) => {
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

  const handleDelete = (event) => {
    event.preventDefault()
    if (quantity > 0) {
      setQuantity(quantity - 1); // Resta 1 a la cantidad actual
    }
  };

  const handleAddToCart = (user_id, id, quantity) => {
    if(quantity>stock) {
      toast.error("La cantidad deseada supera el stock disponible", {
        duration: 3000
      })    
    } else {
      dispatch(addToCart(user_id, id, quantity));
      toast.success("Producto agregado al carrito", {
        duration: 3000
      })
    }
  }

  const handleSubmit = (event) => {
      event.preventDefault()
      axios.post ('http://localhost:3001/review/post', review)
      .then(res=>alert("Gracias por opinar sobre nuestro producto!"))
      .catch((error) => alert(error))
  }

  return (
    <form onSubmit={handleSubmit}>
     <div>
        <Toaster />
        <Card width='280px' h='360px' margin="20px 0" _hover={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'}} >
          <CardBody>
            <div onClick={toggleModal}>
              <Image
                src={image} 
                alt='imagen Producto'
                maxWidth='270px'
                height='220px'
                display='block'
                margin='auto'
                cursor='pointer'
              />
            </div>
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
              <Button className={style.BotonAddToCart} onClick={() => toast.error('Debe iniciar sesión para agregar productos.')} backgroundColor='#B9362C' _hover={{ color: '#124476' }} color='white' fontWeight='normal' fontSize='25px' marginTop='-19px' disabled>
                Add to cart
              </Button>
            )}
          </CardFooter>
        </Card>
        <Modal isOpen={isModalOpen} onClose={toggleModal} size="7xl" >
          <ModalOverlay />
          <ModalContent >
          {/* <ModalContent backgroundColor='transparent' border='1px solid white' backdropFilter="blur(5px)"> */}
            <ModalCloseButton fontSize="2xl" color='#124476'/>
            <ModalBody>
              <Grid templateColumns="repeat(3, 1fr)" gap={1} margin='2% 0'>
                <Box>
                  <Image src={image} alt={name} maxH='100%' />
                </Box>
                <Box margin='10% 0' width='70%' >
                  <Grid marginBottom='10%'> 
                    <Text fontSize="xl" fontWeight="bold" mb={4} textTransform='uppercase'>
                    Tipo de producto: 
                    </Text>
                    <Text fontSize="l" fontWeight='normal' margin='0 10px'>
                      {ProductsTypes}
                    </Text>
                  </Grid>
                  <Grid marginBottom='10%'>
                    <Text fontSize="xl" fontWeight="bold" mb={4} textTransform='uppercase'>
                      Descripción
                    </Text>
                    <Text fontSize="l" fontWeight='normal' margin='0 10px'>
                      {description}
                    </Text>
                  </Grid>
                  <Grid>
                    <Text fontSize="xl" fontWeight="bold" mb={4} textTransform='uppercase'>
                      aca irian las valoraciones (estrellitas)
                      {Reviews && Reviews?.map ((review) =>(
                        <div>
                          <p>Rating: {review.rating}</p>
                        </div>
                      ))
                      }
                    </Text>
                    <label htmlFor="">Puntuá este producto!</label>
                    <input type="range" min="0" max="5"
                      name="rating"
                      onChange={changeHandler}
                      value={review.rating} />
                  </Grid>
                </Box>
                <Box border='1px' >
                  <Grid>
                    <Text fontSize="xl" fontWeight="bold" mb={4} textTransform='uppercase'>
                      {Reviews && Reviews?.map ((review) =>(
                        <div>
                          <p>User ID: {review.user_id}</p>
                          <p>Contenido: {review.content}</p>
                        </div>
                      ) )}
                    </Text>
                    <div> {/* <-------- ACA IRIAN LAS ESTRELLITAS :V */}
                      <label htmlFor="">Dejá tu review sobre este producto.</label>
                      <textarea id="content"
                        name="content" rows="4" cols="50"
                        value={review.content}
                        onChange={changeHandler}></textarea>
                    </div>
                    <button type="sumbit">Comentar</button>
                  </Grid>
                </Box>
              </Grid>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </form>
  );
};

// TiendaItems.propTypes = {
//   id: PropTypes.number.isRequired,
//   image: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   description: PropTypes.text.isRequired,
//   stock: PropTypes.number.isRequired,
// };

export default TiendaItems;