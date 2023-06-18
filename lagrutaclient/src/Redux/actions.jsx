import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_DETAIL_PRODUCTS = "GET_DETAIL_PRODUCTS";
export const GET_NEWS = "GET_NEWS";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE"
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const CREATE_PROFILE_SUCCESS = "CREATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";

const url = "http://localhost:3001";

export function getNews() {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${url}/news`);
      // const res = await axios.get("http://localhost:3001/activity/offset?offset=0");
      return dispatch({
        type: GET_NEWS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export const getAllProducts = () =>{
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

export const filterByName = (payload) =>{
  return { type: FILTER_BY_NAME, payload };
}

export const filterByType = (productType) => {
  return async (dispatch) => {
    const response = await axios.get(`${url}/filter/byType?productType=${productType}`);
    dispatch({
      type: FILTER_BY_TYPE,
      payload: response.data
    })
    // try {
    //   const response = await axios.get(`${url}/filter/byType?productType=${productType}`);
    //   dispatch({
    //     type: 'FILTER_BY_TYPE',
    //     payload: response.data.filteredByType
    //   });
    // } catch (error) {
    //   dispatch({
    //     type: 'FILTER_BY_TYPE_FAILURE',
    //     payload: error.response.data.error
    //   });
    // }
  };
};

export const orderByPrice = (price) =>{
  return async (dispatch) => {
    const response = await axios.get(`${url}/order/byPrice?price=${price}`);
    dispatch({
      type: 'ORDER_BY_PRICE',
      payload: response.data
    })
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
  };
};
