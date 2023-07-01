//import PropTypes from 'prop-types';
import style from "./TiendaItems.module.css";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
//import { addToCart } from "../../../Redux/actions"
import { Image, Card, Text, Heading, CardBody, CardFooter, Button, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Box, Grid } from '@chakra-ui/react'
import { Toaster, toast } from "react-hot-toast";
import { useAuth0 } from "@auth0/auth0-react";

const TiendaItems = ({ id, name, image, price, description, stock, ProductsTypes, Reviews }) => {
  
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.Carrito);
  const userId = useSelector((state) => state.userId); // Obtener el userId del estado
  
  const [review, setReview] = useState({
    user_id:`${userId}`, /* <----------------------- FALTA ASIGNARLE BIEN EL USERID QUE TIENE EL USUARIO QUE COMENTA */
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

  
  const handleClickAdd = () => { // agregamos el producto seleccionado al estado local
    setProductosSeleccionados([...productosSeleccionados, id]);
    toast.success("Producto agregado al carrito", {
      duration: 3000
    })
  };

  // const handleClick = (id, userId) =>{
  //   dispatch(addToCart(id, userId));
  //   console.log(userId);
  //   toast.success("Producto agregado al carrito", {
  //     duration: 3000
  //   })
  // }
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
            {/* <Stack height='53px' mt='1'>
              <Text color='grey' fontWeight='normal'>
                {ProductsTypes} | {description}
              </Text>     
            </Stack> */}
          </CardBody>
          <CardFooter h='49px'> 
            {isAuthenticated ? (
              <Button className={style.BotonAddToCart} onClick={handleClickAdd} backgroundColor='#B9362C' _hover={{ color:'#124476'}} color='white' fontWeight='normal' fontSize='25px' marginTop='-19px'>
                Add to cart
              </Button>
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
            <ModalCloseButton fontSize="2xl"/>
            <ModalBody>
              <Grid templateColumns="repeat(3, 1fr)" gap={1} height="400px" width="800px" margin='10px 0'>
                <Box>
                  <Image src={image} alt={name} maxH='400px'/>
                </Box>
                <Box margin='80px 0'>
                  <Grid marginBottom='30px' width='200px' > 
                    <Text fontSize="xl" fontWeight="bold" mb={4} textTransform='uppercase'>
                    Tipo de producto: 
                    </Text>
                    <Text fontSize="l" fontWeight='normal' margin='0 10px'>
                      {ProductsTypes}
                    </Text>
                  </Grid>
                  <Grid width='200px' >
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
                        {Reviews && Reviews.map ((review) =>(
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
                <Box>
                    <Grid>
                      <Text fontSize="xl" fontWeight="bold" mb={4} textTransform='uppercase'>
                        {Reviews && Reviews.map ((review) =>(
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