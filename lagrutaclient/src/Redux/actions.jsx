import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_DETAIL_PRODUCTS = "GET_DETAIL_PRODUCTS";
export const GET_NEWS = "GET_NEWS";
export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const FETCH_PROFILE_FAILURE = "FETCH_PROFILE_FAILURE";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAILURE = "UPDATE_PROFILE_FAILURE";
export const SET_USER = 'SET_USER';
export const SET_USERS = 'SET_USERS'

export const getNews = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:3001/news`);
      dispatch({
        type: GET_NEWS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

const url = "http://localhost:3001";

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const resp = await axios.get(`${url}/products/`);
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: resp.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetailProducts = (id_products) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${url}/products/${id_products}`);
      dispatch({
        type: GET_DETAIL_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

