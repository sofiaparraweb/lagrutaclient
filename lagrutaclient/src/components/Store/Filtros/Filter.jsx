import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {filterByType, getAllProductTypes, getAllProducts} from "../../../Redux/actions";
import style from "./Filter.module.css"
import { AiOutlineFilter } from "react-icons/ai";

const Filter = ({ setCurrentPage }) => {

  const [activeFilter, setActiveFilter] = useState(null);  //Para modificar el estado del filtro activo
  const dispatch = useDispatch();
  const allProductTypes = useSelector(state => state.allProductTypes.allProductTypes);

  const handleFilter = name => {  //Ejecutamos la action segun el filtro que seleccionemos abajo
    console.log(name);
    dispatch(filterByType(name));
    setCurrentPage(1);
    setActiveFilter(name);
  };

  const handleReset = (event) => {  //Reseteamos cuando queremos volver a traer todos los productos a la tienda
    event.preventDefault()
    dispatch(getAllProducts())
    setActiveFilter(null);
  }

  useEffect(() => {
    dispatch(getAllProductTypes());
  }, [dispatch]);

  return (
    <div className={style.FilterContainer}>
        <AiOutlineFilter className={style.Icon1} />
        <h1 className={style.FiltrarTexto}>CATEGORIA</h1>
        <ul className={style.ContenedorBotonesFiltro}>
            <li className={style.FilterLI}>
                <button onClick={handleReset} className={activeFilter === null ? style.ActiveButtonNull : ''}>Todos los productos</button>
            </li>
            <li className={style.FilterLI}>
                <button onClick={() => handleFilter('Otcom')} className={activeFilter === 'Otcom' ? style.ActiveButtonFilter : ''}>Otcom</button>
            </li>
            <li className={style.FilterLI}>
                <button onClick={() => handleFilter('Cardguard')} className={activeFilter === 'Cardguard' ? style.ActiveButtonFilter : ''}>Cardguard</button>
            </li>
            <li className={style.FilterLI}>
                <button onClick={() => handleFilter('Tresom')} className={activeFilter === 'Tresom' ? style.ActiveButtonFilter : ''}>Tresom</button>
            </li>
            <li className={style.FilterLI}>
                <button onClick={() => handleFilter('Bitwolf')} className={activeFilter === 'Bitwolf' ? style.ActiveButtonFilter : ''}>Bitwolf</button>
            </li>
        
        </ul>
    </div>
    );
};

export default Filter;