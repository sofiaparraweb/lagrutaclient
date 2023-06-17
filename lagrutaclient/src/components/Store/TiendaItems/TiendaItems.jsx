import PropTypes from 'prop-types';
import style from "./TiendaItems.module.css";
import { Image, Card, Stack, Text, Heading, CardBody, CardFooter, Divider, Button } from '@chakra-ui/react'

const TiendaItems = ({ id, name, image, price, description, stock, type }) => {
  return (
    <div>
      <Card width='260px' h='400px' margin="20px 0">
        <CardBody>
          <Heading size='md'>
            <Text fontSize='md'>{name}</Text>
            <Text color='blue.600' fontSize='l'> $ {price}</Text>
          </Heading>
          <Image
            src={image} 
            alt='imagen Producto'
            borderRadius='lg'
            width='200px'
            h='200px'
          />
          <Stack h='70px' mt='1'>
            <Text>
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
