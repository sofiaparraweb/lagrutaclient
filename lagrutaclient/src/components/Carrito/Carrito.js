import { useSelector } from 'react-redux';

const Carrito = () => {
  const carritoItems = useSelector(state => state.carritoItems);

  return (
    <div>
      <h3>Carrito de compras</h3>
      <ul>
        {carritoItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Carrito;