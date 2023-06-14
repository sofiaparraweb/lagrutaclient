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

export default TiendaItems;