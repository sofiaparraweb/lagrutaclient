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
export const FETCH_PROFILE = "FETCH_PROFILE";
export const CREATE_PROFILE = "CREATE_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const POST_NEWS_DASHBOARD = "POST_NEWS_DASHBOARD";
export const SET_USER_ID = 'SET_USER_ID';
export const POST_DONACIONES = "POST_DONACIONES"
export const FORM_VOLUNTARIO = 'FORM_VOLUNTARIO';
export const FORM_FOOTER = 'FORM_FOOTER';
export const FORM_PADRINO = 'FORM_PADRINO';
export const FORM_DONACION = 'FORM_DONACION';

export const url = "http://localhost:3001";
// export const url = "https://lagruta.onrender.com";
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
export const getCarrito = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/cart/${userId}`);
      dispatch({ type: GET_CART, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

// ----------Agregar a carrito
export const addToCart = (userId, product_id, quantity) => {
  return async (dispatch) =>{
    try {
        const response = await axios.post(`${url}/cart/add?user_id=${userId}&product_id=${product_id}&quantity=${quantity}`)
        console.log(response.data);
        dispatch({ type: ADD_TO_CART, payload: response.data})
    } catch (error){
      console.log(error);
    }
  }
}

// ----------Borrar todo el carrito
export const deleteAllCarrito = (userId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${url}/cart?user_id=${userId}`);

      dispatch({ type: DELETE_ALL_CART, payload: [] });
    } catch (error) {
      console.log(error);       
    } 
  };
};

// ----------Borrar un elemento
export const deleteCarrito = (userId, product_id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${url}/cart?userId=${userId}&product_id=${product_id}`);
      dispatch({ type: DELETE_CARRITO, payload: product_id });
    } catch (error) {
      console.log(error);  
    }
  };
};

// export const amountCarrito = (value, userId, product_id) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.put(
//         `${url}/cart/${userId}/${product_id}?putAmount=${value}`
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

export const createProfile = (newUser) => {
  return async (dispatch) => {
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
    } catch (error) {
      console.log(error);
    }
  };
};


export const getProfile = (idUser) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/user/${idUser}`);
      dispatch({
        type: FETCH_PROFILE,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};


export const updateProfile = (newProfile) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${url}/user/edit`, {
       mail: 'sofiparra44@gmail.com',
       fullName: 'sofi'
      });
      console.log(response)
      dispatch({
        type: UPDATE_PROFILE,
        payload: response.data,
      });
    } catch (error) {
      console.log({error: error.message});
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
      const response = await axios.post(`${LOCAL}/payment/donation/create-order/`, data);

      if (response.data.success) {
        console.log("La información se envió correctamente");
      }

      dispatch({ type: POST_DONACIONES, payload: response.data });

    } catch (error) {
      console.log("Error al enviar la información al backend", error);

      dispatch({ type: "ENVIO_INFORMACION_ERROR", payload: error });
    }
  };
};



/* -----------------------------formulario----------------------------- */

export const formVoluntario = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/form/formVoluntario`, formData)
      dispatch ({
        type: 'FORM_VOLUNTARIO',
        payload: response.data,
      });
      console.log('funcion mail voluntario')
    } catch (error) {
      console.log(error);
    }
  };
};

export const formPadrino = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/form/formPadrino`, formData)
      dispatch ({
        type: 'FORM_PADRINO',
        payload: response.data,
      });
      console.log('funcion mail padrino')
    } catch (error) {
      console.log(error);
    }
  };
};

export const formFooter = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/form/formFooter`, formData)
      dispatch ({
        type: 'FORM_FOOTER',
        payload: response.data,
      });
      console.log('funcion mail footer')
    } catch (error) {
      console.log(error);
    }
  };
};

export const formDonacion = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/form/formDonacion`, formData)
      dispatch ({
        type: 'FORM_DONACION',
        payload: response.data,
      });
      console.log('funcion mail Donacion')
    } catch (error) {
      console.log(error);
    }
  };
};
