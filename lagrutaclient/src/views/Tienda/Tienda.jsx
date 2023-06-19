import { useEffect, useState } from 'react';
import { getAllProducts } from '../../Redux/actions';
import NavBar from "../../components/NavBar/NavBar";
import TiendaItemsContenedor from "../../components/Store/TiendaItemsContenedor/TiendaItemsContenedor";
import style from "./Tienda.module.css";
import { useDispatch, useSelector } from 'react-redux'
import Order from "../../components/Store/Order/Order"
import Search from "../../components/Store/Search/Search"
import Pagination from "../../components/Store/paginado/Paginacion"

const Tienda = () => {

  const dispatch = useDispatch();
  //const products = useSelector(state => state.allProducts);
  const prod = useSelector(state => state.products);

  const [currentPage, setCurrentPage] = useState(1); 
  const pokemonsPerPage = 8;

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPokemon = currentPage * pokemonsPerPage; 
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = prod?.length > 0 && prod.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <div className={style.tienda}>
        <div className={style.SearchOrder}>
          <Search />
          <Pagination
            pokemonsPerPage={pokemonsPerPage}
            totalPokemons={prod?.length}
            currentPage={currentPage}
            handlePaginate={handlePaginate}
          />
          <Order />
        </div>
        <TiendaItemsContenedor products={currentPokemons} setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  );
}

export default Tienda;