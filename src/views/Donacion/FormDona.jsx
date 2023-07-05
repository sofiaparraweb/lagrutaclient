import React from "react";
import style from "./FormDona.module.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { enviarInformacion } from "../../Redux/actions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const FormDona = ({ selectedOption, customValue }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    user_mail: "",
    phone: "",
    amount: 0,
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const validateForm = async () => {
    const formValidation = await trigger();
    setFormErrors(formValidation || {});
    return Object.keys(formValidation || {}).length === 0;
  };
  console.log(selectedOption, customValue);

  const customSubmit = async (user) => {
    setLoading(true);

    const isFormValid = await validateForm();

    if (isFormValid) {
      //user.amount = selectedOption;
      if (!user.amount && customValue !== "") {
        user.amount = customValue;
      } else {
        user.amount = selectedOption;
      }

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
        navigate(0);
      });
    }
  };

  return (
    <>
      <div className={style.contentPrincipal}>
        <form onSubmit={handleSubmit(customSubmit)} className={style.formReact}>
          <div className={style.formControl}>
            <label className={style.labeles}>Nombre</label>
            <input
              className={`${style.inputs} ${
                errors.name ? style.error : style.success
              }`}
              name="name"
              placeholder="Ingresar Nombre"
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
          </div>

          <div className={style.formControl}>
            <label className={style.labeles}>Apellido</label>
            <input
              className={`${style.inputs} ${
                errors.lastName ? style.error : style.success
              }`}
              name="lastName"
              placeholder="Ingresar Apellido"
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
              className={`${style.inputs} ${
                errors.user_mail ? style.error : style.success
              }`}
              name="user_mail"
              placeholder="Ingresar Email"
              onChange={handleInput}
              type="text"
              {...register("user_mail", {
                pattern: /^[^\s@]+@gmail\.com$/i,
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
              className={`${style.inputs} ${
                errors.phone ? style.error : style.success
              }`}
              name="phone"
              placeholder="+54 9 11 12345678"
              onChange={handleInput}
              type="text"
              {...register("phone", {
                maxLength: 15,
                required: "El campo no puede estar vacío",
                pattern: {
                  value:
                    /^\+(?:[0-9]?){1,3}[-. (]*(?:[0-9]{1,})[-. )]*(?:[0-9]{1,})[-. ]*(?:[0-9]{1,})$/,
                  message:
                    "Ingrese un número de teléfono válido (ejemplo: +54 9 11 12345678)",
                },
              })}
            />
            {errors.phone && (
              <p className={style.fail}>{errors.phone.message}</p>
            )}
            {errors.phone?.type === "maxLength" && (
              <p className={style.fail}> Ingrese un contacto válido</p>
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
