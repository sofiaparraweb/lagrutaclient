import style from "./Footer.module.css";
import React from "react";
<<<<<<< HEAD
import { useState } from "react";
=======
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { formFooter } from "../../Redux/actions";
>>>>>>> LogIn
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();
  
    const onSubmit = (data) => {
      dispatch(formFooter(data.email));
      reset();
      alert("¡Formulario enviado!");
    };

<<<<<<< HEAD
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      alert("Correo electrónico no válido");
      return;
    }
    alert("¡Formulario enviado!");
    setEmail("");
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email.trim());
  };

=======
>>>>>>> LogIn
  return (
    <footer className={style.mainFooter}>
      <div className={style.container}>
        <div className={style.footerSection}>
          <h3 className={style.title}>Conocé LA GRUTA</h3>
          <ul>
<<<<<<< HEAD
            <li className={style.itemsTex}>
=======
            <li className={style.itemsTex} >
>>>>>>> LogIn
              <a href="/about">Qué hace La Gruta</a>
            </li>
            <li className={style.itemsTex}>
              <a href="/noticias">Publicaciones datos</a>
            </li>
            <li className={style.itemsTex}>
              <a href="/novedades">Novedades</a>
            </li>
          </ul>
        </div>

        <div className={style.footerSection}>
          <h3 className={style.title}>Campañas</h3>
          <ul>
            <li className={style.itemsTex}>
              <a href="/">Eventos especiales</a>
            </li>
            <li className={style.itemsTex}>
              <a href="/">Acciones solidarias</a>
            </li>
            <li className={style.itemsTex}>
              <a href="/">Emergencias</a>
            </li>
          </ul>
        </div>

<<<<<<< HEAD
        <form className={style.footerSection} onSubmit={handleSubmit}>
          <h3 className={style.title}>¡Suscríbete para más información!</h3>
          <input
=======
        <form className={style.footerSection} onSubmit={handleSubmit(onSubmit)}>
 <h3 className={style.title}>¡Suscríbete para más información!</h3>
   <input
>>>>>>> LogIn
            className={style.input}
            type="email"
            name="email"
            placeholder="Ingresar Email"
<<<<<<< HEAD
            value={email}
            onChange={handleEmailChange}
          />
=======
            {...register("email", {
              required: true,
              pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
            })}
          />
          {errors.email && <p className={style.fail}>Correo electrónico no válido</p>}
>>>>>>> LogIn
          <button className={style.btnSuscripcion} type="submit">
            SUSCRIBIRSE
          </button>
        </form>

        <div className={style.footerSection}>
<<<<<<< HEAD
          <button className={style.btnFooter}>DONÁ AHORA</button>
          <ul className={style.redes}>
            <li className={style.itemsRedes}>
              <a
                href="https://www.facebook.com/lagrutacomedor"
                target="_blank"
                rel="noreferrer">
=======
          <button className={style.btnFooter} >DONÁ AHORA</button>
          <ul className={style.redes} >
            <li className={style.itemsRedes} >
              <a href="https://www.facebook.com/lagrutacomedor" target="_blank" rel="noreferrer">
>>>>>>> LogIn
                <FaFacebook />
              </a>
            </li>
            <li className={style.itemsRedes}>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </li>
            <li className={style.itemsRedes}>
<<<<<<< HEAD
              <a
                href="https://www.instagram.com/lagrutacdi/"
                target="_blank"
                rel="noreferrer">
=======
              <a href="https://www.instagram.com/lagrutacdi/" target="_blank" rel="noreferrer">
>>>>>>> LogIn
                <FaInstagram />
              </a>
            </li>
            <li className={style.itemsRedes}>
<<<<<<< HEAD
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer">
=======
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
>>>>>>> LogIn
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={style.copy}>
<<<<<<< HEAD
        <p>© 2023 La Gruta. Developed by Alumnos Henry</p>
      </div>
    </footer>
  );
};
=======
        <p>© 2023 La Gruta.</p>
      </div>
    </footer>
  );
}
>>>>>>> LogIn

export default Footer;
