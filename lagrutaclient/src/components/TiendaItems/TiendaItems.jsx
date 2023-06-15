import PropTypes from 'prop-types';

const TiendaItems = ({ id, image, name, price, description, stock }) => {
  return (
    <div>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p> {price}</p>
      <button>Agregar al carrito</button> 
    </div>
  );
};

TiendaItems.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.text.isRequired,
  stock: PropTypes.number.isRequired,
};

export default TiendaItems;