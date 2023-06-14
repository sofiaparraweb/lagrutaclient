const TiendaItems = ({ id, image, name, price, descripction, stock }) => {
  return (
    <div>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>precio {price}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default TiendaItems;