import TiendaItems from "../TiendaItems/TiendaItems";
import PropTypes from 'prop-types';
import style from "./TiendaItemsContenedor.module.css";

const TiendaItemsContenedor = ({ products }) => {

    return (
        <div className={style.TiendaItemsContainer}> 
            {products.length > 0 && products?.map((prod) => {
                return (
                    <TiendaItems
                        key={prod.id}
                        id={prod.id}
                        image={prod.image}
                        name={prod.name}
                        price={prod.price}
                        description={prod.description}
                        stock={prod.stock}
                    />
                ); 
            })}
        </div>
    );
}

// TiendaItemsContenedor.propTypes = {
//     products: PropTypes.arrayOf( //definimos los propTypes para los prop products y lo que sigue es para indicar que products debe ser un array de objetos
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             image: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             price: PropTypes.number.isRequired,
//             description: PropTypes.text.isRequired,
//             stock: PropTypes.number.isRequired,
//         })
//     ),
// };

export default TiendaItemsContenedor;