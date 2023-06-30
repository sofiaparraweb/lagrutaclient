import React from "react";
import style from "./FormDona.module.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { enviarInformacion } from "../../Redux/actions";
//import axios from "axios";


const FormDona = ({ selectedOption, customValue }) => {
    const { register, reset, handleSubmit, formState: { errors }} = useForm() 
    const dispatch = useDispatch();

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const data = {
    //       selectedOption,
    //       email,
    //     };
      
    //     try {
    //       const response = await fetch("http://localhost:3001/payment/donation/create-order/", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data),
    //       });
    //     } catch (error) {
    //       console.log("este error esta en el front", error)
    //     }
    //   };
      

     
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
        <form onSubmit={ handleSubmit(customSubmit)} className={style.formReact}>
            <div className={style.formControl}>
                <label className={style.labeles} >Nombre</label>
                <input
                    className={style.inputs} 
                    name="name"
                    placeholder="Nombre"
                    type="text" {...register('name',{ 
                    required:true,
                    maxLength:30
                })} />
                {errors.name?.type === 'required' && <p className={style.fail}>El campo no puede estar vacío</p>}
                {errors.name?.type === 'maxLength' && <p className={style.fail}>El máximo de caracteres es 30</p>}
            </div>

            <div className={style.formControl}>
                <label className={style.labeles}>Apellido</label>
                <input 
                    className={style.inputs}
                    name="lasName"
                    placeholder="Apellido"
                    type="text" {...register('lastName',{ 
                    required:true,
                    maxLength:50
                })} />
                {errors.lastName?.type === 'required' && <p className={style.fail}>El campo no puede estar vacío</p>}
                {errors.lastName?.type === 'maxLength' && <p className={style.fail}>El máximo de caracteres es 50</p>}
            </div>

            <div className={style.formControl}>
                <label className={style.labeles}>Email</label>
                <input
                    className={style.inputs}
                    name="email"
                    placeholder="Ingrese correo"
                    type="text" {...register("email", {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    required:true
                      })} 
                      />
                {errors.email?.type === "pattern" && <p className={style.fail}>Tiene que ser un email correcto</p>}
                {errors.email?.type === "required" && <p className={style.fail}>El correo  es requerido</p>}
                
            </div>

            <div className={style.formControl}>
                <label className={style.labeles}>Teléfono (Cód. Área + número)</label>
                <input 
                    className={style.inputs}
                    name="phone"
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
            <button className={style.boton} type='submit'>Enviar</button>
        </form>
      </div>
    </>
  );
};


export default FormDona;
