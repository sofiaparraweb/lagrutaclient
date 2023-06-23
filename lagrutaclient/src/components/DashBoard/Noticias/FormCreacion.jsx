import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { create_news, getTypeActi } from "../../../Redux/actions"

import style from "./FormCreacion.module.css";


 function validate(name, date, description,selectedImage, typeActivity) {
  let errors = {};
  if (!name) {
    errors.name = "La publicación requiere un título";
  }
  if (!description) {
    errors.description = "La publicación requiere una descripción minima";
  }
  if (!selectedImage) {
    errors.img = "Esta publicación debe tener una imagen"
  }

  if (!typeActivity) {
    errors.ActivityTypes = "Está publicación necesita una categoría"
  }
  return errors;
}


const FormCreacion = () => {
  const dispatch = useDispatch();
  const selectedTypesRef = useRef([])
  const Types = useSelector ((state) => state.activityTypes)


  
  const [errors, setErrors] = useState({});


  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [typeActivity, setTypeActivity] = useState([]);


  useEffect(() => {
    dispatch(getTypeActi());
  }, []);



const handleImageChange = (e) => {
  setSelectedImage(e.target.files[0]);
};

const handleNameChange = (e) => {
  setName(e.target.value);
  setErrors(
    validate(
      name,
    )
  );
 };
 
 const handleDateChange = (e) => {
  setDate(e.target.value);
   console.log('fecha', date);
 }

 const handleDescriptionChange = (event) => {
  setDescription(event.target.value);
};



const handleSubmit = async (e) => {

  const LOCAL =  "http://localhost:3001";

  e.preventDefault();
  const formData = new FormData();
    formData.append('img', selectedImage);
    formData.append('name', name);
    formData.append('date', date);
    formData.append('description', description);
    formData.append('type_activity', typeActivity);

    try {

      const res = await axios.post(`${LOCAL}/activity/`, formData);
      console.log(res)
      const imgUrl = res.data;
      console.log('url de la img', imgUrl);

    } catch (err) {
      console.log('error al subir imagen', err)
    }

}

  return (
    <section className={style.section}>
      <div className={style.formContainer}>
        <div className={style.headerForm}> 
        <h1>Publicar noticias y actividades nuevas</h1>
        <p>En este apartado puedes crear una noticias o actividad nueva, recuerda también, que puedes editarla una vez este publicada. </p>
        </div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input type="text" value={name} onChange={handleNameChange} />
      {" "}
            {errors.name && <p className="error"> {errors.name}</p>}
      <label htmlFor="date">Fecha:</label>
      <input type="date" value={date} onChange={handleDateChange} />
      {" "}
      {errors.date && <p className="error"> {errors.date}</p>}
      <label htmlFor="description">Descripción:</label>
      <textarea value={description} onChange={handleDescriptionChange}/>
      {" "}
      {errors.description && <p className="error"> {errors.description}</p>}
      <label htmlFor="img">Imagen:</label>
      <input type="file" accept="img/*" onChange={handleImageChange} />
      {" "}
      {errors.img && <p className="error"> {errors.img}</p>}
      <label htmlFor="">Seleccione categoría de la noticia</label>
       {/* <div className="types-s">
        <select className={style.input}onChange={handleSelect}>
        <option key="" value=""> Seleccionar categoria</option>
           {Types?.map((e) => (
            <option key={e.id} value={e.name}> {e.name}</option>
           ))}{" "}
          </select>
      </div>  */}
      <button type="submit">Enviar</button>
    </form>
    </div>
    </section>
  );
}


export default FormCreacion;
