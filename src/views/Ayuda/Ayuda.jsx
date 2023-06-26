// {/* <p className="lala"></p>


// Hola mi amigo. tenemos que resolver esto antes de las 17hs. Tenemos una hora y media y HAY QUE finalizar.

// Estamos haciendo el logIn conauth0 en mi aplicacion. 
// Ya esta configurado el auth0 en mi archivo app e index. El LogIn tambien esta hecho y cuando el usuario se loguea se lo redirecciona al componente "perfil"
// Debemos lograr 3 funciones a aprtir de esto:

// // 1. Cuando un usuario se crea x primera vez deberia mandarse el email y nombre al back, y crearse un id unico
// // 2. cuando un usuario inicia sesion, deberia relacionarse ese id con el email para que el suaurio pueda tener sus datos en su formulario perfil (usar funcion fetchProfile que usa una ruta tipo get)
// // 3. Cuando un usuario inciia sesion, puede editar los datos de su perfil (para eso deberia usar la action updatePrfoile, que es una ruta de tipo put)
// MI CODIGO COMPONENTE PERFIL:
// import React, { useState, useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Button, ChakraProvider, Input, Select } from "@chakra-ui/react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProfile, updateProfile, createProfile } from "../../Redux/actions";
// import "./Perfil.css"; // Importa el archivo CSS personalizado

// const Perfil = () => {
//   const { user, isAuthenticated, isLoading } = useAuth0();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [birthdate, setBirthdate] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [occupation, setOccupation] = useState("");
//   const [role, setRole] = useState("");
//   const [profileImage, setProfileImage] = useState("");

//   const dispatch = useDispatch();
//   const profile = useSelector((state) => state.profile);

//   console.log(user);

//   useEffect(() => {
//     if (isAuthenticated && user) {
//       setName(user.name || "");
//       setEmail(user.email || "");
//       setProfileImage(user.picture || "");
//     }
//     if (!profile) {
//       dispatch(createProfile({ mail: user.email, fullName: user.name }));
//     } else {
//       setName(profile.name || "");
//       setEmail(profile.email || "");
//       setBirthdate(profile.birthdate || "");
//       setPhone(profile.phone || "");
//       setAddress(profile.address || "");
//       setOccupation(profile.occupation || "");
//       setRole(profile.role || "");
//       setProfileImage(profile.image || "");
//     }
//   }, [dispatch, isAuthenticated, user, profile]);


//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleBirthdateChange = (e) => {
//     setBirthdate(e.target.value);
//   };

//   const handlePhoneChange = (e) => {
//     setPhone(e.target.value);
//   };

//   const handleAddressChange = (e) => {
//     setAddress(e.target.value);
//   };

//   const handleOccupationChange = (e) => {
//     setOccupation(e.target.value);
//   };

//   const handleRoleChange = (e) => {
//     setRole(e.target.value);
//   };

//   const handleProfileImageChange = (e) => {
//     const file = e.target.files[0];
//     const imageUrl = URL.createObjectURL(file);
//     setProfileImage(imageUrl);
//   };

//   const handleUpdateProfile = () => {
//     const updatedUserData = {
//       name,
//       email,
//       birthdate,
//       phone,
//       address,
//       occupation,
//       role,
//       profileImage,
//     };
//     dispatch(updateProfile(user.sub, updatedUserData));
//   };

//   if (isLoading) {
//     return <div>Cargando...</div>;
//   }

//   return (
//     isAuthenticated && (
//       <ChakraProvider>
//         <div className="container rounded bg-white mt-5 mb-5">
//           <div className="row">
//             <div className="d-flex justify-content-between align-items-center mb-3">
//               <h4 className="text-left profile-title">TU PERFIL</h4>
//             </div>
//             <div className="col-md-3 border-right">
//               <div className="d-flex flex-column align-items-center text-center p-3 py-5">
//                 <div className="profile-picture-container">
//                   <img
//                     className="rounded-circle profile-picture"
//                     src={profileImage || "https://www.pngmart.com/files/21/Account-Avatar-Profile-PNG-Clipart.png"}
//                     alt="Profile"
//                   />
//                   <div className="profile-picture-label">
//                     <input
//                       id="profile-picture"
//                       type="file"
//                       accept="image/*"
//                       onChange={handleProfileImageChange}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-5 border-right">
//               <div className="p-3 py-5">
//                 <div className="row mt-2">
//                   <div className="col-md-6">
//                     <label className="labels">Nombre y Apellido</label>
//                     <Input
//                       type="text"
//                       className="form-control custom-input"
//                       placeholder="Nombre completo"
//                       value={name}
//                       onChange={handleNameChange}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="labels">Email</label>
//                     <Input
//                       type="text"
//                       className="form-control custom-input"
//                       placeholder="Ingresa tu correo electrónico"
//                       value={email}
//                       onChange={handleEmailChange}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="labels">Fecha de Nacimiento</label>
//                     <Input
//                       type="date"
//                       className="form-control custom-input"
//                       placeholder="Ingresa tu fecha de nacimiento"
//                       value={birthdate}
//                       onChange={handleBirthdateChange}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="labels">Número de Teléfono</label>
//                     <Input
//                       type="text"
//                       className="form-control custom-input"
//                       placeholder="Tu número de teléfono"
//                       value={phone}
//                       onChange={handlePhoneChange}
//                     />
//                   </div>
//                   <div className="col-md-12">
//                     <label className="labels">Dirección</label>
//                     <Input
//                       type="text"
//                       className="form-control custom-input"
//                       placeholder="Tu dirección"
//                       value={address}
//                       onChange={handleAddressChange}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="labels">Ocupación</label>
//                     <Input
//                       type="text"
//                       className="form-control custom-input"
//                       placeholder="Ayúdanos a conocerte más"
//                       value={occupation}
//                       onChange={handleOccupationChange}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="labels">Rol</label>
//                     <Select
//                       className="form-control custom-select"
//                       value={role}
//                       onChange={handleRoleChange}
//                     >
//                       <option value="">Selecciona un rol</option>
//                       <option value="voluntario">Voluntario</option>
//                       <option value="padrino">Padrino</option>
//                       <option value="miembro">Miembro</option>
//                     </Select>
//                   </div>
//                 </div>
//                 <div>
//                   <Button
//                     className="profile-button"
//                     type="button"
//                     onClick={handleUpdateProfile}
//                   >
//                     Guardar cambios
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </ChakraProvider>
//     )
//   );
// };

// export default Perfil;

// CODIGO ACTIONS:
// import axios from "axios";

// export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
// export const GET_ALL_PRODUCTS_TYPES = "GET_ALL_PRODUCTS_TYPES";
// export const GET_DETAIL_PRODUCTS = "GET_DETAIL_PRODUCTS";
// export const GET_ALL_ACTIVITY = "GET_ALL_ACTIVITY";
// export const GET_DETAIL_ACTIVITY = "GET_DETAIL_ACTIVITY";
// export const CLEANDETAIL = "CREALDETAIL";
// export const GET_TYPEACTY = "GET_TYPEACTY";
// export const FILTER_BY_NAME = "FILTER_BY_NAME";
// export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
// export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
// export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
// export const CREATE_PROFILE_SUCCESS = "CREATE_PROFILE_SUCCESS";
// export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
// export const ADD_PRODUCT = "ADD_PRODUCT";
// export const DELETE_PRODUCT = "DELETE_PRODUCT";


// const url = "http://localhost:3001";


// export function getAllActivity() {
//   return async function (dispatch) {
//     try {
//       const res = await axios.get(`${url}/activity?offset=0`);
//       return dispatch({
//         type: GET_ALL_ACTIVITY,
//         payload: res.data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }

// const LOCAL = "http://localhost:3001"

// export function getTypeActi() {
//   return async function (dispatch) {
//     try {
//       const res = await axios.get(`${LOCAL}/activityTypes`);
//       return dispatch({
//         type: GET_TYPEACTY,
//         payload: res.data,
//       });
//     } catch (err) {
//       console.error('hola', err);
//     }
//   }
// }

  
//  export function getActiId(id) {
//     return async function (dispatch) {
//       try {
//         const res = await axios.get(`${url}/activity/${id}`);
//         console.log(res.data)
//       return dispatch({
//         type: GET_DETAIL_ACTIVITY,
//         payload: res.data,
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   }
// };

// export function cleanDetail () {
//   return { type: CLEANDETAIL }
//   }   



// /* tienda */

// export const getAllProducts = () =>{
//   return async (dispatch) =>{
//       const resp = await axios(`${url}/products/`);
//       return dispatch({type: GET_ALL_PRODUCTS, payload: resp.data})
//   }
// }

// export const getAllProductTypes = () =>{
//   return async (dispatch) =>{
//       const resp = await axios(`${url}/productsTypes/`);
//       return dispatch({type: GET_ALL_PRODUCTS_TYPES, payload: resp.data})
//   }
// }

// export const getDetailProducts = (id_products) =>{
//   return async (dispatch) =>{
//       const {data} = await axios.get(`${url}/products/${id_products}`);
//       return dispatch({type: GET_DETAIL_PRODUCTS, payload: data})
//   }
// }

// export const filterByName = (name) =>{
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`${url}/filter/name?name=${name}`);
//       dispatch({ type: FILTER_BY_NAME, payload: response.data.filteredName })
//     } catch (error){
//       console.log(error);
//     }
//   };
// };

// export const filterByType = (name) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`${url}/filter/byType?name=${name}`);
//       dispatch({ type: FILTER_BY_TYPE, payload: response.data.filteredByType })
//     } catch (error){
//       console.log(error);
//     }
//   };
// };

// export const orderByPrice = (price) =>{
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`${url}/order/byPrice?price=${price}`);
//       dispatch({ type: ORDER_BY_PRICE, payload: response.data })
//     } catch (error){
//       console.log(error);
//     }
//   }
// }

// export const fetchProfile = (userId) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`${url}/user/:${userId}`);
//       dispatch({
//         type: FETCH_PROFILE_SUCCESS,
//         payload: response.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const createProfile = (user) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post(`${url}/user`, user);
//       console.log(response.data);
//       dispatch({
//         type: CREATE_PROFILE_SUCCESS,
//         payload: response.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const updateProfile = (userId, updatedUserData) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.put(`${url}/user/${userId}`, updatedUserData);
//       dispatch({
//         type: UPDATE_PROFILE_SUCCESS,
//         payload: response.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

// export const addProduct = (product) => {
//   return {
//     type: ADD_PRODUCT,
//     payload: product
//   }
// }

// export const deleteProduct = (product) => {
//   return {
//     type: DELETE_PRODUCT,
//     payload: product
//   }
// }

// CODIGO REDUCER:
// import {
//   CLEANDETAIL,
//   GET_ALL_PRODUCTS,
//   GET_ALL_PRODUCTS_TYPES,
//   GET_DETAIL_PRODUCTS,
//   FILTER_BY_NAME,
//   FILTER_BY_TYPE,
//   GET_ALL_ACTIVITY,
//   GET_DETAIL_ACTIVITY,
//   GET_TYPEACTY,
//   FETCH_PROFILE_SUCCESS,
//   CREATE_PROFILE_SUCCESS,
//   UPDATE_PROFILE_SUCCESS,
//   ORDER_BY_PRICE,
//   // ADD_PRODUCT,
//   // DELETE_PRODUCT
// } from "./actions"

// const initialstate = {
//   activity: [],
//   allActivity: [],
//   activityTypes: [],
//   activityDetail: [],
//   allProducts: [],
//   allProductTypes: [],
//   products: [],
//   ProductsDetail: [],
//   Carrito: [],
//   profile: null,
//  };

// function rootReducer(state = initialstate, action) {
//   switch (action.type) {
//     case GET_ALL_PRODUCTS:
//       return {
//         ...state,
//         allProducts: action.payload, products: action.payload
//       };

//     case GET_ALL_PRODUCTS_TYPES:
//       return {
//         ...state,
//         allProductTypes: action.payload
//       }

//     case GET_DETAIL_PRODUCTS:
//       return {
//         ...state,
//         ProductsDetail: action.payload,
//       };

//     case GET_ALL_ACTIVITY:
//       return {
//         ...state,
//         allActivity: action.payload,
//       };

//     case GET_DETAIL_ACTIVITY:
//       return {
//         ...state,
//         activityDetail: action.payload,
//       };

//     case GET_TYPEACTY:
//       return {
//         ...state,
//         activityTypes: action.payload,
//       };

//     case CLEANDETAIL:
//       return {
//         ...state,
//         activityDetail: {},
//       };

//     case FILTER_BY_NAME:
//       return { ...state, products: action.payload };
//     case FILTER_BY_TYPE:
//       return {...state, products: action.payload};
//     case ORDER_BY_PRICE:
//       return {...state, products: action.payload}
    
//       case FETCH_PROFILE_SUCCESS: 
//       case CREATE_PROFILE_SUCCESS:
//         case UPDATE_PROFILE_SUCCESS:
//           return { ...state, profile: action.payload };
//     default:
//       return state;
//   }
// }

// export default rootReducer;


// ahora... este es mi codigo, y no esta correcto. porque la funcionalidad no se esta logrando.. 

// este es el objeto que llega a traves de autenticacion de terceros:
// {given_name: 'SOFIA', family_name: 'PARRA', nickname: 'sofiaparraweb', name: 'SOFIA PARRA', picture: 'https://lh3.googleusercontent.com/a/AAcHTtfK_hbVBm2W4kqfidyTHEqqZX_nwR6eTuIeyFZx=s96-c', …}
// email
// : 
// "sofiaparraweb@gmail.com"
// email_verified
// : 
// true
// family_name
// : 
// "PARRA"
// given_name
// : 
// "SOFIA"
// locale
// : 
// "es-419"
// name
// : 
// "SOFIA PARRA"
// nickname
// : 
// "sofiaparraweb"
// picture
// : 
// "https://lh3.googleusercontent.com/a/AAcHTtfK_hbVBm2W4kqfidyTHEqqZX_nwR6eTuIeyFZx=s96-c"
// sub
// : 
// "google-oauth2|115501189898395219671"
// updated_at
// : 
// "2023-06-21T18:35:57.453Z"
// [[Prototype]]
// : 
// Object

// este es el error en consola al cargar componente perfil despues d einciio de sesion:
// {given_name: 'SOFIA', family_name: 'PARRA', nickname: 'sofiaparraweb', name: 'SOFIA PARRA', picture: 'https://lh3.googleusercontent.com/a/AAcHTtfK_hbVBm2W4kqfidyTHEqqZX_nwR6eTuIeyFZx=s96-c', …}
// react_devtools_backend_compact.js:2421 {given_name: 'SOFIA', family_name: 'PARRA', nickname: 'sofiaparraweb', name: 'SOFIA PARRA', picture: 'https://lh3.googleusercontent.com/a/AAcHTtfK_hbVBm2W4kqfidyTHEqqZX_nwR6eTuIeyFZx=s96-c', …}
// actions.jsx:155 AxiosError {message: 'Network Error', name: 'AxiosError', code: 'ERR_NETWORK', config: {…}, request: XMLHttpRequest, …}
// actions.jsx:148     POST http://localhost:3001/user net::ERR_CONNECTION_REFUSED
// dispatchXhrRequest @ xhr.js:251
// xhr @ xhr.js:49
// dispatchRequest @ dispatchRequest.js:51
// request @ Axios.js:148
// httpMethod @ Axios.js:187
// wrap @ bind.js:5
// (anónimas) @ actions.jsx:148
// (anónimas) @ index.js:16
// dispatch @ VM284:1
// (anónimas) @ Perfil.jsx:31
// commitHookEffectListMount @ react-dom.development.js:23150
// commitPassiveMountOnFiber @ react-dom.development.js:24926
// commitPassiveMountEffects_complete @ react-dom.development.js:24891
// commitPassiveMountEffects_begin @ react-dom.development.js:24878
// commitPassiveMountEffects @ react-dom.development.js:24866
// flushPassiveEffectsImpl @ react-dom.development.js:27039
// flushPassiveEffects @ react-dom.development.js:26984
// performSyncWorkOnRoot @ react-dom.development.js:26076
// flushSyncCallbacks @ react-dom.development.js:12042
// commitRootImpl @ react-dom.development.js:26959
// commitRoot @ react-dom.development.js:26682
// finishConcurrentRender @ react-dom.development.js:25981
// performConcurrentWorkOnRoot @ react-dom.development.js:25809
// workLoop @ scheduler.development.js:266
// flushWork @ scheduler.development.js:239
// performWorkUntilDeadline @ scheduler.development.js:533
// Mostrar 23 marcos más
// Perfil.jsx:22 {given_name: 'SOFIA', family_name: 'PARRA', nickname: 'sofiaparraweb', name: 'SOFIA PARRA', picture: 'https://lh3.googleusercontent.com/a/AAcHTtfK_hbVBm2W4kqfidyTHEqqZX_nwR6eTuIeyFZx=s96-c', …}
// react_devtools_backend_compact.js:2421 {given_name: 'SOFIA', family_name: 'PARRA', nickname: 'sofiaparraweb', name: 'SOFIA PARRA', picture: 'https://lh3.googleusercontent.com/a/AAcHTtfK_hbVBm2W4kqfidyTHEqqZX_nwR6eTuIeyFZx=s96-c', …}
// actions.jsx:155 AxiosError {message: 'Network Error', name: 'AxiosError', code: 'ERR_NETWORK', config: {…}, request: XMLHttpRequest, …}
// actions.jsx:148     POST http://localhost:3001/user net::ERR_CONNECTION_REFUSED
// dispatchXhrRequest @ xhr.js:251
// xhr @ xhr.js:49
// dispatchRequest @ dispatchRequest.js:51
// request @ Axios.js:148
// httpMethod @ Axios.js:187
// wrap @ bind.js:5
// (anónimas) @ actions.jsx:148
// (anónimas) @ index.js:16
// dispatch @ VM284:1
// (anónimas) @ Perfil.jsx:31
// commitHookEffectListMount @ react-dom.development.js:23150
// invokePassiveEffectMountInDEV @ react-dom.development.js:25154
// invokeEffectsInDev @ react-dom.development.js:27351
// commitDoubleInvokeEffectsInDEV @ react-dom.development.js:27330
// flushPassiveEffectsImpl @ react-dom.development.js:27056
// flushPassiveEffects @ react-dom.development.js:26984
// performSyncWorkOnRoot @ react-dom.development.js:26076
// flushSyncCallbacks @ react-dom.development.js:12042
// commitRootImpl @ react-dom.development.js:26959
// commitRoot @ react-dom.development.js:26682
// finishConcurrentRender @ react-dom.development.js:25981
// performConcurrentWorkOnRoot @ react-dom.development.js:25809
// workLoop @ scheduler.development.js:266
// flushWork @ scheduler.development.js:239
// performWorkUntilDeadline @ scheduler.development.js:533
// Mostrar 22 marcos más
// AAcHTtfK_hbVBm2W4kqfidyTHEqqZX_nwR6eTuIeyFZx=s96-c:1     GET https://lh3.googleusercontent.com/a/AAcHTtfK_hbVBm2W4kqfidyTHEqqZX_nwR6eTuIeyFZx=s96-c 40


// como lo cambiarias al codigo de perfil actions y reducer para lograr las funcionlidades que te pedi? */}