import { useSelector } from 'react-redux';

const Carrito = () => {
  const CarritoCompra = useSelector(state => state.CarritoCompra);

  return (
    <div>
      <h3>Carrito de compras</h3>
      <ul>
        {CarritoCompra.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Carrito;