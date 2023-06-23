import axios from "axios";

export const GET_ALL_ACTIVITY = "GET_ALL_ACTIVITY";
export const GET_DETAIL_ACTIVITY = "GET_DETAIL_ACTIVITY";
export const CLEANDETAIL = "CREALDETAIL";
export const GET_TYPEACTY = "GET_TYPEACTY";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ALL_PRODUCTS_TYPES = "GET_ALL_PRODUCTS_TYPES";
export const GET_DETAIL_PRODUCTS = "GET_DETAIL_PRODUCTS";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const GET_CART = "GET_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_ALL_CART = "DELETE_ALL_CART";
export const DELETE_CARRITO = "DELETE_CARRITO";
export const PUT_AMOUNT_CART = "PUT_AMOUNT_CART";

export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const CREATE_PROFILE_SUCCESS = "CREATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const POST_NEWS_DASHBOARD = "POST_NEWS_DASHBOARD";

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


/* -----------------------------tienda----------------------------- */

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

/* -----------------------------carrito */
// ----------Traer el carrito
export const getCarrito = (user_id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/cart/${user_id}`);
      dispatch({ type: GET_CART, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

// ----------Agregar a carrito
export const addToCart = (user_id, product_id, quantity) => {
  return async (dispatch) =>{
    try {
      const response = await axios.post(`${url}/cart/add?user_id=${user_id}&product_id=${product_id}&quantity=${quantity}`)
      dispatch({ type: ADD_TO_CART, payload: response.data})
    }catch (error){
      console.log(error);
    }
  }
}

// ----------Borrar todo el carrito
export const deleteAllCarrito = (user_id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${url}/cart?user_id=${user_id}`);

      dispatch({ type: DELETE_ALL_CART, payload: [] });
    } catch (error) {
      console.log(error);       
    }
  };
};

// ----------Borrar un elemento
export const deleteCarrito = (user_id, product_id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${url}/cart?user_id=${user_id}&product_id=${product_id}`);
      dispatch({ type: DELETE_CARRITO, payload: product_id });
    } catch (error) {
      console.log(error);  
    }
  };
};

// export const amountCarrito = (value, user_id, product_id) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.put(
//         `${url}/cart/${user_id}/${product_id}?putAmount=${value}`
//       );
//       dispatch({
//         type: PUT_AMOUNT_CART,
//         payload: { id: product_id, amount: response.data },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };


/* -----------------------------profile----------------------------- */

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

/* -----------------------------dashboard----------------------------- */

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product
  }
}

export const deleteProduct = (product) => {
  return {
    type: DELETE_PRODUCT,
    payload: product
  }
}

export function create_news (payload) {
  return async function (payload) {
    try {
      var res = await axios.post(`${LOCAL}/`, payload);
      return {
        type: POST_NEWS_DASHBOARD,
        res
      }
    } catch (err) {
      console.log("Falta información", err)
    }
   
 }
}