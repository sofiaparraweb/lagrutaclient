import React from "react";
import style from "./FormDona.module.css";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";


const FormDona = () => {
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm() 
    const customSubmit = (data) => {
        //console.log(data)
        Swal.fire(
            "¡Validación exitosa!",
            "Continua!"
          )
        reset();
    }
  
    
   
  return (
    <>
    <div className={style.contentPrincipal}>
        <form onSubmit={ handleSubmit(customSubmit) } className={style.formReact}>
            <div className={style.formControl}>
                <label>Nombre</label>
                <input 
                    placeholder="Nombre"
                    type="text" {...register('name',{ 
                    required:true,
                    maxLength:50
                })} />
                {errors.name?.type === 'required' && <p className={style.fail}>El campo no puede estar vacío</p>}
                {errors.name?.type === 'maxLength' && <p className={style.fail}>El máximo de caracteres es 50</p>}
            </div>

            <div className={style.formControl}>
                <label>Apellido</label>
                <input 
                    placeholder="Apellido"
                    type="text" {...register('lastName',{ 
                    required:true,
                    maxLength:50
                })} />
                {errors.lastName?.type === 'required' && <p className={style.fail}>El campo no puede estar vacío</p>}
                {errors.lastName?.type === 'maxLength' && <p className={style.fail}>El máximo de caracteres es 50</p>}
            </div>

            <div className={style.formControl}>
                <label>Email</label>
                <input 
                    placeholder="Ingrese correo"
                    type="text" {...register("email", {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    required:true
                      })} 
                      />
                {errors.email?.type === "pattern" && <p className={style.fail}>El campo no puede estar vacío</p>}
                {errors.email?.type === "required" && <p className={style.fail}>El correo  es requerido</p>}
                
            </div>

            <div className={style.formControl}>
                <label>Teléfono (Cód. Área + número)</label>
                <input 
                    placeholder="11 12345678"
                    type="number" {...register('telefono', {
                    required: {
                        value:true,
                        message:"El campo no puede estar vacio"
                    }
                })}
                />
                {errors.telefono && <p className={style.fail}>{errors.telefono.message}</p>}
            </div>

             {/*<div className={style.formControl}>
                 <input 
                 type="select"
                 {...register('prueba',{
                    required:true
                })}/>
                 {errors.prueba?.type === "required" && <p className={style.fail}>El campo es requerido</p>}
            </div>*/}   
            <button type='submit'>Enviar</button>
        </form>
        </div>
    </>
  )
}

export default FormDona;