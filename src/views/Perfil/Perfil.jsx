import React, { useState, useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, ChakraProvider, Input, Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId, updateProfile } from "../../Redux/actions";
import { useForm } from "react-hook-form";
import "./Perfil.css";

const Perfil = () => {
  const { user, isAuthenticated } = useAuth0();
  const userInfo = useSelector((state) => state.LocalPersist.userInfo);
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

  const [initialProfile, setInitialProfile] = useState(null);
  const [editedProfile, setEditedProfile] = useState(null);

  const userProfile = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();
  const isProfileFetchedRef = useRef(false);
  const [editing, setEditing] = useState(false);
  const email = user.email;
//Nop contorlo de vuelta a aver
//no se si lo habia guardado ql
  useEffect(() => {
    if (!isProfileFetchedRef.current && isAuthenticated) {
      dispatch(getUserId(email));
      isProfileFetchedRef.current = true;
    }
  }, [dispatch, isAuthenticated, email]);


  useEffect(() => {
    if (userProfile) {
      setInitialProfile(userProfile);
      setEditedProfile(userProfile);
    }
  }, [userProfile]);

  useEffect(() => {
    if (editedProfile) {
      // Actualizar los valores registrados con useForm cuando editedProfile cambia
      setValue("fullName", editedProfile.fullName || "");
      setValue("mail", editedProfile.mail || "");
      setValue("birthDate", editedProfile.birthDate || "");
      setValue("phone", editedProfile.phone || "");
      setValue("address", editedProfile.address || "");
      setValue("occupation", editedProfile.occupation || "");
      setValue("role", editedProfile.role || "");
    }
  }, [editedProfile, setValue]);

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setEditedProfile(initialProfile);
    reset(initialProfile);
  };

  const handleSaveProfile = (data) => {
    dispatch(updateProfile(data));
    setEditing(false);
    setInitialProfile(data);
    setEditedProfile(data);
    console.log(data)
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setEditedProfile((prevState) => ({ ...prevState, profileImage: reader.result }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    isAuthenticated && (
      <ChakraProvider>
        <div className="containerPerfil">
          <div className="row">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-left profile-title">TU PERFIL</h4>
              {!editing ? (
                <Button className="profile-edit-button" colorScheme="teal" onClick={handleEditProfile}>
                  Modificar Cambios
                </Button>
              ) : (
                <>
                  <Button className="profile-save-button" colorScheme="teal" onClick={handleSubmit(handleSaveProfile)}>
                    Guardar Cambios
                  </Button>
                  <Button className="profile-cancel-button" colorScheme="red" onClick={handleCancelEdit}>
                    Cancelar
                  </Button>
                </>
              )}
            </div>
            <div className="col-4 col-lg-3">
              <div className="d-flex flex-column align-items-center">
                <div className="profile-image-container">
                  <img
                    src={editedProfile?.profileImage || "https://via.placeholder.com/150"}
                    alt="Profile"
                    className="profile-image"
                  />
                  {editing && (
                    <Input type="file" accept="image/*" onChange={handleProfileImageChange} className="mt-2" />
                  )}
                </div>
                <span className="mt-2">
                  {editing ? (
                    <span>Editar Imagen</span>
                  ) : (
                    <span>{`${initialProfile?.fullName}'s Profile`}</span>
                  )}
                </span>
              </div>
            </div>
            <div className="col-8 col-lg-9">
              <div className="profile-details">
                <form onSubmit={handleSubmit(handleSaveProfile)}>
                  <div className="form-group">
                    <label htmlFor="fullName">Nombre</label>
                    <Input
                      className="form-control"
                      placeholder="Nombre"
                      name="fullName"
                      disabled={!editing}
                      {...register("fullName", { 
                        required: "Campo obligatorio",
                        pattern: {
                          value: /[A-Za-z\s]+/,
                          message: "Solo se permiten letras"
                        }
                      })}
                    />
                    {errors.fullName && <span>{errors.fullName.message}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="mail">Correo Electrónico</label>
                    <Input
                      className="form-control"
                      placeholder="Correo Electrónico"
                      name="mail"
                      disabled={!editing}
                      {...register("mail", { 
                        required: "Campo obligatorio",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Dirección de correo electrónico inválida"
                        }
                      })}
                    />
                    {errors.mail && <span>{errors.mail.message}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="birthDate">Fecha de Nacimiento</label>
                    <Input
                      className="form-control"
                      type="date"
                      placeholder="Fecha de Nacimiento"
                      name="birthDate"
                      disabled={!editing}
                      {...register("birthDate", { 
                        required: "Campo obligatorio"
                      })}
                    />
                    {errors.birthDate && <span>{errors.birthDate.message}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <Input
                      className="form-control"
                      type="tel"
                      placeholder="Teléfono"
                      name="phone"
                      disabled={!editing}
                      {...register("phone", { 
                        required: "Campo obligatorio",
                        pattern: {
                          value: /^\d{10}$/,
                          message: "El número de teléfono debe tener 10 dígitos"
                        }
                      })}
                    />
                    {errors.phone && <span>{errors.phone.message}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Dirección</label>
                    <Input
                      className="form-control"
                      placeholder="Dirección"
                      name="address"
                      disabled={!editing}
                      {...register("address")}
                    />
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <Input
                        className="form-control"
                        type="occupation"
                        placeholder="Contanos un poco más de vos"
                        name="occupation"
                        disabled={!editing}
                        {...register("occupation", { 
                          required: "Campo obligatorio",
                          pattern: {
                            value: /[A-Za-z\s]+/,
                            message: "Solo se permiten letras"
                          }
                        })}
                      />
                      {errors.occupation && <p>{errors.occupation.message}</p>}
                    </div>
                    <div className="col-md-6">
                      <Select
                        className="form-control"
                        placeholder="Rol"
                        name="role"
                        value={editing ? editedProfile?.role : initialProfile?.role}
                        onChange={(e) => setEditedProfile({ ...editedProfile, role: e.target.value })}
                        disabled={!editing}
                        {...register("role")}
                      >
                        <option value="Miembro">Miembro</option>
                        <option value="Voluntario">Voluntario</option>
                        <option value="Miembro">Miembro</option>
                      </Select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </ChakraProvider>
    )
  );
};

export default Perfil;

