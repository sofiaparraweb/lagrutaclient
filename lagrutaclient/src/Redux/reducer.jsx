/* aquí deberian ir las actions */
import {GET_ALL_PRODUCTS, GET_DETAIL_PRODUCTS} from "./actions"

const initialstate = {
  Noticias: [],
  allProducts: [],
  ProductsDetail: [],
 };

function rootReducer(state = initialstate, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, allProducts: action.payload};
    case GET_DETAIL_PRODUCTS:
      return { ...state, ProductsDetail: action.payload};
    /* distintos casos */

    default:
      return state;
  }
}

export default rootReducer;
