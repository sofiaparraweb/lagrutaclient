import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { create_news, getTypeActi } from "../../../Redux/actions";


import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import style from "./FormCreacion.module.css";

function validate(name, date, description, selectedImage) {
  let errors = {};
  if (!name) {
    errors.name = "La publicación requiere un título";
  }
  if (!description) {
    errors.description = "La publicación requiere una descripción minima";
  }
  if (!selectedImage) {
    errors.img = "Esta publicación debe tener una imagen";
  }

  if (!date) {
    errors.date = "Esta publicación debe tener una fecha";
  }

  return errors;
}

const FormCreacion = () => {
  const dispatch = useDispatch();
  const Types = useSelector((state) => state.activityTypes);

  const [errors, setErrors] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [types_activity, setTypesActivity] = useState("");

  useEffect(() => {
    dispatch(getTypeActi());
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Restablecer el error asociado al campo actual
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));

    // Actualizar el valor del campo
    if (name === "name") {
      setName(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "date") {
      setDate(value);
    } else if (name === "types_activity") {
      setTypesActivity(value);
    }
  };


  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
    setErrors((prevErrors) => ({
      ...prevErrors,
      img: undefined,
    }));
  };

  const handleSubmit = async (e) => {
    const LOCAL = "http://localhost:3001";
    e.preventDefault();

    const validationErrors = validate(name, date, description, selectedImage);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const formData = new FormData();
    formData.append("img", selectedImage);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("types_activity", types_activity);

    try {
      const res = await axios.post(`${LOCAL}/activity/`, formData);
      alert("Actividad creada con éxito");
      console.log(res);
      const imgUrl = res.data;
      console.log("url de la img", imgUrl);

    setName("");
    setSelectedImage(null);
    setPreviewImage(null);
    setDescription("");
    setDate("");
    setTypesActivity("");
    setErrors({});

    } catch (err) {
      console.log("error al subir imagen", err);
    }

  };

  return (
    <section className={style.section}>
      <div className={style.formContainer}>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-gray-700">Estadísticas Generales</h1>
      </div>

      
        <div className={style.bottompart}>
          <div className={style.imgpart}>
            {previewImage && (
              <img
                className={style.previewImage}
                src={previewImage}
                alt="Vista previa de la imagen"
              />
            )}
          </div>
          <div className={style.formpart}>
            <form onSubmit={handleSubmit}>
              <label className={style.LabelForm} htmlFor="name">
                Título de publicación
              </label>
              <input
                className={style.inputbox}
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
              {errors?.name && <p className={style.error}> {errors.name}</p>}
              <label className={style.LabelForm} htmlFor="date">
                Fecha de publicación
              </label>
              <input
                className={style.inputbox}
                type="date"
                value={date}
                name="date"
                onChange={handleInputChange}
              />
              {errors?.date && <p className={style.error}> {errors.date}</p>}
              <label className={style.LabelForm} htmlFor="description">
                Descripción de la noticia
              </label>
              <textarea
                className={style.inputbox}
                value={description}
                name="description"
                placeholder="descripción de la noticia"
                onChange={handleInputChange}
              />
              {errors?.description && (
                <p className={style.error}> {errors.description}</p>
              )}
              <label className={style.LabelForm} htmlFor="img">
                Imagen de portada
              </label>
              <input
                className={style.inputbox}
                type="file"
                accept="img/*"
                onChange={handleImageChange}
              />{" "}
              {errors?.img && <p className={style.error}> {errors.img}</p>}
              <label className={style.LabelForm} htmlFor="">
                Seleccione categoría de la noticia
              </label>
              <div className="types-s">
                <select
                  className={style.inputbox}
                  value={types_activity}
                  onChange={(e) => setTypesActivity(e.target.value)}>
                  <option className={style.options} key="" value="">
                    {" "}
                    Seleccionar categoría
                  </option>
                  {Types?.map((e, index) => (
                    <option key={e.id} value={e.name}>
                      {" "}
                      {e.name}
                    </option>
                  ))}{" "}
                </select>
              </div>
              <button className={style.submitbtn} type="submit">
                Publicar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormCreacion;
