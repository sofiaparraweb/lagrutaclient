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
  SET_USER_ID,
  POST_DONACIONES,
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
  donaciones: [],
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
      const existingProduct = state.Carrito.find((prod) => prod.product_id === newProduct.id);
  
      if (existingProduct) {
        const updatedCart = state.Carrito.map((product) => {
          if (product.product_id === existingProduct.id) {
            return { ...product, quantity: product.quantity + 1 };
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

    //=====>>>caso donaciones<<<=====// 
      case POST_DONACIONES:
      return {
        ...state,
        donaciones: [...state.donaciones, action.payload],
      };

    default:
      return state;
  }
}

export default rootReducer;
