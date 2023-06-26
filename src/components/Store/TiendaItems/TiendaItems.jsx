//import PropTypes from 'prop-types';
import style from "./TiendaItems.module.css";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {addToCart} from "../../../Redux/actions"
import { Image, Card, Stack, Text, Heading, CardBody, CardFooter, Button, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { Toaster, toast } from "react-hot-toast";

const TiendaItems = ({ id, name, image, price, description, stock, ProductsTypes }) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const allProducts = useSelector((state) => state.Carrito);
  const dispatch = useDispatch();
  // const profile = useSelector((state) => state.profile);
  const profile = {
    "id": "22d99872-1a68-40e9-9f7e-a5339a183e22",
    "fullName": "Cherrita Crysell",
    "username": "ccrysell9",
    "birthDate": "24/4/1994",
    "image": "http://dummyimage.com/175x100.png/5fa2dd/ffffff",
    "phone": "113-506-8959",
    "mail": "ccrysell9@youtube.com",
    "occupation": "Manistee Co Blacker Airport",
    "password": "196650",
    "createdAt": "2023-06-25T05:37:05.052Z",
    "updatedAt": "2023-06-25T05:37:05.052Z",
    "deletedAt": null,
    "Rols": [],
    "Activities": [],
    "Cart": {
        "id": "733b0dc6-9804-4c59-ab96-9a22d7fdd2d0",
        "quantity": null,
        "createdAt": "2023-06-25T20:16:43.907Z",
        "updatedAt": "2023-06-25T20:16:43.907Z",
        "UserId": "22d99872-1a68-40e9-9f7e-a5339a183e22"
    }
};
  const userId = profile.id;

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClick = (id, userId) =>{
    dispatch(addToCart(id, userId));
    console.log(id);
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