// mi querido amigo... tenemos que trabjar muy intenso para lograr lo que necesito, tengo 45 minutos hasta la entrega
// estoy haciendo una aplicacion web de una fundacion. Para la aplicacion use react redux en javascript. Biblioteca vite
// Tengo el proyecto dividido en compoenntentes. cada uno tiene un archivo jsx y otro css
// Estoy trabjando en el frotn en este momento. Desde el back tambien he trabajaod pero se logro la funcionalidad

// Estoy haciendo el componente "PERFIL". Este compoennte muestra la ifnromacion del usuario y le permite al usauiro modiciarla y guardar los nuevos cambios

// Necesita primero traer al perfil y setear los datos actuales en los campos
// Luego aprieta el boton modificar  y debe poder escribrise en TODOS los campos y cambairdatos
// Al apretar guardar, esos cambios deben mandarse al back 
// Esos datos deben persistir... si yo sigo navegando y vuelvo al compoennte perfil deben estar los datos nuevos

// la ruta para tarer usuarios es getUserId
// para modificar es updatePrfoile

// necesito lograr todas esas funcionalidades urgente

// te doy mia rchivo jsx:
// import React, { useState, useEffect, useRef } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Button, ChakraProvider, Input, Select } from "@chakra-ui/react";
// import { useDispatch, useSelector } from "react-redux";
// import { getUserId, updateProfile } from "../../Redux/actions";
// import { useForm } from "react-hook-form";
// import "./Perfil.css";

// const Perfil = () => {
//   const { user, isAuthenticated } = useAuth0();
//   const userInfo = useSelector(state => state.LocalPersist.userInfo)
//   const [newProfile, setNewProfile] = useState({
//     name: userInfo.fullName,
//     mail: userInfo.mail,
//     birthdate:userInfo.birthDate,
//     phone: userInfo.phone,
//     address: userInfo.address,
//     occupation: userInfo.occupation,
//     profileImage: userInfo.image,
//   });
  
//   const email = user.email;
//   const { register, handleSubmit, formState: { errors }, reset } = useForm();
//   const { name, mail, birthdate, phone, address, occupation, role, profileImage } = newProfile;
//   const dispatch = useDispatch();
//   const userProfile = useSelector((state) => state.userProfile);
//   console.log(userInfo)
//   const isProfileFetchedRef = useRef(false);
//   const [editing, setEditing] = useState(false);


//   useEffect(() => {
//     if (!isProfileFetchedRef.current && isAuthenticated) {
//       dispatch(getUserId(email));
//       isProfileFetchedRef.current = true;
//     }
//   }, [dispatch, isAuthenticated, email]);

//   useEffect(() => {
//     if (userProfile) {
//       setNewProfile(() => ({
//         name: userProfile.fullName || "",
//         mail: userProfile.mail,
//         birthdate: userProfile.birthDate || "",
//         phone: userProfile.phone || "",
//         address: userProfile.address || "",
//         occupation: userProfile.occupation || "",
//         role: userProfile.role || "",
//       }));
//     }
//   }, [userProfile]);

//   const handleEditProfile = () => {
//     setEditing(true);
//   };

//   const handleCancelEdit = () => {
//     setEditing(false);
//     reset(newProfile);
//   };

//   const handleSaveProfile = (data) => {
//     dispatch(updateProfile(data));
//     setEditing(false);
//     reset(data);
//   };

//   const handleProfileImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setNewProfile({ ...newProfile, profileImage: reader.result });
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     isAuthenticated && (
//       <ChakraProvider>
//         <div className="containerPerfil">
//           <div className="row">
//             <div className="d-flex justify-content-between align-items-center mb-3">
//               <h4 className="text-left profile-title">TU PERFIL</h4>
//               {!editing ? (
//                 <Button className="profile-edit-button" colorScheme="teal" onClick={handleEditProfile}>
//                   Modificar Cambios
//                 </Button>
//               ) : (
//                 <>
//                   <Button className="profile-save-button" colorScheme="teal" onClick={handleSubmit(handleSaveProfile)}>
//                     Guardar Cambios
//                   </Button>
//                   <Button className="profile-cancel-button" colorScheme="teal" onClick={handleCancelEdit}>
//                     Cancelar
//                   </Button>
//                 </>
//               )}
//             </div>
//             <div className="col-md-3 border-right">
//               <div className="d-flex flex-column align-items-center text-center p-3 py-5">
//                 <div className="profile-picture-container">
//                   <img
//                     className="rounded-circle profile-picture"
//                     src={profileImage || "https://www.pngmart.com/files/21/Account-Avatar-Profile-PNG-Clipart.png"}
//                     alt="Profile"
//                   />
//                 </div>
//                 {editing ? (
//                   <div>
//                     <input type="file" accept="image/*" onChange={handleProfileImageChange} />
//                   </div>
//                 ) : null}
//                 <span className="font-weight-bold">{name}</span>
//                 <span className="text-black-50">{mail}</span>
//               </div>
//             </div>
//             <div className="col-md-8 border-right">
//               <div className="p-3 py-5">
//                 <div className="d-flex justify-content-between align-items-center mb-3">
//                   <h6 className="text-right">Información Personal</h6>
//                 </div>
//                 <div className="row mt-2">
//                   <div className="col-md-6">
//                     <Input
//                       className="form-control"
//                       placeholder="Nombre"
//                       name="name"
//                       value={name}
//                       onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
//                       disabled={!editing}
//                       {...register("name", { 
//                         required: "Campo obligatorio",
//                         pattern: {
//                           value: /^[A-Za-z]+$/i,
//                           message: "Solo se permiten letras"
//                         }
//                       })}
//                     />
//                     {errors.name && <p>{errors.name.message}</p>}
//                   </div>
//                   <div className="col-md-6">
//                     <Input
//                       className="form-control"
//                       placeholder="Correo Electrónico"
//                       name="mail"
//                       value={mail}
//                       onChange={(e) => setNewProfile({ ...newProfile, mail: e.target.value })}
//                       disabled
//                     />
//                   </div>
//                 </div>
//                 <div className="row mt-3">
//                   <div className="col-md-6">
//                     <Input
//                       className="form-control"
//                       placeholder="Fecha de Nacimiento"
//                       name="birthdate"
//                       type="date"
//                       value={birthdate}
//                       onChange={(e) => setNewProfile({ ...newProfile, birthdate: e.target.value })}
//                       disabled={!editing}
//                       {...register("birthdate")}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <Input
//                       className="form-control"
//                       placeholder="Número de Teléfono"
//                       name="phone"
//                       value={phone}
//                       onChange={(e) => setNewProfile({ ...newProfile, phone: e.target.value })}
//                       disabled={!editing}
//                       {...register("phone", { 
//                         required: "Campo obligatorio",
//                         pattern: {
//                           value: /^[0-9]+$/i,
//                           message: "Solo se permiten números"
//                         }
//                       })}
//                     />
//                     {errors.phone && <p>{errors.phone.message}</p>}
//                   </div>
//                 </div>
//                 <div className="row mt-3">
//                   <div className="col-md-12">
//                     <Input
//                       className="form-control"
//                       placeholder="Dirección"
//                       name="address"
//                       value={address}
//                       onChange={(e) => setNewProfile({ ...newProfile, address: e.target.value })}
//                       disabled={!editing}
//                       {...register("address", { 
//                         pattern: {
//                           value: /^[A-Za-z0-9\s]+$/i,
//                           message: "Solo se permiten letras, números y espacios"
//                         }
//                       })}
//                     />
//                     {errors.address && <p>{errors.address.message}</p>}
//                   </div>
//                 </div>
//                 <div className="row mt-3">
//                   <div className="col-md-6">
//                     <Input
//                       className="form-control"
//                       placeholder="Ocupación"
//                       name="occupation"
//                       value={occupation}
//                       onChange={(e) => setNewProfile({ ...newProfile, occupation: e.target.value })}
//                       disabled={!editing}
//                       {...register("occupation", { 
//                         pattern: {
//                           value: /^[A-Za-z]+$/i,
//                           message: "Solo se permiten letras"
//                         }
//                       })}
//                     />
//                     {errors.occupation && <p>{errors.occupation.message}</p>}
//                   </div>
//                   <div className="col-md-6">
//                     <Select
//                       className="form-control"
//                       placeholder="Rol"
//                       name="role"
//                       value={role}
//                       onChange={(e) => setNewProfile({ ...newProfile, role: e.target.value })}
//                       disabled={!editing}
//                       {...register("role")}
//                     >
//                       <option value="Miembro">Miembro</option>
//                       <option value="Voluntario">Voluntario</option>
//                       <option value="Miembro">Miembro</option>
//                     </Select>
//                   </div>
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

// mi archivo css
// @import url('https://fonts.cdnfonts.com/css/wicked-grit');
// @import url('https://fonts.cdnfonts.com/css/dk-lemon-yellow-sun');

// /* // amarillo: #D7B63E o rgb(215,182,62);
// // naranja: #EB5D0B o rgb(235,93,11);
// // rojo: #B9362C o rgb(185,54,44);
// // azul: #124476 o rgb(18,68,118);

// // COLORES FONDO PARA CONTENIDO
// // rgb(214, 122, 116) o #D67A74 con transparencia, 64% de opacidad => rgb(214, 122, 116, 0.64)
// // rgb(242, 217, 152) o #F2D998 con transparencia, 77% de opacidad => rgb(242, 217, 152, 0.77)
// // font-family: 'Wicked Grit', sans-serif;
// //font-family: 'DK Lemon Yellow Sun', sans-serif; */

// .containerPerfil {
//   margin-top: 90px;
//   margin-bottom: 50px;
//   padding: 20px;
//   background-color: #fff;
//   border-radius: 10px;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
// }

// .form-control {
//   border-radius: 5px;
//   padding: 8px;
//   border: 1px solid #ccc;
//   width: 100%;
//   margin-top: 5px;
//   margin-bottom: 10px;
// }

// .profile-picture-container {
//   position: relative;
//   width: 100%;
//   max-width: 400px;
//   height: auto;
//   margin-bottom: 30px;
//   overflow: hidden;
// }

// .profile-picture {
//   width: 100%;
//   height: auto;
//   object-fit: cover;
//   border-radius: 30px;
// }

// .profile-picture-label {
//   position: absolute;
//   bottom: 0px;
//   left: 0px;
//   padding: 5px 10px;
//   background-color: #1d2636;
//   color: #fff;
//   font-size: 15px;
//   border-radius: 5px;
//   cursor: pointer;
//   font-family: 'DK Lemon Yellow Sun', sans-serif;
// }

// .custom-input {
//   text-align: left;
//   font-size: 16px;
//   font-weight: bold;
//   background-color: #f8f8f8;
//   border: none;
//   border-radius: 8px;
//   padding: 10px;
//   margin-bottom: 10px;
// }

// .custom-select {
//   text-align: left;
//   font-size: 16px;
//   font-weight: bold;
//   background-color: #f8f8f8;
//   border: none;
//   border-radius: 8px;
//   padding: 10px;
//   margin-bottom: 10px;
// }

// .labels {
//   font-size: 12px;
//   color: #777;
//   margin-bottom: 3px;
// }

// .profile-title {
//   font-size: 34px;
//   font-weight: bold;
//   color: #1d2636;
//   margin-bottom: 20px;
//   font-family: 'Wicked Grit', 'sans-serif';
// }

// .profile-edit-button,
// .profile-save-button,
// .profile-cancel-button {
//   background-color: #B9362C;
//   color: #fff;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   font-size: 16px;
//   cursor: pointer;
//   margin-top: 20px;
// }

// .profile-edit-button:hover,
// .profile-save-button:hover,
// .profile-cancel-button:hover {
//   background-color: #B9362C;
// }

// .profile-edit-button:focus,
// .profile-save-button:focus,
// .profile-cancel-button:focus {
//   outline: none;
// }

// .profile-edit-button:disabled,
// .profile-save-button:disabled,
// .profile-cancel-button:disabled {
//   background-color: #ccc;
//   cursor: not-allowed;
// }

// .editar {
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   padding: 10px 20px;
//   background-color: #f0f0f0;
//   color: #333;
//   border: none;
//   border-radius: 5px;
//   text-decoration: none;
//   font-weight: bold;
// }

// .editar:hover {
//   background-color: #e0e0e0;
//   cursor: pointer;
// }

// @media (max-width: 576px) {
//   .container {
//     margin-top: 20px;
//     margin-bottom: 20px;
//     padding: 10px;
//   }

//   .col-md-3,
//   .col-md-9 {
//     padding: 0px;
//   }

//   .profile-picture-container {
//     margin-bottom: 15px;
//   }

//   .profile-picture-label {
//     font-size: 12px;
//     padding: 3px 6px;
//   }

//   .profile-title {
//     font-size: 24px;
//     margin-bottom: 10px;
//   }

//   .editar {
//     top: 5px;
//     right: 5px;
//     padding: 5px 10px;
//     font-size: 12px;
//   }
// }

// Dame los cambios necesarios para logrr funcionalidad

