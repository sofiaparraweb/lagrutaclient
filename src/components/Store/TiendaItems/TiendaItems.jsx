//import PropTypes from 'prop-types';
import style from "./TiendaItems.module.css";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
//import { agregarAlCarrito } from "../../../Redux/actions"
import { Image, Card, Text, Heading, CardBody, CardFooter, Button, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Box, Grid } from '@chakra-ui/react'
import { Toaster, toast } from "react-hot-toast";
import { useAuth0 } from "@auth0/auth0-react";

const TiendaItems = ({ id, name, image, price, description, stock, ProductsTypes }) => {

  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.LocalPersist.Carrito);
  const userId = useSelector((state) => state.LocalPersist.userId); // Obtener el userId del estado
  console.log(id)
  console.log(userId)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  const handleClickAdd = () => { // agregamos el producto seleccionado al estado local
    setProductosSeleccionados([...productosSeleccionados, id]);
    //dispatch(agregarAlCarrito(id));
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

  return (
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
            <Grid templateColumns="repeat(2, 1fr)" gap={1} height="400px" width="800px" margin='10px 0'>
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
              </Box>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
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