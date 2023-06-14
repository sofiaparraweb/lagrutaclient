/* aquí deberian ir las actions */
import {GET_ALL_PRODUCTS, GET_DETAIL_PRODUCTS} from "./actions"

const initialstate = {
  Noticias: [],
  allProducts: [{
    id: 1, 
    name: "remera blanca", 
    price: 100, 
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsublitextil.com.ar%2Fproductos%2Fremera-adulto-sublimable%2F&psig=AOvVaw3zq9FNNJeW4JVGF5uAJXUF&ust=1686788224614000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKicyvm9wf8CFQAAAAAdAAAAABAE",
    descripction: "remera blanca",
    stock: 5,
},
{
    id: 2, 
    name: "remera negra", 
    price: 100, 
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpiet.com.ar%2Fproductos%2Fremera-negra-cuadrado-blanco%2F&psig=AOvVaw01WCnbXLC6A1z68EE_qa3X&ust=1686788342790000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCmlrK-wf8CFQAAAAAdAAAAABAE",
    descripction: "remera negra",
    stock: 6,
},
{
    id: 3, 
    name: "remera azul", 
    price: 100, 
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpda.com.ar%2Fproductos%2Fremera-azul%2F&psig=AOvVaw3tdRD4BLSNxc9q0ZYQd4Kc&ust=1686788454076000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNin8ea-wf8CFQAAAAAdAAAAABAE",
    descripction: "remera azul",
    stock: 3,
},
{
    id: 4, 
    name: "remera roja", 
    price: 100, 
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farticulo.mercadolibre.com.ar%2FMLA-690151182-remera-roja-lisa-para-trabajo-_JM&psig=AOvVaw2kPfy10QxLXacyQIVrASPn&ust=1686788507428000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjGuIC_wf8CFQAAAAAdAAAAABAE",
    descripction: "remera roja",
    stock: 3,
},
{
    id: 5, 
    name: "remera verde", 
    price: 100, 
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpda.com.ar%2Fproductos%2Fremera-verde%2F&psig=AOvVaw0ZmCzlyza6tmOvdf-AXDGT&ust=1686788550130000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjx8JS_wf8CFQAAAAAdAAAAABAE",
    descripction: "remera verde",
    stock: 3,
},
{
    id: 6, 
    name: "remera amarilla", 
    price: 100, 
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Flistado.mercadolibre.com.ar%2Fremera-amarilla&psig=AOvVaw0ni8ItFGy1StZ5GiWj0y-5&ust=1686788605919000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJCbmbG_wf8CFQAAAAAdAAAAABAE",
    descripction: "remera amarilla",
    stock: 3,
},
{
    id: 7, 
    name: "gorra", 
    price: 150, 
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.redsportonline.com.ar%2Fgorra-nike-l91-novelty-cap-unisex-cu9892-025%2Fp&psig=AOvVaw1iOvXhX7F-134rtPW_-ao0&ust=1686788389600000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCkqMi-wf8CFQAAAAAdAAAAABAE",
    descripction: "gorra nike",
    stock: 3,
}], //puse productos de prueba
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
