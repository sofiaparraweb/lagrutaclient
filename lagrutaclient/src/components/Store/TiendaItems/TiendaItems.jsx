import PropTypes from 'prop-types';
import style from "./TiendaItems.module.css";
import { Image, Card, Stack, Text, Heading, CardBody, CardFooter, Divider, Button } from '@chakra-ui/react'

const TiendaItems = ({ id, name, image, price, description, stock, type }) => {
  return (
    <div>
      <Card width='280px' h='400px' margin="20px 0" _hover={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'}}>
        <CardBody>
          <Image
            src={image} 
            alt='imagen Producto'
            borderRadius='lg'
            Mw='250px'
            h='200px'
            display='block'
            marginLeft='auto'
            marginRight='auto'
          />
          <Heading size='l'>
            <Text fontSize='md' textAlign={'center'}>{name}</Text>
            <Text fontSize='l' textAlign={'center'}> $ {price}</Text>
          </Heading>
          <Stack h='63px' mt='1'>
            <Text color='grey' textAlign={'center'}>
              {description}
            </Text>     
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter h='30px'>
          <Button variant='ghost' colorScheme='blue' margin='-20px'>
            Add to cart
          </Button>
        </CardFooter>
      </Card>
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