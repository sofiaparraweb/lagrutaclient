import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_DETAIL_PRODUCTS = "GET_DETAIL_PRODUCTS";

const url = "La que vaya a ser";

export const getAllProducts = () => {
    return async (dispatch) =>{
        const resp = await axios(`${url}/products`);
        return dispatch({type: GET_ALL_PRODUCTS, payload: resp.data})
    }
}

export const getDetailProducts = (id_products) =>{
    return async (dispatch) =>{
        const {data} = await axios.get(`${url}/products/${id_products}`);
        return dispatch({type: GET_DETAIL_PRODUCTS, payload: data})
    }
}
