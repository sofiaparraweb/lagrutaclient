import {
  CLEANDETAIL,
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_TYPES,
  GET_DETAIL_PRODUCTS,
  FILTER_BY_NAME,
  FILTER_BY_TYPE,
  GET_CART,
  ADD_TO_CART,
  DELETE_ALL_CART,
  DELETE_CARRITO,
  PUT_AMOUNT_CART,
  GET_ALL_ACTIVITY,
  GET_DETAIL_ACTIVITY,
  GET_TYPEACTY,
  FETCH_PROFILE_SUCCESS,
  CREATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  ORDER_BY_PRICE,
  POST_NEWS_DASHBOARD,
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
      const newProduct = action.payload;
      const existingProduct = state.Carrito.find((product) => product.id === newProduct.id);
  
      if (existingProduct) {
        const updatedCart = state.Carrito.map((product) => {
          if (product.id === existingProduct.id) {
            return { ...product, cantidad: product.cantidad + 1 };
          }
          return product;
        });
        return { ...state, Carrito: updatedCart };
      } else {
        const updatedCart = [...state.Carrito, newProduct];
        return {
          ...state,
          Carrito: updatedCart,
        };
      }

    case DELETE_ALL_CART:
      return {
        ...state,
        Carrito: action.payload,
      };

    case DELETE_CARRITO:
      return {
        ...state,
        Carrito: state.Carrito.filter((cart) => cart.id !== action.payload),
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

    case FETCH_PROFILE_SUCCESS:
    case CREATE_PROFILE_SUCCESS:
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
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
