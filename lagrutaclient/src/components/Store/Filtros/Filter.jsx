import { useDispatch } from 'react-redux';
import {filterByType} from "../../../Redux/actions";
import style from "./Filter.module.css"
import { AiOutlineFilter } from "react-icons/ai";

const Filter = () => {

    const dispatch = useDispatch();

    const handleFilter = (productType) => {
        console.log(productType)
        dispatch(filterByType(productType));
    };
    
    return (
        <div className={style.FilterContainer}>
            <AiOutlineFilter className={style.Icon1}/>
            <h1 className={style.FiltrarTexto}>FILTROS</h1>
            <p className={style.LabelFilter}>Categorias</p>
            <ul >
                <li className={style.FilterLI}>
                    <button onChange={() => handleFilter('Tresom')}>Tresom</button>
                </li>
                <li className={style.FilterLI}>
                    <button onClick={() => handleFilter('Stringtough')}>Stringtough</button>
                </li>
                <li className={style.FilterLI}>
                    <button onClick={() => handleFilter('Categoria 3')}>Otro</button>
                </li>
            </ul>
            <p className={style.LabelFilter}>Nombre</p>
            <ul >
                <li className={style.FilterLI}>
                    <button onChange={() => handleFilter('Tresom')}>Tresom</button>
                </li>
                <li className={style.FilterLI}>
                    <button onClick={() => handleFilter('Stringtough')}>Stringtough</button>
                </li>
                <li className={style.FilterLI}>
                    <button onClick={() => handleFilter('Categoria 3')}>Otro</button>
                </li>
            </ul>
        </div>
    );
};

export default Filter;
