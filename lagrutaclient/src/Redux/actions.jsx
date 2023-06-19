import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ALL_PRODUCTS_TYPES = "GET_ALL_PRODUCTS_TYPES";
export const GET_DETAIL_PRODUCTS = "GET_DETAIL_PRODUCTS";
export const GET_ALL_ACTIVITY = "GET_ALL_ACTIVITY";
export const GET_DETAIL_ACTIVITY = "GET_DETAIL_ACTIVITY";
export const CLEANDETAIL = "CREALDETAIL";
export const GET_TYPEACTY = "GET_TYPEACTY";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const CREATE_PROFILE_SUCCESS = "CREATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";

const url = "http://localhost:3001";


export function getAllActivity() {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${url}/activity?offset=0`);
      return dispatch({
        type: GET_ALL_ACTIVITY,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

const LOCAL = "http://localhost:3001"

export function getTypeActi() {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${LOCAL}/activityTypes`);
      return dispatch({
        type: GET_TYPEACTY,
        payload: res.data,
      });
    } catch (err) {
      console.error('hola', err);
    }
  }
}

  
 export function getActiId(id) {
    return async function (dispatch) {
      try {
        const res = await axios.get(`${url}/activity/${id}`);
        console.log(res.data)
      return dispatch({
        type: GET_DETAIL_ACTIVITY,
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  }
};

export function cleanDetail () {
  return { type: CLEANDETAIL }
  }   



/* tienda */

export const getAllProducts = () =>{
  return async (dispatch) =>{
      const resp = await axios(`${url}/products/`);
      return dispatch({type: GET_ALL_PRODUCTS, payload: resp.data})
  }
}

export const getAllProductTypes = () =>{
  return async (dispatch) =>{
      const resp = await axios(`${url}/productsTypes/`);
      return dispatch({type: GET_ALL_PRODUCTS_TYPES, payload: resp.data})
  }
}

export const getDetailProducts = (id_products) =>{
  return async (dispatch) =>{
      const {data} = await axios.get(`${url}/products/${id_products}`);
      return dispatch({type: GET_DETAIL_PRODUCTS, payload: data})
  }
}

export const filterByName = (name) =>{
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/filter/name?name=${name}`);
      dispatch({ type: FILTER_BY_NAME, payload: response.data.filteredName })
    } catch (error){
      console.log(error);
    }
  };
};

export const filterByType = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/filter/byType?name=${name}`);
      dispatch({ type: FILTER_BY_TYPE, payload: response.data.filteredByType })
    } catch (error){
      console.log(error);
    }
  };
};

export const orderByPrice = (price) =>{
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/order/byPrice?price=${price}`);
      dispatch({ type: ORDER_BY_PRICE, payload: response.data })
    } catch (error){
      console.log(error);
    }
  }
}

export const fetchProfile = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/${userId}`);
      dispatch({
        type: FETCH_PROFILE_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createProfile = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}`, userData);
      dispatch({
        type: CREATE_PROFILE_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProfile = (userId, updatedUserData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${url}/status/${userId}`, updatedUserData);
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
