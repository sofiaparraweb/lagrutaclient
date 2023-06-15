import TiendaItems from "../TiendaItems/TiendaItems";
import style from "./TiendaItemsContenedor.module.css"

const TiendaItemsContenedor = ({ products }) => {

    return (
        <div className={style.TiendaItemsContainer}> 
            {products && products.length > 0 && products?.map((prod) => {
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

export default TiendaItemsContenedor;

// function Hello({ name }) {
//     return <div>Hello {name}</div>;
//     // 'name' is missing in props validation
//   }

//   function Hello({ name }) {
//     return <div>Hello {name}</div>;
//   }
//   Hello.propTypes = {
//     name: PropTypes.string.isRequired
//   }