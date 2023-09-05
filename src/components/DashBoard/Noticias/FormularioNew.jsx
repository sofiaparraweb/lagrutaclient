import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, create_news, getTypeActi } from "../../../Redux/actions";

import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";


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



const FormularioNews = () => {

  const dispatch = useDispatch();
  const Types = useSelector((state) => state.LocalPersist.activityTypes);

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
    const file = e.target.files[0];
    setSelectedImage(file);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
    setErrors((prevErrors) => ({
      ...prevErrors,
      img: undefined,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(name, date, description, selectedImage);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("type_activity", types_activity);
    formData.append("date", date);
    formData.append("img", selectedImage);

    try {
      
    dispatch(addProduct(formData));
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


    return ( <div>
        <section class="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
    <h1 class="text-xl font-bold text-white capitalize dark:text-white">Publicar nueva noticia/actividad</h1>
    <form onSubmit={handleSubmit} method="POST" enctype="multipart/form-data">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="text-white dark:text-gray-200"  htmlFor="name">Título de publicación</label>
                <input 
                name="name"
                value={name}
                onChange={handleInputChange} 
                type="text" 
                placeholder="Título de publicación"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            {errors?.name && <p className="text-red-600"> {errors.name}</p>}
            </div>
            <div>
                <label class="text-white dark:text-gray-200" htmlFor="">Seleccione categoría de la publicación</label>
                <select 
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={types_activity}
                onChange={(e) => setTypesActivity(e.target.value)}>
                <option key="" value="">
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
            <div>
                <label class="text-white dark:text-gray-200"  htmlFor="date">Fecha de publicación</label>
                <input 
                 type="date"
                 value={date}
                 name="date"
                 onChange={handleInputChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
             {errors?.date && <p className="text-red-600"> {errors.date}</p>}
            </div>
            <div>
                <label class="text-white dark:text-gray-200"  htmlFor="description">Descripción de la publicación</label>
                <textarea 
                 value={description}
                 name="description"
                 placeholder="descripción de la publicación"
                 onChange={handleInputChange} 
                 className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                 {errors?.description && (
                <p className="text-red-600"> {errors.description}</p>
              )}
            </div>
            <div>
                <label className="block text-sm font-medium text-white">
                Cargar imagen
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-white mt-0.5" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="img" 
                    className="relative cursor-pointer bg-indigo-600 rounded-md font-medium text-white  focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500" >
                          <input 
                         id="file-upload"
                         name="file-upload" 
                         type="file"
                         accept="img/*"
                         onChange={handleImageChange}
                         className="flex justify-center"
                          />
                   </label>
                    
                  </div>
                  <p class="text-xs text-white">
                    PNG, JPG, GIF up to 10MB
                  </p>
                  
                </div>
              </div> 
              {" "}
              {errors?.img && <p className="text-red-600"> {errors.img}</p>}
              </div>
              <div className="justify-end">
              <label class="block text-sm font-medium text-white">
                Pevisualizacion
              </label>
              <div className="mt-1 flex justify-center  px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    {previewImage && (
              <img
                src={previewImage}
                alt="Vista previa de la imagen"
              />
            )}
            </div>
            </div>
            
        </div>

        <div class="flex justify-end mt-6">
  <button 
  type="submit"
  className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Publicar</button>
</div>
    </form>
</section>
</div>
    );
}

export default FormularioNews;
