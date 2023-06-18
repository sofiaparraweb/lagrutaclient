import { useDispatch } from "react-redux";
// import {ACTION} from "../../../Redux/actions"
import style from "./Order.module.css"

const Order = () => {

    const dispatch = useDispatch();

    const orderProductPrice = (event) => {
        dispatch(ACTION(event.target.value));
    };

    return (
        <div className={style.OrderContainer}>
            <p className={style.LabelOrder}>Ordenar por</p>
            <select name="orderProductPrice" onChange={orderProductPrice} className={style.SelectorOrder}>
                <option key={0} value="all" >Mas relevantes</option>  
                <option key={2} value="asc">Mayor precio</option>
                <option key={3} value="des">Menor Precio</option>
            </select>
        </div>
    )
}

export default Order;