import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './LogIn.css';

const LogIn = () => {
  const auth = useAuth();
  const {displayName} = auth.user
 
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    auth.register(emailRegister, passwordRegister);
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    auth.logIn(email, password);
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    auth.logInGoogle();
  };

  const handleLogout = () => {
    auth.logOut();
  }
  return (
    <div className="login-container">
      {displayName && <h5>Gracias por suscribirte {displayName}</h5>}
      <form className='form'>
        <h3>Registrate</h3>
        <input
          onChange={(e) => setEmailRegister(e.target.value)}
          className='inputLogIn'
          type='email'
          placeholder='Email' // Agrega un placeholder para guiar al usuario
        />
        <input
          onChange={(e) => setPasswordRegister(e.target.value)}
          className='inputLogIn'
          type='password'
          placeholder='Password' // Agrega un placeholder para guiar al usuario
        />
        <button onClick={handleRegister}>Enviar</button>
      </form>

      <form>
        <h3>Iniciar Sesión</h3>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className='inputLogIn'
          type='email'
          placeholder='Email' // Agrega un placeholder para guiar al usuario
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className='inputLogIn'
          type='password'
          placeholder='Password' // Agrega un placeholder para guiar al usuario
        />
        <button onClick={(e) => handleLogIn(e)}>Enviar</button>
      <button onClick={(e) => handleGoogle(e)} className='buttonLogIn'>Iniciar Sesión con Google</button>
      </form>
      <button onClick={() => handleLogout()}>Cerrar Sesion</button>

    </div>
  );
};

export default LogIn;
