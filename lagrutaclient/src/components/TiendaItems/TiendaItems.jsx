const TiendaItem = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default TiendaItem;