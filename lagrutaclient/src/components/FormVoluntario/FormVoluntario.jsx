import React, { useState } from 'react';
// import { sendConfirmationEmail } from './EmailService'; // Importa la función que envía el correo electrónico
import { useDispatch } from 'react-redux';
import { validateUsuario } from './Validation';
import './FormVoluntario.css';

const FormVoluntario = () => {
  const [newUser, setNewUser] = useState({
    name: '',
    phone: '',
    role: '',
    description: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    role: '',
    description: '',
  });

  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setNewUser((prevUser) => ({
      ...prevUser,
      [property]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [property]: validateUsuario({ ...newUser, [property]: value }, prevErrors)[property],
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitClicked(true);

    setErrors(validateUsuario(newUser, errors));

    if (Object.values(errors).some((val) => val !== '')) {
      return;
    }

    // Mostrar alerta al usuario
    window.alert('Formulario enviado, nos comunicaremos en breve.');

    // Enviar correo electrónico de confirmación
    // sendConfirmationEmail(newUser);

    // Realizar la solicitud al servidor
    axios
      .post('http://localhost:3001/user', newUser)
      .then((res) => {
        console.log(res);
        alert(res.data);
        setNewUser({
          name: '',
          phone: '',
          role: '',
          description: '',
        });
        setErrors({
          name: '',
          phone: '',
          role: '',
          description: '',
        });
      })
      .catch((err) => {
        if (err.response) {
          const errorMessage = err.response.data.message;
          setErrors((prevErrors) => ({
            ...prevErrors,
            server: errorMessage,
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            server: 'Failed to create user',
          }));
        }
      });
  };

  const dispatch = useDispatch();

  const roles = [
    { value: '', label: 'Elegi un proyecto' },
    { value: 'act1', label: 'act1' },
    { value: 'act2', label: 'act2' },
    { value: 'act3', label: 'act3' },
  ];

  const renderErrors = () => {
    if (!isSubmitClicked) {
      return null;
    }

    return Object.values(errors).map((error, index) => (
      <span key={index} className="error-message">
        {error}
      </span>
    ));
  };

  
  const renderRoleOptions = () => {
    return roles.map((role) => (
      <option key={role.value} value={role.value}>
        {role.label}
      </option>
    ));
  };

  const isValidForm = Object.values(errors).every((val) => val === '');

  return (
    <div>
      <form onSubmit={submitHandler} className="form-voluntario">
        <h1>ANIMATE A SER PARTE!</h1>
        <div>
          <label className="form-voluntario-label">Nombre y Apellido *</label>
          <input type="text" name="name" value={newUser.name} onChange={changeHandler} className="form-voluntario-input" />
          {errors.name && <span className="form-voluntario-error-message">{errors.name}</span>}
        </div>
        <div>
          <label className="form-voluntario-label">Número celular *</label>
          <input type="text" name="phone" value={newUser.phone} onChange={changeHandler} className="form-voluntario-input" />
          {errors.phone && <span className="form-voluntario-error-message">{errors.phone}</span>}
        </div>
        <div>
          <label className="form-voluntario-label">Actividad en la que estás interesado *</label>
          <select name="role" value={newUser.role} onChange={changeHandler} className="form-voluntario-select">
            {renderRoleOptions()}
          </select>
          {errors.role && <span className="form-voluntario-error-message">{errors.role}</span>}
        </div>
        <div>
          <label className="form-voluntario-label">Tienes alguna duda en particular?</label>
          <input type="text" name="description" value={newUser.description} onChange={changeHandler} className="form-voluntario-input" />
          {errors.description && <span className="form-voluntario-error-message">{errors.description}</span>}
        </div>
        <button type="submit" disabled={!isValidForm} className="form-voluntario-submit-button">
          ENVIAR FORMULARIO
        </button>
        {!isValidForm && <span className="form-voluntario-error-message">Complete todos los campos</span>}
      </form>
    </div>
  );
};

export default FormVoluntario;