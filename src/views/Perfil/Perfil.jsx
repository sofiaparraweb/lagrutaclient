import React, { useState, useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, ChakraProvider, Input, Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from "../../Redux/actions";
import { useForm } from "react-hook-form";
import "./Perfil.css";

const Perfil = () => {
  const { user, isAuthenticated } = useAuth0();
  const [editing, setEditing] = useState(false);
  const [newProfile, setNewProfile] = useState({
    name: "",
    mail: user.mail,
    birthdate: "",
    phone: "",
    address: "",
    occupation: "",
    role: "",
    profileImage: "",
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const { name, mail, birthdate, phone, address, occupation, role, profileImage } = newProfile;
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const isProfileFetchedRef = useRef(false);
  const userId = useSelector(state => state.userId);

  useEffect(() => {
    if (isAuthenticated && user && !isProfileFetchedRef.current && userId) {
      dispatch(getProfile(userId));
      // isProfileFetchedRef.current = true;
      console.log(userId);
    }
  }, [dispatch, isAuthenticated, user, userId]);

  useEffect(() => {
    if (profile) {
      setNewProfile((prevProfile) => ({
        ...prevProfile,
        name: profile.name || "",
        mail: profile.mail,
        birthdate: profile.birthdate || "",
        phone: profile.phone || "",
        address: profile.address || "",
        occupation: profile.occupation || "",
        role: profile.role || "",
      }));
    }
  }, [profile]);

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    reset(newProfile);
  };

  const handleSaveProfile = (data) => {
    dispatch(updateProfile(data));
    setEditing(false);
    reset(data);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewProfile({ ...newProfile, profileImage: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    isAuthenticated && (
      <ChakraProvider>
        <div className="container rounded bg-white mt-5 mb-5">
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
                  <Button className="profile-cancel-button" colorScheme="teal" onClick={handleCancelEdit}>
                    Cancelar
                  </Button>
                </>
              )}
            </div>
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <div className="profile-picture-container">
                  <img
                    className="rounded-circle profile-picture"
                    src={profileImage || "https://www.pngmart.com/files/21/Account-Avatar-Profile-PNG-Clipart.png"}
                    alt="Profile"
                  />
                </div>
                {editing ? (
                  <div>
                    <input type="file" accept="image/*" onChange={handleProfileImageChange} />
                  </div>
                ) : null}
                <span className="font-weight-bold">{name}</span>
                <span className="text-black-50">{mail}</span>
              </div>
            </div>
            <div className="col-md-8 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="text-right">Información Personal</h6>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <Input
                      className="form-control"
                      placeholder="Nombre"
                      name="name"
                      value={name}
                      onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
                      disabled={!editing}
                      {...register("name", { 
                        required: "Campo obligatorio",
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message: "Solo se permiten letras"
                        }
                      })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                  </div>
                  <div className="col-md-6">
                    <Input
                      className="form-control"
                      placeholder="Correo Electrónico"
                      name="mail"
                      value={mail}
                      onChange={(e) => setNewProfile({ ...newProfile, mail: e.target.value })}
                      disabled
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <Input
                      className="form-control"
                      placeholder="Fecha de Nacimiento"
                      name="birthdate"
                      type="date"
                      value={birthdate}
                      onChange={(e) => setNewProfile({ ...newProfile, birthdate: e.target.value })}
                      disabled={!editing}
                      {...register("birthdate")}
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      className="form-control"
                      placeholder="Número de Teléfono"
                      name="phone"
                      value={phone}
                      onChange={(e) => setNewProfile({ ...newProfile, phone: e.target.value })}
                      disabled={!editing}
                      {...register("phone", { 
                        required: "Campo obligatorio",
                        pattern: {
                          value: /^[0-9]+$/i,
                          message: "Solo se permiten números"
                        }
                      })}
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <Input
                      className="form-control"
                      placeholder="Dirección"
                      name="address"
                      value={address}
                      onChange={(e) => setNewProfile({ ...newProfile, address: e.target.value })}
                      disabled={!editing}
                      {...register("address", { 
                        pattern: {
                          value: /^[A-Za-z0-9\s]+$/i,
                          message: "Solo se permiten letras, números y espacios"
                        }
                      })}
                    />
                    {errors.address && <p>{errors.address.message}</p>}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <Input
                      className="form-control"
                      placeholder="Ocupación"
                      name="occupation"
                      value={occupation}
                      onChange={(e) => setNewProfile({ ...newProfile, occupation: e.target.value })}
                      disabled={!editing}
                      {...register("occupation", { 
                        pattern: {
                          value: /^[A-Za-z]+$/i,
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
                      value={role}
                      onChange={(e) => setNewProfile({ ...newProfile, role: e.target.value })}
                      disabled={!editing}
                      {...register("role")}
                    >
                      <option value="">Seleccionar Rol</option>
                      <option value="Voluntario">Voluntario</option>
                      <option value="Miembro">Miembro</option>
                      <option value="Administrador">Administrador</option>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ChakraProvider>
    )
  );
};

export default Perfil;
