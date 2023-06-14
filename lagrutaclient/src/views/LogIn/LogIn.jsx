// Componente LogIn
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogIn = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <button onClick={handleLogin}>Iniciar sesión con Auth0</button>
    </div>
  );
};

export default LogIn;
