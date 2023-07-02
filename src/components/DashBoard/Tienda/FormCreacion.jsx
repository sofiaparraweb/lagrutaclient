import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductTypes } from "../../../Redux/actions";
import Swal from "sweetalert2";
import style from "./FormCreacion.module.css";

function validate(name, price, image, description, stock, product_Types) {
  let errors = {};
  if (!name) {
    errors.name = "Debe ingresar un nombre para el producto";
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
  if (!product_Types) {
    errors.product_Types = "Debe ingresar el tipo de producto a vender";
  }

  return errors;
}

const FormCreacion = () => {
  const dispatch = useDispatch();
  const allProductTypes = useSelector((state) => state.allProductTypes);

  const [errors, setErrors] = useState({});
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [product_Types, setProduct_Types] = useState("");

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
    } else if (name === "product_Types") {
      setProduct_Types(value);
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
    const LOCAL = "http://localhost:3001";
    e.preventDefault();

    const validationErrors = validate(name, price, image, description, stock, product_Types); 
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
    formData.append("product_Types", product_Types);

    try {
      const res = await axios.post(`${LOCAL}/products/create`, formData);
      Swal.fire({
        icon: 'success',
        title: 'Producto agregado con éxito',
      });
      const imgUrl = res.data;
      console.log("url de la img", imgUrl);      

    setName("");
    setImage(null);
    setPreviewImage(null);
    setDescription("");
    setPrice("");
    setStock("");
    setProduct_Types("");
    setErrors({});

    } catch (err) {
      console.log("error al subir imagen", err);
    }

  };

  return (
    <section className={style.section}>
      <div className={style.formContainer}>
        <div className={style.headerForm}>
          <h1 className={style.h1form}>
            Agregar productos nuevos a la tienda
          </h1>
          <p>
            En este apartado puedes añadir productos nuevos a la tienda,
            recuerda también, que puedes editarlos una vez este publicados.{" "}
          </p>
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
                Nombre del producto
              </label>
              <input
                className={style.inputbox}
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
              {errors?.name && <p className={style.error}> {errors.name}</p>}
              <label className={style.LabelForm} htmlFor="price">
                Precio del producto
              </label>
              <input
                className={style.inputbox}
                type="integer"
                value={price}
                name="price"
                onChange={handleInputChange}
              />
              {errors?.price && <p className={style.error}> {errors.price}</p>}
              <label className={style.LabelForm} htmlFor="description">
                Descripción del producto
              </label>
              <textarea
                className={style.inputbox}
                value={description}
                name="description"
                placeholder="descripción del producto"
                onChange={handleInputChange}
              />
              {errors?.description && (
                <p className={style.error}> {errors.description}</p>
              )}
              <label className={style.LabelForm} htmlFor="image">
                Imagen ilustrativa del producto
              </label>
              <input
                className={style.inputbox}
                type="file"
                accept="img/*"
                onChange={handleImageChange}
              />{" "}
              {errors?.img && <p className={style.error}> {errors.img}</p>}
              <label className={style.LabelForm} htmlFor="stock">
                Cantidad de unidades a vender
              </label>
              <input
                className={style.inputbox}
                type="integer"
                value={stock}
                name="stock"
                onChange={handleInputChange}
              />
              {errors?.stock && <p className={style.error}> {errors.stock}</p>}  
              <label className={style.LabelForm} htmlFor="">
                Seleccione un tipo de producto
              </label>
              <div className="types-s">
                <select
                  className={style.inputbox}
                  value={product_Types}
                  onChange={(e) => setProduct_Types(e.target.value)}>
                  <option className={style.options} key="" value="">
                    {" "}
                    Seleccionar categoría
                  </option>
                  {allProductTypes?.map((e) => {
                    return (
                      <option key={e.id} value={e.name}>
                        {" "}
                        {e.name}
                      </option>
                    )
                  })}{" "}
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