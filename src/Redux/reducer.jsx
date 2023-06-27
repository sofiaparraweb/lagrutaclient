import {
  CLEANDETAIL,
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_TYPES,
  GET_DETAIL_PRODUCTS,
  FILTER_BY_NAME,
  FILTER_BY_TYPE,
  ORDER_BY_PRICE,
  GET_CART,
  ADD_TO_CART,
  DELETE_ALL_CART,
  DELETE_CARRITO,
  PUT_AMOUNT_CART,
  GET_ALL_ACTIVITY,
  GET_DETAIL_ACTIVITY,
  GET_TYPEACTY,
  FETCH_PROFILE,
  CREATE_PROFILE,
  UPDATE_PROFILE,
  POST_NEWS_DASHBOARD,
  SET_USER_ID
} from "./actions";

const initialstate = {
  activity: [],
  allActivity: [],
  activityTypes: [],
  activityDetail: [],
  allProducts: [],
  allProductTypes: [],
  products: [],
  ProductsDetail: [],
  Carrito: [],
  CarritoProductos: [],
  profile: null,
  userId: null,
};

function rootReducer(state = initialstate, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload, 
        products: action.payload,
      };

    case GET_ALL_PRODUCTS_TYPES:
      return {
        ...state,
        allProductTypes: action.payload,
      };

    case GET_DETAIL_PRODUCTS:
      return {
        ...state,
        ProductsDetail: action.payload,
      };
    
    case FILTER_BY_NAME:
      return {
        ...state,
        products: action.payload,
      };

    case FILTER_BY_TYPE:
      return {
        ...state,
        products: action.payload,
      };

    case ORDER_BY_PRICE:
      return {
        ...state,
        products: action.payload,
      };

    case GET_CART:
      return {
        ...state,
        Carrito: action.payload,
      };
    
    case ADD_TO_CART:
      let productToAdd = state.Carrito.find((product) => product.product_id === action.payload)
      if (productToAdd.quantity >= 1) {
        state = {
          ...state,
          Carrito: state.Carrito.map((c) =>
            c.product_id === action.payload ? { ...c, quantity: c.quantity + 1 } : c
          ),
        };
        localStorage.setItem("Carrito", JSON.stringify(state.Carrito));
      } else {
        state = {
          ...state,
          Carrito: state.Carrito.filter((c) => c.product_id !== action.payload),
        };
        localStorage.setItem("Carrito", JSON.stringify(state.Carrito));
      }
      return state;

    case DELETE_ALL_CART:
      return {
        ...state,
        Carrito: action.payload,
      };

      // case CLEAR_CART:
      // state = {
      //   ...state,
      //   cart: [],
      // };
      // localStorage.setItem("cart", JSON.stringify(state.cart));
      // return state;

    case DELETE_CARRITO:
      return {
        ...state,
        Carrito: state.Carrito.filter((cart) => cart.product_id !== action.payload),
      };

    case PUT_AMOUNT_CART:
      return {
        ...state,
        CarritoProductos: action.payload,
      };
      
    case GET_ALL_ACTIVITY:
      return {
        ...state,
        allActivity: action.payload,
      };

    case GET_DETAIL_ACTIVITY:
      return {
        ...state,
        activityDetail: action.payload,
      };

    case GET_TYPEACTY:
      return {
        ...state,
        activityTypes: action.payload,
      };

    case CLEANDETAIL:
      return {
        ...state,
        activityDetail: {},
      };
    
    case FETCH_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    case CREATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    case UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
  
    case SET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
  
    case POST_NEWS_DASHBOARD:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default rootReducer;
