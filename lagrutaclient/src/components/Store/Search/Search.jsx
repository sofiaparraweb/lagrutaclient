import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { filterByName, getAllProducts } from "../../../Redux/actions";
import style from "./Search.module.css"

const Search = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.allProducts);
  const [ productName, setProductName ] = useState("")

  const handleChange = (event) =>{
    event.preventDefault();
    setProductName(event.target.value);
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    if (productName.length > 0) {
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(productName.toLowerCase()));
        dispatch(filterByName(filteredProducts));
        setProductName('');
    }
  }

  const handleReset = (event) => {
    event.preventDefault()
    dispatch(getAllProducts())
  }

  return (
    <div className={style.SearchBar}>
        <form onSubmit={handleSubmit}>
          <div className={style.DivInput}>
            <input
              className={style.SearchInput}
              type="search"
              placeholder="Buscar producto"
              value={productName}
              onChange={handleChange}
            />
          </div>
          <div className={style.DivButton}>
            <button type="submit" className={style.SearchBarButton}>Search</button>
            <button className={style.ResetButton} onClick={handleReset}>Reset</button>
          </div>
        </form> 
    </div>
  )
}

export default Search;