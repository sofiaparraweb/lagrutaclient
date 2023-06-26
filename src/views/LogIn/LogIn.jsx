import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './LogIn.css'; // Importa tu archivo CSS para estilos específicos de LogIn

const LogIn = () => {
  const { loginWithRedirect } = useAuth0();

  return (
<div className="login-container"> 
      <button onClick={loginWithRedirect}>Iniciar sesión</button>
   </div> 
  );
};

export default LogIn;
