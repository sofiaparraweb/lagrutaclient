import axios from 'axios';
import React, { useState } from 'react';
import { validateUsuario } from './Validation';
import { useDispatch } from 'react-redux';
import './FormVoluntario.css'

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
  const [formValid, setFormValid] = useState(false);

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
      <form onSubmit={submitHandler} className="form">
        <h1>ANIMATE A SER PARTE!</h1>
        <div>
          <label>Nombre y Apellido *</label>
          <input type="text" value={newUser.name} onChange={changeHandler} name="name" />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Número celular *</label>
          <input type="text" value={newUser.phone} onChange={changeHandler} name="phone" />
          {errors.phone && <span>{errors.phone}</span>}
        </div>
        <div>
          <label>Actividad en la que estas interesado *</label>
          <select value={newUser.role} onChange={changeHandler} name="role">
            {renderRoleOptions()}
          </select>
          {errors.role && <span>{errors.role}</span>}
        </div>
        <div>
          <label>Tienes alguna duda en particular?</label>
          <input type="text" value={newUser.description} onChange={changeHandler} name="description" />
          {errors.description && <span>{errors.description}</span>}
        </div>
        <button type="submit" disabled={!isValidForm}>
          ENVIAR FORMULARIO
        </button>
      </form>
    </div>
  );
};

export default FormVoluntario;
