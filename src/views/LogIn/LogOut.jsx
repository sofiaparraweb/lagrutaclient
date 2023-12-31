import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogOut = () => {
  const { logout } = useAuth0();

  return (
    <div>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default LogOut;
