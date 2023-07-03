import React from "react";
import style from "./FormDona.module.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { enviarInformacion } from "../../Redux/actions";
import { useState } from "react";
//import axios from "axios";


const FormDona = ({ selectedOption, customValue }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    user_mail: "",
    phone: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  console.log(selectedOption, customValue);

  const customSubmit = async (user) => {
    setLoading(true);
    user.amount = selectedOption;
    user.customValue = customValue;
    console.log(user);
    dispatch(enviarInformacion(user)).then((response) => {
        console.log("esto es prueba", response);
      if (response) {
        window.open(response.init_point, "_blank");
      } else {
        Swal.fire("Error", "Hubo un error al enviar la información", "error");
      }
      setLoading(false);
      reset();
    });
  };

  return (
    <>
      <div className={style.contentPrincipal}>
        <form onSubmit={handleSubmit(customSubmit)} className={style.formReact}>
          <div className={style.formControl}>
            <label className={style.labeles}>Nombre</label>
            <input
              className={style.inputs}
              name="name"
              placeholder="Nombre"
              onChange={handleInput}
              type="text"
              {...register("name", {
                required: true,
                maxLength: 30,
              })}
            />
            {errors.name?.type === "required" && (
              <p className={style.fail}>El campo no puede estar vacío</p>
            )}
            {errors.name?.type === "maxLength" && (
              <p className={style.fail}>El máximo de caracteres es 30</p>
            )}
<<<<<<< HEAD
        </div>

        <div className={style.formControl}>
=======
          </div>

          <div className={style.formControl}>
>>>>>>> f87c3e19ecc097b7aa0f789ddd7ca424cf5bcd36
            <label className={style.labeles}>Apellido</label>
            <input
              className={style.inputs}
              name="lastName"
              placeholder="Apellido"
              onChange={handleInput}
              type="text"
              {...register("lastName", {
                required: true,
                maxLength: 30,
              })}
            />
            {errors.lastName?.type === "required" && (
              <p className={style.fail}>El campo no puede estar vacío</p>
            )}
            {errors.lastName?.type === "maxLength" && (
              <p className={style.fail}>El máximo de caracteres es 30</p>
            )}
          </div>

          <div className={style.formControl}>
            <label className={style.labeles}>Email</label>
            <input
              className={style.inputs}
              name="user_mail"
              placeholder="Ingrese correo"
              onChange={handleInput}
              type="text"
              {...register("user_mail", {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                required: true,
              })}
            />
            {errors.user_mail?.type === "pattern" && (
              <p className={style.fail}>Tiene que ser un email correcto</p>
            )}
            {errors.user_mail?.type === "required" && (
              <p className={style.fail}>El correo es requerido</p>
            )}
          </div>

          <div className={style.formControl}>
            <label className={style.labeles}>
              Teléfono (Cód. Área + número)
            </label>
            <input
              className={style.inputs}
              name="phone"
              placeholder="11 12345678"
              onChange={handleInput}
              type="number"
              {...register("telefono", {
                required: {
                  value: true,
                  message: "El campo no puede estar vacio",
                },
              })}
            />
            {errors.telefono && (
              <p className={style.fail}>{errors.telefono.message}</p>
            )}
          </div>
          <button className={style.boton} type="submit" disabled={loading}>
            {" "}
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </>
  );
};


export default FormDona;
