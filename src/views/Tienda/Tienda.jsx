import { useEffect, useState } from 'react';
import { getAllProducts, addToCart, getProfile } from '../../Redux/actions';
import NavBar from "../../components/NavBar/NavBar";
import TiendaItemsContenedor from "../../components/Store/TiendaItemsContenedor/TiendaItemsContenedor";
import style from "./Tienda.module.css";
import { useDispatch, useSelector } from 'react-redux'
import Order from "../../components/Store/Order/Order"
import Search from "../../components/Store/Search/Search"
import Pagination from "../../components/Store/paginado/Paginacion"
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../assets/logo.png";
import { Toaster, toast } from "react-hot-toast";

const Tienda = () => {

  const { isLoading } = useAuth0();
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.allProducts);
  const prod = useSelector(state => state.products);
  const userId = JSON.parse(window.localStorage.getItem("idUser"))

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getProfile());
  },[dispatch]);

  const [currentPage, setCurrentPage] = useState(1); 
  const productsPerPage = 9;

  if (isLoading) {
    return (
      <div className="loading-container">
        <img
          src={logo}
          alt="Loading..."
          className="loading-image"
        />
      </div>
    );
  }

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * productsPerPage; 
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = prod?.length > 0 && prod.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // const addToCart = () =>{
  //   dispatch({
  //     type: actionTypes.ADD_TO_CART,
  //     item: {
  //       id: currentProducts.id,
  //       name: currentProducts.name,
  //       price: currentProducts.price,
  //     }
  //   })
  // }

  const handleClick = (id, userId) =>{
    dispatch(addToCart(id, userId));
    console.log(id);
    console.log(userId);

    toast.success("Producto agregado al carrito", {
      duration: 3000
    })
  }

  return (
    <div className={style.FondoTienda}>
      <Toaster />
      <NavBar />
      <div className={style.tienda}>
        <div className={style.SearchOrder}>
          <Search />
          <Order setCurrentPage={setCurrentPage}/>
        </div>
        <TiendaItemsContenedor products={currentProducts} setCurrentPage={setCurrentPage} handleClick={handleClick} userId={userId}/>
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