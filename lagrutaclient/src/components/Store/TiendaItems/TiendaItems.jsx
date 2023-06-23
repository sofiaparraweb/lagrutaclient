//import PropTypes from 'prop-types';
import style from "./TiendaItems.module.css";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {addToCart} from "../../../Redux/actions"
import { Image, Card, Stack, Text, Heading, CardBody, CardFooter, Divider, Button, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react'

const TiendaItems = ({ id, name, image, price, description, stock, ProductsTypes }) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClick = () =>{
    dispatch(addToCart());
  }


  return (
    <div>
      <Card width='280px' h='400px' margin="20px 0" _hover={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'}} >
        <CardBody>
          <div onClick={toggleModal}>
            <Image
              src={image} 
              alt='imagen Producto'
              borderRadius='sm'
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
        {/* <Divider /> */}
        <CardFooter h='49px'> 
          <Button color='white' w='100%' h='35px' fontWeight='normal' onClick={handleClick} backgroundColor='rgba(195,64,56,255)' _hover={{ backgroundColor:'rgba(161,56,50,255)'}} marginTop='-19px'>
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