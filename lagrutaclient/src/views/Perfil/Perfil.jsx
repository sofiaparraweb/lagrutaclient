import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Button,
  ChakraProvider,
  Input,
  Select,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, updateProfile } from "../../Redux/actions";
import "./Perfil.css"; // Importa el archivo CSS personalizado

const Perfil = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [birthdate, setBirthdate] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [role, setRole] = useState("");
  const [profileImage, setProfileImage] = useState(user.image);

  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      dispatch(fetchProfile(user.sub));
    }
  }, [isAuthenticated, isLoading, dispatch, user.sub]);

  useEffect(() => {
    if (profile) {
      setName(profile.name || "");
      setEmail(profile.email || "");
      setBirthdate(profile.birthdate || "");
      setPhone(profile.phone || "");
      setAddress(profile.address || "");
      setOccupation(profile.occupation || "");
      setRole(profile.role || "");
      setImage(profile.image || "");
    }
  }, [profile]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleOccupationChange = (e) => {
    setOccupation(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
  };

  const handleUpdateProfile = () => {
    const updatedUserData = {
      name,
      email,
      birthdate,
      phone,
      address,
      occupation,
      role,
      profileImage,
    };
    dispatch(updateProfile(user.sub, updatedUserData));
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

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
                    <label className="labels">Ocupación</label>
                    <Input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Ayúdanos a conocerte más"
                      value={occupation}
                      onChange={handleOccupationChange}
                    />
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
                <div>
                  <Button
                    className="profile-button"
                    type="button"
                    onClick={handleUpdateProfile}
                  >
                    Guardar cambios
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
