import { useDispatch } from 'react-redux';
import {filterByType} from "../../../Redux/actions";
import style from "./Filter.module.css"
import { AiOutlineFilter } from "react-icons/ai";

const Filter = ({ setCurrentPage }) => {

    const dispatch = useDispatch();

    const handleFilter = (name) => {
        console.log(name)
        dispatch(filterByType(name));
        setCurrentPage(1)
    };
    
    return (
        <div className={style.FilterContainer}>
            <AiOutlineFilter className={style.Icon1}/>
            <h1 className={style.FiltrarTexto}>FILTROS</h1>
            <p className={style.LabelFilter}>Categorias</p>
            <ul >
                <li className={style.FilterLI}>
                    <button onClick={() => handleFilter('Otcom')}>Otcom</button>
                </li>
                <li className={style.FilterLI}>
                    <button onClick={() => handleFilter('Cardguard')}>Cardguard</button>
                </li>
                <li className={style.FilterLI}>
                    <button onClick={() => handleFilter('Tresom')}>Tresom</button>
                </li>
                <li className={style.FilterLI}>
                    <button onClick={() => handleFilter('Lotlux')}>Lotlux</button>
                </li>
                <li className={style.FilterLI}>
                    <button onClick={() => handleFilter('Stringtough')}>Stringtough</button>
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
