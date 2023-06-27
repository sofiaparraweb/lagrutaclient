import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formVoluntario } from '../../Redux/actions';
import { validateUsuario } from './Validation';
import './FormVoluntario.css';

const FormVoluntario = () => {
  const [newUser, setNewUser] = useState({
    name: '',
    mail: '',
    phone: '',
    role: '',
    description: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    mail: '',
    phone: '',
    role: '',
    description: '',
  });

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);

  const roles = [
    { value: '', label: 'Elegi un proyecto' },
    { value: 'Taller de jóvenes', label: 'Taller de jóvenes' },
    { value: 'Taller de mujeres', label: 'Taller de mujeres' },
    { value: 'Taller de niños', label: 'Taller de niños' },
    { value: 'Salud y Comunidad', label: 'Salud y Comunidad' },
    { value: 'Catequesis y pastoral', label: 'Catequesis y pastoral' },
    { value: 'Quiero informarme de todos', label: 'Quiero ifnromarme de todos' },
  ];

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
  
    console.log('Botón del formulario apretado');
  

    const formErrors = validateUsuario(newUser);
    setErrors(formErrors);

    if (Object.values(formErrors).some((val) => val !== '')) {
      window.alert('Por favor, complete todos los campos correctamente');
    } else {
      window.alert('Formulario enviado, nos comunicaremos en breve');
      dispatch(formVoluntario({
        ...newUser,
        mail: newUser.mail}));
      resetForm();
    }
  };

  const resetForm = () => {
    setNewUser({
      name: '',
      mail: '',
      phone: '',
      role: '',
      description: '',
    });
    setErrors({
      name: '',
      mail: '',
      phone: '',
      role: '',
      description: '',
    });
  };

  const renderErrors = () => {
    return Object.values(errors).map((error, index) => (
      <span key={index} className="form-voluntario-error-message">
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
          <label className="form-voluntario-label">Correo electrónico *</label>
          <input type="text" name="mail" value={newUser.mail} onChange={changeHandler} className="form-voluntario-input" />
          {errors.mail && <span className="form-voluntario-error-message">{errors.mail}</span>}
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
        {!isValidForm && (
          <span className="form-voluntario-error-message">Complete todos los campos</span>
        )}
      </form>
    </div>
  );
};

export default FormVoluntario;
