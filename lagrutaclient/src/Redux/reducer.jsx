/* aquí deberian ir las actions */
import {
  CLEANDETAIL,
  GET_ALL_PRODUCTS,
  GET_DETAIL_PRODUCTS,
  GET_ACTIVITY,
  GET_DETAIL_ACTIVITY,
  GET_TYPEACTY,
} from "./actions";

const initialstate = {
  activity: [],
  allactivity: [],
  activityTypes: [],
  activityDetail: [],
  allProducts: [],
  ProductsDetail: [],
};

function rootReducer(state = initialstate, action) {
  switch (action.type) {
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

    case GET_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
        allactivity: action.payload,
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

    /* distintos casos */

    default:
      return state;
  }
}

export default rootReducer;
