import {
  CLEANDETAIL,
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_TYPES,
  FILTER_BY_NAME,
  FILTER_BY_TYPE,
  ORDER_BY_PRICE,
  GET_CART,
  ADD_TO_CART,
  DELETE_ALL_CART,
  DELETE_CARRITO,
  CHANGE_QUANTITY,
  POST_PAGO_TIENDA,
  GET_ALL_ACTIVITY,
  GET_DETAIL_ACTIVITY,
  GET_TYPEACTY,
  FETCH_PROFILE,
  GET_USERID,
  CREATE_PROFILE,
  UPDATE_PROFILE,
  POST_NEWS_DASHBOARD,
  SET_USER_ID,
  POST_DONACIONES,
  FORM_VOLUNTARIO
} from "./actions";

const initialstate = {
  activity: [],
  allActivity: [],
  activityTypes: [],
  activityDetail: [],
  allProducts: [],
  allProductTypes: [],
  products: [],
  Carrito: [],
  CarritoProductos: [],
  profile: null,
  donaciones: {},
  userId: "",
  userInfo: [],
  forms: [], 
};

function rootReducer(state = initialstate, action) {
  switch (action.type) {
    // --------------------------------------------------TIENDA--------------------------------------------------
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

    // --------------------------------------------------CARRITO--------------------------------------------------  
    case GET_CART:
      return {
        ...state,
        Carrito: action.payload,
      };

    case CHANGE_QUANTITY: {
      const updatedCart = state.Carrito.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });

      return {
        ...state,
        Carrito: updatedCart,
      };
    }

    case ADD_TO_CART:
      return {
        ...state,
        Carrito: [...state.Carrito, action.payload],
      };

    case DELETE_ALL_CART:
      return {
        ...state,
        Carrito: action.payload,
      };

    case DELETE_CARRITO:
      return {
        ...state,
        Carrito: state.Carrito.filter((cart) => cart.userId !== action.payload),
      };

    case POST_PAGO_TIENDA:
      return {
        ...state,
        CarritoProductos: action.payload,
      };
    
    // --------------------------------------------------NOTICIAS--------------------------------------------------  
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
    
    // --------------------------------------------------USUARIOS--------------------------------------------------  
    case FETCH_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    case GET_USERID:
      return {
        ...state,
        userInfo: action.payload,
      }

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

    // --------------------------------------------------DONACIONES--------------------------------------------------
    case POST_DONACIONES:
      return {
        ...state,
        donaciones: action.payload,
      };
      
    case FORM_VOLUNTARIO:
      return {
        ...state,
      }

    default:
      return state;
  }
}

export default rootReducer;
