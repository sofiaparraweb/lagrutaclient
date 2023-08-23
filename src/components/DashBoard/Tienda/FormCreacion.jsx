import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductTypes } from "../../../Redux/actions";
import Swal from "sweetalert2";
import style from "./FormCreacion.module.css";

import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

function validate(name, price, image, description, stock, type) {
  let errors = {};

  if (!name || !/^[A-Za-z]+$/.test(name)) {
    errors.name = "Debe ingresar un nombre válido, solo se permiten letras";
  }
  if (!price) {
    errors.price = "Debe ingresar un precio del producto";
  }
  if (!image) {
    errors.img = "Debe ingresar una imagen del producto";
  }
  if (!description) {
    errors.description = "Debe ingresar una descripcion del producto";
  }
  if (!stock) {
    errors.stock = "Debe ingresar el stock de unidades a vender";
  }
  if (!type) {
    errors.type = "Debe ingresar el tipo de producto a vender";
  }

  return errors;
}

const FormCreacion = () => {
  const dispatch = useDispatch();
  const allProductTypes = useSelector(
    (state) => state.LocalPersist.allProductTypes
  );

  const [errors, setErrors] = useState({});
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    dispatch(getAllProductTypes());
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
    } else if (name === "price") {
      setPrice(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "stock") {
      setStock(value);
    } else if (name === "type") {
      setType(value);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
    setErrors((prevErrors) => ({
      ...prevErrors,
      img: undefined,
    }));
  };

  const handleSubmit = async (e) => {
    // const LOCAL = "https://lagruta.onrender.com";
    const LOCAL = "http://localhost:3001";
    e.preventDefault();

    const validationErrors = validate(
      name,
      price,
      image,
      description,
      stock,
      type
    );
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("stock", stock);
    formData.append("type", type);

    try {
      const res = await axios.post(`${LOCAL}/products/create`, formData);
      Swal.fire({
        icon: "success",
        title: "Producto agregado con éxito",
      });
      const imgUrl = res.data;
      console.log("url de la img", imgUrl);

      setName("");
      setImage(null);
      setPreviewImage(null);
      setDescription("");
      setPrice("");
      setStock("");
      setType("");
      setErrors({});
    } catch (err) {
      console.log("error al subir imagen", err);
    }
  };

  return (
    <div>
      <section class="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 class="text-xl font-bold text-white capitalize dark:text-white">
          Publicar nuevo producto
        </h1>
        <form onSubmit={handleSubmit}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-white dark:text-gray-200" htmlFor="name">
                Nombre del producto
              </label>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Nombre de producto"
                onChange={handleInputChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors?.name && <p className="text-red-600"> {errors.name}</p>}
            </div>
            <div>
              <label class="text-white dark:text-gray-200" htmlFor="">
                Seleccione categoría del producto
              </label>
              <select
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={type}
                onChange={(e) => setType(e.target.value)}>
                <option key="" value="">
                  {" "}
                  Seleccionar categoría
                </option>
                {allProductTypes?.map((e) => {
                  return (
                    <option key={e.id} value={e.name}>
                      {" "}
                      {e.name}
                    </option>
                  );
                })}{" "}
              </select>
            </div>
            <div>
              <label class="text-white dark:text-gray-200" htmlFor="price">
                Precio $$
              </label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="number"
                value={price}
                name="price"
                placeholder="indique un valor"
                onChange={handleInputChange}
              />
              {errors?.price && <p className="text-red-600"> {errors.price}</p>}
            </div>
            <div>
              <label
                class="text-white dark:text-gray-200"
                htmlFor="description">
                Descripción del producto
              </label>
              <textarea
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={description}
                name="description"
                placeholder="descripción del producto"
                onChange={handleInputChange}
              />
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
                  <svg
                    className="mx-auto h-12 w-12 text-white mt-0.5"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true">
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="img"
                      className="relative cursor-pointer bg-indigo-600 rounded-md font-medium text-white  focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
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
                  <p class="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>{" "}
              {errors?.img && <p className="text-red-600"> {errors.img}</p>}
            </div>
            <div className="justify-end">
              <label class="block text-sm font-medium text-white">
                Pevisualizacion
              </label>
              <div className="mt-1 flex justify-center  px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                {previewImage && (
                  <img src={previewImage} alt="Vista previa de la imagen" />
                )}
              </div>
            </div>

            <label class="text-white dark:text-gray-200" htmlFor="stock">
              Cantidad de unidades a vender
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="integer"
              value={stock}
              name="stock"
              onChange={handleInputChange}
            />
            {errors?.stock && <p className="text-red-600"> {errors.stock}</p>}
            <label className={style.LabelForm} htmlFor="">
              Seleccione un tipo de producto
            </label>
          </div>
          <div class="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
              Publicar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default FormCreacion;
