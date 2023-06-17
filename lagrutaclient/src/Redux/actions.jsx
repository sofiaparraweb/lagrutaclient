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

export const updateUserRequest = () => ({
  type: UPDATE_USER_REQUEST,
});

export const updateUserSuccess = () => ({
  type: UPDATE_USER_SUCCESS,
});

export const updateUserFailure = (error) => ({
  type: UPDATE_USER_FAILURE,
  payload: error,
});

export const fetchProfileSuccess = (profileData) => ({
  type: FETCH_PROFILE_SUCCESS,
  payload: profileData,
});

export const fetchProfileFailure = (error) => ({
  type: FETCH_PROFILE_FAILURE,
  payload: error,
});

export const updateProfileSuccess = (profileData) => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: profileData,
});

export const updateProfileFailure = (error) => ({
  type: UPDATE_PROFILE_FAILURE,
  payload: error,
});

export const fetchProfile = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/users/${userId}`);
      dispatch(fetchProfileSuccess(response.data));
    } catch (error) {
      dispatch(fetchProfileFailure(error.message));
    }
  };
};

export const updateProfile = (userId, userData) => {
  return async (dispatch) => {
    try {
      dispatch(updateUserRequest());
      const response = await axios.put(`${url}/users/${userId}`, userData);
      dispatch(updateProfileSuccess(response.data));
    } catch (error) {
      dispatch(updateProfileFailure(error.message));
    }
  };
};
