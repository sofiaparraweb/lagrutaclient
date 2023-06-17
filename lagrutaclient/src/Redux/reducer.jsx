import {
  GET_ALL_PRODUCTS,
  GET_DETAIL_PRODUCTS,
  GET_NEWS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} from "./actions";

const initialState = {
  noticias: [],
  allProducts: [],
  productsDetail: [],
  isLoading: false,
  error: null,
  profileData: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        noticias: action.payload,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case GET_DETAIL_PRODUCTS:
      return {
        ...state,
        productsDetail: action.payload,
      };
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        profileData: action.payload,
        isLoading: false,
        error: null,
      };
    case FETCH_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        profileData: action.payload,
        isLoading: false,
        error: null,
      };
    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
