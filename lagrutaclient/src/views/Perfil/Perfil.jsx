import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, ChakraProvider, Input, Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from "../../Redux/actions";
import "./Perfil.css";

const Perfil = () => {
  const { user, isAuthenticated } = useAuth0();
  const [newProfile, setNewProfile] = useState({
    name: '',
    email: '',
    birthdate: '',
    phone: '',
    address: '',
    occupation: '',
    role: '',
    profileImage: '',
  });

  const { name, email, birthdate, phone, address, occupation, role, profileImage } = newProfile;

  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
 
 useEffect(() => {
    if (isAuthenticated && user) {
      dispatch(getProfile());
    }
  }, [dispatch, isAuthenticated, user]);

  useEffect(() => {
    if (profile) {
      setNewProfile({
        name: profile.name || "",
        email: profile.email || "",
        birthdate: profile.birthdate || "",
        phone: profile.phone || "",
        address: profile.address || "",
        occupation: profile.occupation || "",
        role: profile.role || "",
        profileImage: profile.image || "",
      });
    }
  }, [profile]);

  const handleNameChange = (e) => {
    const updatedProfile = { ...newProfile, name: e.target.value };
    setNewProfile(updatedProfile);
  };

  const handleEmailChange = (e) => {
    const updatedProfile = { ...newProfile, email: e.target.value };
    setNewProfile(updatedProfile);
  };

  const handleBirthdateChange = (e) => {
    const updatedProfile = { ...newProfile, birthdate: e.target.value };
    setNewProfile(updatedProfile);
  };

  const handlePhoneChange = (e) => {
    const updatedProfile = { ...newProfile, phone: e.target.value };
    setNewProfile(updatedProfile);
  };

  const handleAddressChange = (e) => {
    const updatedProfile = { ...newProfile, address: e.target.value };
    setNewProfile(updatedProfile);
  };

  const handleOccupationChange = (e) => {
    const updatedProfile = { ...newProfile, occupation: e.target.value };
    setNewProfile(updatedProfile);
  };

  const handleRoleChange = (e) => {
    const updatedProfile = { ...newProfile, role: e.target.value };
    setNewProfile(updatedProfile);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    const updatedProfile = { ...newProfile, profileImage: imageUrl };
    setNewProfile(updatedProfile);
  };

  const handleUpdateProfile = () => {
    dispatch(updateProfile(newProfile));
  };

  return (
    isAuthenticated && (
      <ChakraProvider>
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-left profile-title">TU PERFIL</h4>
            </div>
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <div className="profile-picture-container">
                  <img
                    className="rounded-circle profile-picture"
                    src={profileImage || "https://www.pngmart.com/files/21/Account-Avatar-Profile-PNG-Clipart.png"}
                    alt="Profile"
                  />
                  <div className="profile-picture-label">
                    <input
                      id="profile-picture"
                      type="file"
                      accept="image/*"
                      onChange={handleProfileImageChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Nombre y Apellido</label>
                    <Input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Nombre completo"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Email</label>
                    <Input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Ingresa tu correo electrónico"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Fecha de Nacimiento</label>
                    <Input
                      type="date"
                      className="form-control custom-input"
                      placeholder="Ingresa tu fecha de nacimiento"
                      value={birthdate}
                      onChange={handleBirthdateChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Número de Teléfono</label>
                    <Input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Tu número de teléfono"
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Dirección</label>
                    <Input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Tu dirección"
                      value={address}
                      onChange={handleAddressChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Ocupación</label>
                    <Input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Ayúdanos a conocerte más"
                      value={occupation}
                      onChange={handleOccupationChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Rol</label>
                    <Select
                      className="form-control custom-select"
                      value={role}
                      onChange={handleRoleChange}
                    >
                      <option value="">Selecciona un rol</option>
                      <option value="voluntario">Voluntario</option>
                      <option value="padrino">Padrino</option>
                      <option value="miembro">Miembro</option>
                    </Select>
                  </div>
                </div>
                <div>
                  <Button
                    className="profile-button"
                    type="button"
                    onClick={handleUpdateProfile}
                  >
                    Modificar usuario
                  </Button>
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

