import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { formVoluntario } from '../../Redux/actions';
import './FormVoluntario.css';
import Swal from 'sweetalert2';

const FormVoluntario = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: {errors}, reset } = useForm();

  const onSubmit = (data) => {
    dispatch(formVoluntario(data));
    reset();
    Swal.fire({
      icon: 'success',
      title: 'Formulario enviado',
      text: 'Muchas gracias! Nos comunicaremos en breve',
      background: '#f3f3f3',
      confirmButtonColor: '#B9362C',
      customClass: {
        title: 'my-custom-title',
        content: 'my-custom-content',
        confirmButton: 'my-custom-button',
      },
    });    
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-voluntario">
        <h1>ANIMATE A SER VOLUNTARIO!</h1>
        <div>
          <label className="form-voluntario-label">Nombre y Apellido *</label>
          <input
            type="text"
            {...register('name', { required: 'Campo obligatorio' })}
            className="form-voluntario-input"
          />
          {errors.name && <span className="form-voluntario-error-message">{errors.name.message}</span>}
        </div>
        <div>
                <label className="form-voluntario-label">Email</label>
                <input
                    type="text" 
                    {...register("email", {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    required:true
                      })} 
                      className="form-voluntario-input"
                      />
                {errors.email?.type === "pattern" && <p>Tiene que ser un email correcto</p>}
                {errors.email?.type === "required" && <p>El correo  es requerido</p>}
                
            </div>
        <div>
          <label className="form-voluntario-label">Número celular *</label>
          <input
            type="text"
            {...register('phone', { required: 'Campo obligatorio' })}
            className="form-voluntario-input"
          />
          {errors.phone && (
            <span className="form-voluntario-error-message">{errors.phone.message}</span>
          )}
        </div>
        <div>
          <label className="form-voluntario-label">Como te gustaría ayudar? *</label>
          <select
            {...register('role', { required: 'Campo obligatorio' })}
            className="form-voluntario-input"
            id="SelectSevoluntario"
          >
            <option value="">Cuál proyecto te llama?</option>
            <option value="Taller de jóvenes">TALLER DE JOVENES</option>
            <option value="Taller de mujeres">TALLER DE MUJERES</option>
            <option value="Taller de niños">TALLER DE NIÑOS</option>
            <option value="Salud y comunidad">SALUD Y COMUNIDAD</option>
            <option value="Catequesis y pastoral">CATEQUESIS Y PASTORAL</option>
            <option value="Quiero informarme de todos">QUIERO INFORMARME DE TODOS</option>
          </select>
          {errors.role && (
            <span className="form-voluntario-error-message">{errors.role.message}</span>
          )}
        </div>
        <div>
          <label className="form-voluntario-label">Tienes alguna duda en particular?</label>
          <input
            type="text"
            {...register('description')}
            className="form-voluntario-input"
          />
        </div>
        <button type="submit" className="form-voluntario-submit-button">
          ENVIAR FORMULARIO
        </button>
      </form>
    </div>
  );
};


export default FormVoluntario;
