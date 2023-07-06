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
  CARGAR_PRODUCTOS,
  QUITAR_PRODUCTOS,
  DELETE_ALL_CART,
  DELETE_CARRITO,
  PUT_AMOUNT_CART,
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
  FORM_VOLUNTARIO,
  GET_ALL_USERS,
  DELETE_USER,
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
  donaciones: {},
  userId: "",
  userInfo: [],
  forms: [], 
  allUsers: [],
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

      case GET_ALL_USERS:
        return {
          ...state,
          allUsers: action.payload
        }

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

    // case CARGAR_PRODUCTOS:
    //   {
    //     const { userId, id, name, price, stock, image } = action.payload;
    //     const existingProduct = state.Carrito.find(item => item.id === id);
    //     if (existingProduct) {
    //       if (existingProduct.quantity < stock) {
    //         return {
    //           ...state,
    //           Carrito: state.Carrito.map(item =>
    //             item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    //           )
    //         };
    //       } else {
    //         return state; // No se actualiza el estado si no hay stock suficiente
    //       }
    //     } else {
    //       return {
    //         ...state,
    //         Carrito: [ ...state.Carrito, {
    //             id,
      //           name,
      //           image,
      //           price,
      //           stock,
      //           quantity: 1
      //       }]
      //     }
      //   }
      // }
      // return state;

    case ADD_TO_CART:
      return {
        ...state,
        Carrito: [...state.Carrito, action.payload],
      };

    case QUITAR_PRODUCTOS:
      return {
        ...state,
        Carrito: state.Carrito.filter((cart) => cart.id !== action.payload),
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

      case DELETE_USER:
        return {
          ...state,
          allUsers: state.allUsers.filter(
            (us) => us.id !== action.payload
          ),
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

    //=====>>>caso donaciones<<<=====// 
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
