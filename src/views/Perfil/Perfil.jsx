import React, { useState, useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, ChakraProvider, Input, Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId, updateUser } from "../../Redux/actions";
import { useForm } from "react-hook-form";
import "./Perfil.css";
import logo from "../../assets/logo.png"

const Perfil = () => {
  const { user, isAuthenticated } = useAuth0();
  const userInfo = useSelector((state) => state.LocalPersist.userInfo);
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
  
  const [initialProfile, setInitialProfile] = useState({
    // image: userInfo.image,
    fullName: userInfo.fullName,
    mail: userInfo.mail,
    birthDate: userInfo.birthDate,
    phone: userInfo.phone,
    address: userInfo.address,
    occupation: userInfo.occupation,
    role: userInfo.role,
  });

  const [editedProfile, setEditedProfile] = useState({
    // image: userInfo.image,
    fullName: userInfo.fullName,
    mail: userInfo.mail,
    birthDate: userInfo.birthDate,
    phone: userInfo.phone,
    address: userInfo.address,
    occupation: userInfo.occupation,
    role: userInfo.role,
  });

  const userProfile = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();
  const isProfileFetchedRef = useRef(false);
  const [editing, setEditing] = useState(false);
  const email = user.email;

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
    const formData = new FormData();
    // formData.append("image", editedProfile.image);
    formData.append("fullName", data.fullName);
    formData.append("mail", data.mail);
    formData.append("birthDate", data.birthDate);
    formData.append("phone", data.phone);
    formData.append("address", data.address);
    formData.append("occupation", data.occupation);
    formData.append("role", data.role);

    dispatch(updateUser(formData));
    setEditing(false);
    setInitialProfile(data);
    setEditedProfile(data);
    reset(editedProfile);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setEditedProfile((prevState) => ({ ...prevState, image: reader.result }));
    };

    if (file) {
  reader.readAsDataURL(file);
}
};

return (
<ChakraProvider>
  <div className="perfil-container">
    <div className="perfil-header">
      <img src={logo} alt="logo" className="logo-perfil" />
      <h1 className="perfil-title">Mi Perfil</h1>
    </div>
    <div className="perfil-content">
      <div className="perfil-image">
        <img src={editedProfile.image} alt="profile" className="profile-image" />
        {editing && (
          <div className="image-upload">
            <input type="file" accept="image/*" onChange={handleProfileImageChange} />
          </div>
        )}
      </div>
      <form className="perfil-form" onSubmit={handleSubmit(handleSaveProfile)}>
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
        <label htmlFor="mail" className="perfil-label">
          Correo electrónico
        </label>
        <Input
          type="email"
          id="mail"
          className="perfil-input"
          isDisabled={!editing}
          defaultValue={editedProfile.mail}
          {...register("mail", { required: true })}
        />
        {errors.mail && <span className="error-message">Campo obligatorio</span>}
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

