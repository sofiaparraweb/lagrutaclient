//import PropTypes from 'prop-types';
import style from "./TiendaItems.module.css";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Redux/actions"
import { Image, Card, Stack, Text, Heading, CardBody, CardFooter, Button, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { Toaster, toast } from "react-hot-toast";

const TiendaItems = ({ id, name, image, price, description, stock, ProductsTypes }) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const allProducts = useSelector((state) => state.Carrito);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userId); // Obtener el userId del estado

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClick = (id, userId) =>{
    dispatch(addToCart(id, userId));
    console.log(userId);
    toast.success("Producto agregado al carrito", {
      duration: 3000
    })
  }


  return (
    <div>
      <Toaster />
      <Card width='280px' h='400px' margin="20px 0" _hover={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'}} >
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
          <Heading size='sm' paddingTop='3px'>
            <Text fontSize='md' textTransform='uppercase' fontWeight='normal'>{name}</Text>
            <Text fontSize='md' fontWeight='normal'> $ {price}</Text>
          </Heading>
          <Stack height='53px' mt='1'>
            <Text color='grey' fontWeight='normal'>
              {ProductsTypes} | {description}
            </Text>     
          </Stack>
        </CardBody>
        <CardFooter h='49px'> 
          <Button className={style.BotonAddToCart} onClick={()=>{handleClick(id)}} backgroundColor='#B9362C' _hover={{ color:'#124476'}} color='white' fontWeight='normal' fontSize='25px' marginTop='-19px'>
            Add to cart
          </Button>
        </CardFooter>
      </Card>
      <Modal isOpen={isModalOpen} onClose={toggleModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Image src={image} alt={name} />
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