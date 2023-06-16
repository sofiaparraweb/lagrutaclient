import PropTypes from 'prop-types';
import style from "./TiendaItems.module.css";

const TiendaItems = ({ id, name, image, price, description, stock, type }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={image}  width="100px" alt="" />
      <p> {price}</p>
      <p> {type}</p>
      <button>Agregar al carrito</button> 
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