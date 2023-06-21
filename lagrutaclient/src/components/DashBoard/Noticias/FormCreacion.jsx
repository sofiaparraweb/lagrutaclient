import { React, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { create_news, getTypeActi } from "../../../Redux/actions.jsx";

import style from "./FormCreacion.module.css";

const FormCreacion = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar los campos antes de enviar el formulario al backend

    if (name === '' || date === '' || description === '' || img === null) {
      alert('Por favor, complete todos los campos');
      return;
    }

    // Crear un objeto FormData para enviar los datos al backend
    const formData = new FormData();
    formData.append('name', name);
    formData.append('date', date);
    formData.append('description', description);
    formData.append('img', img);

   
    fetch('/uploadfile', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      // Manejargit la respuesta del backend
      console.log(response);
    })
    .catch(error => {
      // Manejar errores
      console.error(error);
    });
  }

  return (
    <section className={style.section}>
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

      <label htmlFor="date">Fecha:</label>
      <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />

      <label htmlFor="description">Descripción:</label>
      <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />

      <label htmlFor="img">Imagen:</label>
      <input type="file" id="img" name="img" accept="image/*" onChange={(e) => setImg(e.target.files[0])} required />

      <button type="submit">Enviar</button>
    </form>
    </section>
  );
}


export default FormCreacion;
