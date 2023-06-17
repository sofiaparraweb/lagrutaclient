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
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [ocupation, setOcupation] = useState("");
  const [role, setRole] = useState("");
  const [profilePicture, setProfilePicture] = useState(user.image);

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
      setMobileNumber(profile.mobileNumber || "");
      setAddress(profile.address || "");
      setOcupation(profile.ocupation || "");
      setRole(profile.role || "");
      setProfilePicture(profile.picture || "");
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

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleOcupationChange = (e) => {
    setOcupation(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setProfilePicture(imageUrl);
  };

  const handleUpdateProfile = () => {
    const updatedUserData = {
      name,
      email,
      birthdate,
      mobileNumber,
      address,
      ocupation,
      role,
      picture,
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
              <h4 className="text-right">TU PERFIL</h4>
            </div>
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <div className="profile-picture-container">
                  <img
                    className="rounded-circle profile-picture"
                    src={profilePicture || "https://img.freepik.com/vector-premium/diseno-avatar-persona_24877-38130.jpg?w=2000"}
                    alt="Profile"
                  />
                  <label htmlFor="profile-picture" className="profile-picture-label">
                    <input
                      id="profile-picture"
                      type="file"
                      accept="image/*"
                      onChange={handleProfilePictureChange}
                    />
                  </label>
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
                      className="form-control"
                      placeholder="Nombre completo"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Email</label>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Ingresa tu correo electrónico"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Fecha de Nacimiento</label>
                    <Input
                      type="date"
                      className="form-control"
                      placeholder="Ingresa tu fecha de nacimiento"
                      value={birthdate}
                      onChange={handleBirthdateChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Número de Teléfono</label>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Tu número de teléfono"
                      value={mobileNumber}
                      onChange={handleMobileNumberChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Dirección</label>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Tu dirección"
                      value={address}
                      onChange={handleAddressChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Ocupación</label>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Ayúdanos a conocerte más"
                      value={ocupation}
                      onChange={handleOcupationChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Rol</label>
                    <Select
                      className="form-control"
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
                <div className="mt-5 text-center">
                  <Button
                    className="btn btn-primary profile-button"
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
