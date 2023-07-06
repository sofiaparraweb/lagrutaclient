import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { formPadrino } from '../../Redux/actions';
import './FormPadrino.css';
import Swal from 'sweetalert2';

const FormPadrino = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: {errors}, reset } = useForm();
  
  const onSubmit = (data) => {
    dispatch(formPadrino(data));
    reset();
    Swal.fire({
      icon: 'success',
      title: 'Formulario enviado!',
      text: 'Muchas gracias! Nos comunicaremos en breve',
      background: '#f3f3f3',
      confirmButtonColor: '#B9362C',
      customClass: {
        title: 'my-custom-title',
        content: 'my-custom-content',
        confirmButton: 'my-custom-button',
      }
    });
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-padrino">
        <h1>ANIMATE A SER PADRINO!</h1>
        <div>
          <label className="form-padrino-label">Nombre y Apellido *</label>
          <input
            type="text"
            {...register('name', { required: 'Campo obligatorio' })}
            className="form-padrino-input"
          />
          {errors.name && <span className="form-padrino-error-message">{errors.name.message}</span>}
        </div>
        <div>
          <label className="form-padrino-label">Email *</label>
          <input
            type="text" 
            {...register("email", {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              required: true
            })} 
            className="form-padrino-input"
          />
          {errors.email?.type === "pattern" && <p>Tiene que ser un email correcto</p>}
          {errors.email?.type === "required" && <p>El correo es requerido</p>}
        </div>
        <div>
          <label className="form-padrino-label">Número celular *</label>
          <input
            type="text"
            {...register('phone', { required: 'Campo obligatorio' })}
            className="form-padrino-input"
          />
          {errors.phone && (
            <span className="form-padrino-error-message">{errors.phone.message}</span>
          )}
        </div>
        <div>
          <label className="form-padrino-label">Si fueses padrino, cómo te gustaría ayudar? *</label>
          <select
            {...register('role', { required: 'Campo obligatorio' })}
            className="form-padrino-input"
            id="SelectSePadrino"
          >
            <option value="">Elegi un método de pago</option>
            <option value="DEBITO AUTOMATICO">DEBITO AUTOMATICO</option>
            <option value="TRANSFERENCIA BANCARIA">TRANSFERENCIA BANCARIA</option>
            <option value="EFECTIVO">EFECTIVO</option>
          </select>
          {errors.role && (
            <span className="form-padrino-error-message">{errors.role.message}</span>
          )}
        </div>
        <div>
          <label className="form-padrino-label">Tienes alguna duda en particular?</label>
          <input
            type="text"
            {...register('description')}
            className="form-padrino-input"
          />
        </div>
        <button type="submit" className="form-padrino-submit-button">
          ENVIAR FORMULARIO
        </button>
      </form>
    </div>
  );
};

export default FormPadrino;
