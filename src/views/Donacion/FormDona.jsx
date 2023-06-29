import React from "react";
import style from "./FormDona.module.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { enviarInformacion } from "../../Redux/actions";
// import { formDonacion } from "../../Redux/actions";

const FormDona = () => {
    const { register, handleSubmit, reset, formState: { errors }} = useForm() 
    const dispatch = useDispatch();

    const customSubmit = (data) => {
        //console.log(data)
        // dispatch(formDonacion(data));
        dispatch(enviarInformacion(data));

        Swal.fire(
            "¡Validación exitosa!",
            "Continua!"
          )
        reset();
    }
    
  return (
    <>
      <div className={style.contentPrincipal}>
        <form onSubmit={handleSubmit(customSubmit)} className={style.formReact}>
          <div className={style.formControl}>
            <label className={style.labeles}>Nombre</label>
            <input
              className={style.inputs}
              placeholder="Nombre"
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
              className={style.inputs}
              placeholder="Apellido"
              type="text"
              {...register("lastName", {
                required: true,
                maxLength: 50,
              })}
            />
            {errors.lastName?.type === "required" && (
              <p className={style.fail}>El campo no puede estar vacío</p>
            )}
            {errors.lastName?.type === "maxLength" && (
              <p className={style.fail}>El máximo de caracteres es 50</p>
            )}
          </div>

          <div className={style.formControl}>
            <label className={style.labeles}>Email</label>
            <input
              className={style.inputs}
              placeholder="Ingrese correo"
              type="text"
              {...register("email", {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                required: true,
              })}
            />
            {errors.email?.type === "pattern" && (
              <p className={style.fail}>Tiene que ser un email correcto</p>
            )}
            {errors.email?.type === "required" && (
              <p className={style.fail}>El correo es requerido</p>
            )}
          </div>

          <div className={style.formControl}>
            <label className={style.labeles}>Teléfono (Cód. Área + número)</label>
            <input
              className={style.inputs}
              placeholder="11 12345678"
              type="number"
              {...register("telefono", {
                required: {
                  value: true,
                  message: "El campo no puede estar vacio",
                },
              })}
            />
            {errors.telefono && <p className={style.fail}>{errors.telefono.message}</p>}
          </div>
          <button className={style.boton} type="submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default FormDona;
