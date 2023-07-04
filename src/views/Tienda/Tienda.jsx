import { useEffect, useState } from 'react';
import { getAllProducts } from '../../Redux/actions';
import TiendaItemsContenedor from "../../components/Store/TiendaItemsContenedor/TiendaItemsContenedor";
import style from "./Tienda.module.css";
import { useDispatch, useSelector } from 'react-redux'
import Order from "../../components/Store/Order/Order"
import Search from "../../components/Store/Search/Search"
import Pagination from "../../components/Store/paginado/Paginacion"

const Tienda = () => {
  
  const dispatch = useDispatch();
  const prod = useSelector(state => state.LocalPersist.products);
  
  const [currentPage, setCurrentPage] = useState(1); 
  const productsPerPage = 9;

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * productsPerPage; 
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = prod?.length > 0 && prod.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  ); 

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className={style.FondoTienda}>
      <div className={style.tienda}>
        <div className={style.SearchOrder}>
          <Search />
          <Order setCurrentPage={setCurrentPage}/>
        </div>
        <TiendaItemsContenedor products={currentProducts} setCurrentPage={setCurrentPage}/>
        <div className={style.PaginationConteinerTienda}>
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={prod?.length}
            currentPage={currentPage}
            handlePaginate={handlePaginate}
          />
        </div>
      </div>
    </div>
  );
}

export default Tienda;



