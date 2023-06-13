import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../../Redux/actions';
import TiendaItem from "../../components/TiendaItems/TiendaItems";
import Carrito from "../../components/Carrito/Carrito";

const Tienda = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(action());
  }, [dispatch]);

  return (
    <div>
      <h2>Tienda</h2>
      <div>
        {products.map(product => (
          <TiendaItem key={product.id} product={product} />
        ))}
      </div>
      <Carrito />
    </div>
  );
};

export default Tienda;