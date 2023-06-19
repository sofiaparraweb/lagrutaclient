<<<<<<< HEAD
/* aquí deberian ir las actions */
import {
  CLEANDETAIL,
  GET_ALL_PRODUCTS,
  GET_DETAIL_PRODUCTS,
  FILTER_BY_NAME,
  FILTER_BY_TYPE,
  GET_ALL_ACTIVITY,
  GET_DETAIL_ACTIVITY,
  GET_TYPEACTY,
} from "./actions";

const initialstate = {
  activity: [],
  allActivity: [],
  activityTypes: [],
  activityDetail: [],
  allProducts: [],
  products: [],
  ProductsDetail: [],
};
=======
import {
  GET_ALL_PRODUCTS, 
  GET_DETAIL_PRODUCTS, 
  GET_NEWS, 
  FILTER_BY_NAME, 
  FILTER_BY_TYPE,
  FETCH_PROFILE_SUCCESS,
  CREATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  ORDER_BY_PRICE
} from "./actions"

const initialstate = {
  noticias: [],
  allProducts: [],
  products: [],
  ProductsDetail: [],
  profile: null,
 };
>>>>>>> main

function rootReducer(state = initialstate, action) {
  switch (action.type) {
    case GET_NEWS:
      return {...state, noticias: action.payload};
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };

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
<<<<<<< HEAD

    case FILTER_BY_TYPE:
      return { ...state, products: action.payload };
    /* distintos casos */

=======
    case FILTER_BY_TYPE:
      return {...state, products: action.payload};
    case ORDER_BY_PRICE:
      return {...state, allProducts: action.payload}
    case FETCH_PROFILE_SUCCESS: 
      case CREATE_PROFILE_SUCCESS:
        case UPDATE_PROFILE_SUCCESS:
          return { ...state, profile: action.payload };
>>>>>>> main
    default:
      return state;
  }
}

export default rootReducer;

