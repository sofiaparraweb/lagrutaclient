import React, { useState, useEffect, useRef } from "react";
import { Button, ChakraProvider, Input, Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../Redux/actions";
import { useForm } from "react-hook-form";
import "./Perfil.css";
import logo from "../../assets/logo.png"
import axios from "axios";

const Perfil = () => {
  
  const mail = useSelector((state) => state.LocalPersist.userId?.email);
  const userInfo = useSelector((state) => state.LocalPersist.userProfile);
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
  const defaultImageURL = "https://cdn.icon-icons.com/icons2/1369/PNG/512/-person_90382.png";
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser(mail));
  }, [dispatch]);

  const [initialProfile, setInitialProfile] = useState({
    image: userInfo.image || "",
    fullName: userInfo?.fullName || "",
    email: userInfo?.email || "",
    birthDate: userInfo?.birthDate || "",
    phone: userInfo?.phone || "",
    address: userInfo?.address || "",
    occupation: userInfo?.occupation || "",
    role: userInfo?.role || "",
  });

  const [editedProfile, setEditedProfile] = useState({
    image: userInfo.image || "",
    fullName: userInfo.fullName || "",
    email: userInfo.email || "",
    birthDate: userInfo.birthDate || "",
    phone: userInfo.phone || "",
    address: userInfo.address || "",
    occupation: userInfo.occupation || "",
    role: userInfo.role || "",
  });

  const isProfileFetchedRef = useRef(false);
  const [editing, setEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


 useEffect(() => {
    if (userInfo) {
      setInitialProfile(userInfo);
      setEditedProfile(userInfo);
    }
  }, [userInfo]);

  useEffect(() => {
    if (editedProfile) {
      // Actualizar los valores registrados con useForm cuando editedProfile cambia
      setValue("fullName", editedProfile.fullName || "");
      setValue("email", editedProfile.email || "");
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

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    console.log(file)
  };

  const handleSaveProfile = (formData) => {
    console.log(formData)
    const data = {
      image: selectedImage,
      name: formData.fullName,
      email: formData.email,
      birthDate: formData.birthDate,
      phone: formData.phone,
      address: formData.address,
      occupation: formData.occupation,
      role: formData.role,
    };
  
    console.log(selectedImage);
    console.log(data, 'esto mando al back');
    dispatch(updateUser(data));
    setInitialProfile(data);
    setEditing(false);
  };


return (
<ChakraProvider>
  <div className="perfil-container">
    <div className="perfil-header">
      <img src={logo} alt="logo" className="logo-perfil" />
      <h1 className="perfil-title">Mi Perfil</h1>
    </div>
    <div className="perfil-content">
      <form className="perfil-form" onSubmit={handleSubmit(handleSaveProfile)}>
      <div className="perfil-image">
              <img
                src={selectedImage ? URL.createObjectURL(selectedImage) : editedProfile.image}
                alt="profile"
                className="profile-image"
              />
              {editing && (
                <div className="image-buttons">
                  <label htmlFor="image" className="upload-button">
                    Change Image
                    <Input
                      type="file"
                      id="image"
                      name="image"
                      onChange={handleProfileImageChange}
                      accept="image/*"
                    />
                  </label>
  </div>
)}
</div> 
        <label htmlFor="fullName" className="perfil-label">
          Nombre completo
        </label>
        <Input
          type="text"
          id="fullName"
          className="perfil-input"
          isDisabled={!editing}
          defaultValue={editedProfile.fullName}
          {...register("fullName", { required: true })}
        />
        {errors.fullName && <span className="error-message">Campo obligatorio</span>}
        <label htmlFor="email" className="perfil-label">
          Correo electrónico
        </label>
        <Input
          type="email"
          id="email"
          className="perfil-input"
          isDisabled
          defaultValue={editedProfile.email}
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error-message">Campo obligatorio</span>}
        <label htmlFor="birthDate" className="perfil-label">
          Fecha de nacimiento
        </label>
        <Input
          type="date"
          id="birthDate"
          className="perfil-input"
          isDisabled={!editing}
          defaultValue={editedProfile.birthDate}
          {...register("birthDate", { required: true })}
        />
        {errors.birthDate && <span className="error-message">Campo obligatorio</span>}
        <label htmlFor="phone" className="perfil-label">
          Teléfono
        </label>
        <Input
          type="tel"
          id="phone"
          className="perfil-input"
          isDisabled={!editing}
          defaultValue={editedProfile.phone}
          {...register("phone", { required: true })}
          placeholder="Ej: +5493815709293"
        />
        {errors.phone && <span className="error-message">Campo obligatorio</span>}
        <label htmlFor="address" className="perfil-label">
          Dirección
        </label>
        <Input
          type="text"
          id="address"
          className="perfil-input"
          isDisabled={!editing}
          defaultValue={editedProfile.address}
          {...register("address", { required: true })}
        />
        {errors.address && <span className="error-message">Campo obligatorio</span>}
        <label htmlFor="occupation" className="perfil-label">
          Ocupación
        </label>
        <Input
          type="text"
          id="occupation"
          className="perfil-input"
          isDisabled={!editing}
          defaultValue={editedProfile.occupation}
          {...register("occupation", { required: true })}
        />
        {errors.occupation && <span className="error-message">Campo obligatorio</span>}
        <label htmlFor="role" className="perfil-label">
          Rol
        </label>
        <Select
          id="role"
          className="perfil-input"
          isDisabled={!editing}
          defaultValue={editedProfile.role}
          {...register("role", { required: true })}
        >
          <option value="padrino">Padrino</option>
          <option value="voluntario">Voluntario</option>
          <option value="user">Usuario</option>
        </Select>
        {errors.role && <span className="error-message">Campo obligatorio</span>}
        <div className="button-group">
          {!editing && (
            <Button
              type="button"
              className="edit-button"
              onClick={() => setEditing(true)}
            >
              Editar
            </Button>
          )}
          {editing && (
            <div>
              <Button type="submit" className="save-button">
                Guardar
              </Button>
              <Button
                type="button"
                className="cancel-button"
                onClick={() => setEditing(false)}
              >
                Cancelar
              </Button>
            </div>
          )}
        </div>
      </form>
    </div>
  </div>
</ChakraProvider>
);
}

export default Perfil;
