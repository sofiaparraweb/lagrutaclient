import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_DETAIL_PRODUCTS = "GET_DETAIL_PRODUCTS";
export const GET_ACTIVITY = "GET_NEWS";
export const GET_DETAIL_ACTIVITY = "GET_DETAIL_ACTIVITY";
export const CLEANDETAIL = "CREALDETAIL";
export const GET_TYPEACTY = "GET_TYPEACTY"



const LOCAL_URL = 'http://localhost:3001';


export function getActivity() {
  return async function (dispatch) {
    try {
     const res = await axios.get(`${LOCAL_URL}/activity/offset?offset=0`);
      return dispatch({
        type: GET_ACTIVITY,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getTypeActi () {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${LOCAL_URL}/byType`);
      return dispatch({
        type: GET_TYPEACTY, 
        payload: res.data
      })
    } catch (err) {
      console.error(err);
    }
  }
}

export function getActiId (id_activity) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${LOCAL_URL}/activity/${id_activity}`);
      return dispatch({
        type: GET_DETAIL_ACTIVITY,
        payload: res.data
      })
    }
    catch (err) {
      console.error("Error", err);
    }
  }
}

export const cleanDetail = () => {
  return { type: CLEANDETAILCLEANDETAIL }
}


/* tienda */

const url = "http://localhost:3001";

export const getAllProducts = () => {
    return async (dispatch) =>{
        const resp = await axios(`${url}/products/`);
        return dispatch({type: GET_ALL_PRODUCTS, payload: resp.data})
    }
}

export const getDetailProducts = (id_products) =>{
    return async (dispatch) =>{
        const {data} = await axios.get(`${url}/products/${id_products}`);
        return dispatch({type: GET_DETAIL_PRODUCTS, payload: data})
    }
}

