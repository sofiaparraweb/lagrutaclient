// import React, { useState } from 'react';
// import { useAuth } from '../../context/AuthContext';
// import './LogIn.css';

// const LogIn = () => {
//   const auth = useAuth();
//   const { displayName } = auth.user;

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [showRegistrationForm, setShowRegistrationForm] = useState(false);

//   const handleLogIn = (e) => {
//     e.preventDefault();
//     auth.logIn(email, password);
//   };

//   const handleGoogle = (e) => {
//     e.preventDefault();
//     auth.logInGoogle();
//   };

//   const handleLogout = () => {
//     auth.logOut();
//   };


//   const handleToggleRegistrationForm = () => {
//     setShowRegistrationForm(!showRegistrationForm);
//   };

//   return (
//     <div className="login-container">
//       {displayName && <h5>Gracias por suscribirte {displayName}</h5>}
//       {showRegistrationForm ? (
//         <form className="form">
//           <h3>Registrarse</h3>
//           <input
//             onChange={(e) => setFirstName(e.target.value)}
//             className="inputLogIn"
//             type="text"
//             placeholder="Nombre"
//             required
//           />
//           <input
//             onChange={(e) => setLastName(e.target.value)}
//             className="inputLogIn"
//             type="text"
//             placeholder="Apellido"
//             required
//           />
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             className="inputLogIn"
//             type="email"
//             placeholder="Email"
//             required
//           />
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             className="inputLogIn"
//             type="password"
//             placeholder="Contraseña"
//             required
//           />
//           <input
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="inputLogIn"
//             type="password"
//             placeholder="Confirmar Contraseña"
//             required
//           />
//           <button onClick={(e) => handleRegister(e)}>Registrarse</button>
//           <p>¿Ya tienes una cuenta? <span onClick={handleToggleRegistrationForm}>Inicia sesión</span></p>
//         </form>
//       ) : (
//         <form className="form">
//           <h3>Iniciar Sesión</h3>
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             className="inputLogIn"
//             type="email"
//             placeholder="Email"
//             required
//           />
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             className="inputLogIn"
//             type="password"
//             placeholder="Contraseña"
//             required
//           />
//           <button onClick={(e) => handleLogIn(e)}>Enviar</button>
//           <button onClick={(e) => handleGoogle(e)} className="buttonLogIn">
//             Iniciar Sesión con Google
//           </button>
//           <p>¿Todavía no tienes una cuenta? <span onClick={handleToggleRegistrationForm}>Regístrate</span></p>
//         </form>
//       )}
//     </div>
//   );
// };

// export default LogIn;

import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './LogIn.css';

const LogIn = () => {
  const auth = useAuth();
  const { displayName } = auth.user;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  // Estados para mensajes de error
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const handleLogIn = async (e) => {
    e.preventDefault();
    // Reiniciar el estado de error
    setEmailError('');
    setPasswordError('');
  
    try {
      await auth.logIn(email, password);
    } catch (error) {
      // Manejar el error específico de Firebase para credenciales incorrectas
      if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
        setEmailError('Correo electrónico o contraseña incorrectos.');
      } else {
        // Manejar otros errores de inicio de sesión
        console.error('Error al iniciar sesión:', error.message);
      }
    }
  };

// ...
const handleRegister = async (e) => {
  e.preventDefault();
  // Reiniciar los estados de error
  setEmailError('');
  setPasswordError('');
  setConfirmPasswordError('');
  setFirstNameError('');
  setLastNameError('');

  try {
    // Validaciones
    if (!/^[a-zA-Z\s]+$/.test(firstName)) {
      setFirstNameError('El nombre solo debe contener letras y espacios.');
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(lastName)) {
      setLastNameError('El apellido solo debe contener letras y espacios.');
      return;
    }

    if (!email.includes('@')) {
      setEmailError('El email debe contener un "@"');
      return;
    }

    if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Las contraseñas no coinciden.');
      return;
    }

    // Si todas las validaciones pasan, llamar a la función de registro
    await auth.register(email, password, firstName, lastName);
  } catch (error) {
    // Manejar el error específico de Firebase para correo electrónico ya en uso
    if (error.code === 'auth/email-already-in-use') {
      setEmailError('Este correo electrónico ya está registrado. Intenta iniciar sesión.');
    } else {
      // Manejar otros errores de registro
      console.error('Error al registrarse:', error.message);
    }
  }
};


  const handleGoogle = (e) => {
    e.preventDefault();
    // Lógica de inicio de sesión con Google, depende de tu implementación
    auth.logInGoogle();
  };

  const handleToggleRegistrationForm = () => {
    setShowRegistrationForm(!showRegistrationForm);
  };

  return (
    <div className="login-container">
      {displayName && <h5>Gracias por suscribirte {displayName}</h5>}
      {showRegistrationForm ? (
        <form className="form">
          <h3>Registrarse</h3>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            className="inputLogIn"
            type="text"
            placeholder="Nombre"
            required
          />
          {firstNameError && <p className="error-message">{firstNameError}</p>}
          <input
            onChange={(e) => setLastName(e.target.value)}
            className="inputLogIn"
            type="text"
            placeholder="Apellido"
            required
          />
          {lastNameError && <p className="error-message">{lastNameError}</p>}
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="inputLogIn"
            type="email"
            placeholder="Email"
            required
          />
          {emailError && <p className="error-message">{emailError}</p>}
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="inputLogIn"
            type="password"
            placeholder="Contraseña"
            required
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="inputLogIn"
            type="password"
            placeholder="Confirmar Contraseña"
            required
          />
          {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
          <button onClick={(e) => handleRegister(e)}>Registrarse</button>
          <p>
            ¿Ya tienes una cuenta? <span onClick={handleToggleRegistrationForm}>Inicia sesión</span>
          </p>
        </form>
      ) : (
        <form className="form">
          <h3>Iniciar Sesión</h3>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="inputLogIn"
            type="email"
            placeholder="Email"
            required
          />
          {emailError && <p className="error-message">{emailError}</p>}
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="inputLogIn"
            type="password"
            placeholder="Contraseña"
            required
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
          <button onClick={(e) => handleLogIn(e)}>Enviar</button>
          <button onClick={(e) => handleGoogle(e)} className="buttonLogIn">
            Iniciar Sesión con Google
          </button>
          <p>
            ¿Todavía no tienes una cuenta? <span onClick={handleToggleRegistrationForm}>Regístrate</span>
          </p>
        </form>
      )}
    </div>
  );
};

export default LogIn;
