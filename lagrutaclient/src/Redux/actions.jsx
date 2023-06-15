import axios from "axios";

export const GET_NEWS = "GET_NEWS";

export function getNews() {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:5173/news`);
      return dispatch({
        type: GET_NEWS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_DETAIL_PRODUCTS = "GET_DETAIL_PRODUCTS";

const url = "http://localhost:3001";

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

