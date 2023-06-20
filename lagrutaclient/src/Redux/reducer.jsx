import {
  CLEANDETAIL,
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_TYPES,
  GET_DETAIL_PRODUCTS,
  FILTER_BY_NAME,
  FILTER_BY_TYPE,
  GET_ALL_ACTIVITY,
  GET_DETAIL_ACTIVITY,
  GET_TYPEACTY,
  FETCH_PROFILE_SUCCESS,
  CREATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  ORDER_BY_PRICE,
  // ADD_PRODUCT,
  // DELETE_PRODUCT
} from "./actions"

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
  profile: null,
 };

function rootReducer(state = initialstate, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload, products: action.payload
      };

    case GET_ALL_PRODUCTS_TYPES:
      return {
        ...state,
        allProductTypes: action.payload
      }

    case GET_DETAIL_PRODUCTS:
      return {
        ...state,
        ProductsDetail: action.payload,
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

    case FILTER_BY_NAME:
      return { ...state, products: action.payload };
    case FILTER_BY_TYPE:
      return {...state, products: action.payload};
    case ORDER_BY_PRICE:
      return {...state, orderProducts: action.payload}
    case FETCH_PROFILE_SUCCESS: 
      case CREATE_PROFILE_SUCCESS:
        case UPDATE_PROFILE_SUCCESS:
          return { ...state, profile: action.payload };
    default:
      return state;
  }
}

export default rootReducer;

