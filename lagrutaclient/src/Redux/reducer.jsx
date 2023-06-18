import {GET_ALL_PRODUCTS, GET_DETAIL_PRODUCTS, GET_NEWS, FILTER_BY_NAME, FILTER_BY_TYPE} from "./actions"

      const initialstate = {
        noticias: [],
        allProducts: [],
        products: [],
        ProductsDetail: [],
       };
      
      function rootReducer(state = initialstate, action) {
        switch (action.type) {
          case GET_NEWS:
      return {...state, noticias: action.payload};
          case GET_ALL_PRODUCTS:
            return { ...state, allProducts: action.payload};
          case GET_DETAIL_PRODUCTS:
            return { ...state, ProductsDetail: action.payload};
          case FILTER_BY_NAME:
            return {...state, products: action.payload};
          case FILTER_BY_TYPE:
            return {...state, products: action.payload};
      
          default:
            return state;
        }
      }

export default rootReducer;
