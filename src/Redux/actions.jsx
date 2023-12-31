import { User } from "@auth0/auth0-spa-js";
import axios from "axios";
import Swal from "sweetalert2";

export const GET_ALL_ACTIVITY = "GET_ALL_ACTIVITY";
export const GET_DETAIL_ACTIVITY = "GET_DETAIL_ACTIVITY";
export const CLEANDETAIL = "CREALDETAIL";
export const GET_TYPEACTY = "GET_TYPEACTY";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ALL_PRODUCTS_TYPES = "GET_ALL_PRODUCTS_TYPES";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const GET_CART = "GET_CART";
export const ADD_TO_CART = "ADD_TO_CART";
// export const CARGAR_PRODUCTOS = 'CARGAR_PRODUCTOS';
export const QUITAR_PRODUCTOS = 'QUITAR_PRODUCTOS';
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const DELETE_ALL_CART = "DELETE_ALL_CART";
export const DELETE_CARRITO = "DELETE_CARRITO";
export const CHANGE_QUANTITY = "CHANGE_QUANTITY";
export const POST_PAGO_TIENDA = "POST_PAGO_TIENDA";
export const FETCH_PROFILE = "FETCH_PROFILE";
export const GET_PROFILE_MAIL = 'GET_PROFILE_MAIL';
export const CREATE_PROFILE = "CREATE_PROFILE";
export const GET_USERID = "GET_USERID";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const POST_NEWS_DASHBOARD = "POST_NEWS_DASHBOARD";
export const SET_USER_ID = "SET_USER_ID";
export const POST_DONACIONES = "POST_DONACIONES";
//export const ENVIAR_INFORMACION = "ENVIAR_INFORMACION";
export const FORM_VOLUNTARIO = "FORM_VOLUNTARIO";
export const FORM_FOOTER = "FORM_FOOTER";
export const FORM_PADRINO = "FORM_PADRINO";
export const FORM_DONACION = "FORM_DONACION";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const DELETE_USER = "DELETE_USER";
export const GET_DETAIL_PRODUCTS = "GET_DETAIL_PRODUCTS"

export const url = "http://localhost:3001";
//export const url = "https://lagruta.onrender.com";
// const LOCAL = "http://localhost:3001";

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
  };
}

export function getTypeActi() {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${url}/activityTypes`);
      return dispatch({
        type: GET_TYPEACTY,
        payload: res.data,
      });
    } catch (err) {
      console.error("hola", err);
    }
  };
}

export function getActiId(id) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${url}/activity/${id}`);
      // console.log(res.data)
      return dispatch({
        type: GET_DETAIL_ACTIVITY,
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
}

export function cleanDetail() {
  return { type: CLEANDETAIL };
}

/* -----------------------------tienda----------------------------- */

export const getAllProducts = () => {
  return async (dispatch) => {
    const resp = await axios(`${url}/products/`);
    return dispatch({ type: GET_ALL_PRODUCTS, payload: resp.data });
  };
};

export const getAllProductTypes = () => {
  return async (dispatch) => {
    const resp = await axios(`${url}/productsTypes/`);
    return dispatch({ type: GET_ALL_PRODUCTS_TYPES, payload: resp.data });
  };
};

export const getDetailProducts = (id_products) =>{
  return async (dispatch) =>{
    const {data} = await axios.get(`${url}/products/${id_products}`);
    return dispatch({type: GET_DETAIL_PRODUCTS, payload: data})
  }
}

export const filterByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/filter/name?name=${name}`);
      dispatch({ type: FILTER_BY_NAME, payload: response.data.filteredName });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterByType = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/filter/byType?name=${name}`);
      dispatch({ type: FILTER_BY_TYPE, payload: response.data.filteredByType });
    } catch (error) {
      console.log(error);
    }
  };
};

export const orderByPrice = (price) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/order/byPrice?price=${price}`);
      dispatch({ type: ORDER_BY_PRICE, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

/* -----------------------------carrito----------------------------- */
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

// ----------Agregar al carrito en Base de Datos desde la tienda
export const addToCart = (user_id, id, quantity) => {
  return async (dispatch) =>{
    try {
      const response = await axios.post(`${url}/cart/add?user_id=${user_id}&product_id=${id}&quantity=${quantity}`)
      dispatch({ type: ADD_TO_CART, payload: response.data})
    } catch (error){
      console.log(error);
    }
  }
}

// ----------Borra todo el carrito
export const deleteAllCarrito = (user_id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${url}/cart/removeAll?user_id=${user_id}`);
      dispatch({ type: DELETE_ALL_CART, payload: [] });
    } catch (error) {
      console.log(error);
    }
  };
};

// ----------Borrar un elemento del Carrito
export const deleteCarrito = (user_id, id) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `${url}/cart/remove?user_id=${user_id}&product_id=${id}`
      );
      dispatch({ type: DELETE_CARRITO, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};

// ----------Modificar cantidades desde vista Carrito
export const changeQuantity = (user_id, id, quantity) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${url}/cart?user_id=${user_id}&product_id=${id}&quantity=${quantity}`);
      dispatch({ type: CHANGE_QUANTITY, payload: response.data });
    } catch (error) {
      console.log(error);  
    }
  };
};

// ----------Para ir al formulario de pago
export const enviarDataTienda = (user_id) => {
  return async (dispatch) => {
    try {
      console.log(user_id)
      const response = await axios.post(`${url}/payment/cart/create-order/${user_id}`)
      if (response) {
        dispatch({ type: POST_PAGO_TIENDA, payload: response.data })
        return response.data;
      } 
    }catch (error) {
      console.log("Error al enviar la información al backend", error)
    }
  }
};



/* -----------------------------profile----------------------------- */

export const createProfile = (newUser) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${url}/user`, newUser);
      const userId = response.data.newUser.id;
      dispatch({
        type: SET_USER_ID,
        payload: userId,
      });
      dispatch({
        type: CREATE_PROFILE,
        payload: response.data,
      });
      dispatch(getProfile(userId));
    } catch (error) {
      console.log(error);
    }
  };
};

export function getAllUsers() {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${url}/user`);
      return dispatch({
        type: GET_ALL_USERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export const deleteUser = (id) => {
  return {
         type: "DELETE_USER",
         payload: id,
     }
 };

export const getProfile = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/user/${userId}`);
      dispatch({
        type: FETCH_PROFILE,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserId = (email) =>{
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/user/mail/${email}`);
      console.log(response);
      dispatch({
        type: GET_USERID,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const updateProfile = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${url}/user/edit`, data);
      dispatch({
        type: UPDATE_PROFILE,
        payload: response.data,
      });
      console.log('se ejecuto con exitot bbbb')
    } catch (error) {
      console.log({ error: error.message });
    }
  };
};

/* -----------------------------dashboard----------------------------- */

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const deleteProduct = (product) => {
  return {
    type: DELETE_PRODUCT,
    payload: product,
  };
};

export function create_news(payload) {
  return async function (dispatch) {
    try {
      var res = await axios.post(`${url}/activity/`, payload);
      return {
        type: POST_NEWS_DASHBOARD,
        res,
      };
    } catch (err) {
      console.log("Falta información", err);
    }
  };
}

//==========>>>Donaciones<<<==========//
 export const enviarInformacion = (data) => {
   return async (dispatch) => {
     try {
       const response = await axios.post(`${url}/payment/donation/create-order/`, data)
       if (response) {
      //   console.log("estoy en actions, La información se envió correctamente", response);
       
       dispatch({ type: POST_DONACIONES, payload: response.data })
       return response.data;
     } 
   }catch (error) {
    console.log("Error al enviar la información al backend", error)
  }
 }
};


/* -----------------------------formulario----------------------------- */

export const formVoluntario = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/form/formVoluntario`, formData);
      dispatch({
        type: "FORM_VOLUNTARIO",
        payload: response.data,
      });
      console.log("funcion mail voluntario");
    } catch (error) {
      console.log(error);
    }
  };
};

export const formPadrino = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/form/formPadrino`, formData);
      dispatch({
        type: "FORM_PADRINO",
        payload: response.data,
      });
      console.log("funcion mail padrino");
    } catch (error) {
      console.log(error);
    }
  };
};

export const formFooter = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/form/formFooter`, formData);
      dispatch({
        type: "FORM_FOOTER",
        payload: response.data,
      });
      console.log('funcion mail footer')
    } catch (error) {
      console.log("estoy en las actions", error);
    }
  };
};

export const formDonacion = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/form/formDonacion`, formData);
      dispatch({
        type: "FORM_DONACION",
        payload: response.data,
      });
      console.log("funcion mail Donacion");
    } catch (error) {
      console.log(error);
    }
  };
};
