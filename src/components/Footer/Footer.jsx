import style from "./Footer.module.css";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { formFooter } from "../../Redux/actions";
import Swal from "sweetalert2";
import {
  FaFacebook, /*FaTwitter, FaYoutube*/ 
  FaInstagram,
} from "react-icons/fa";
import Swal from 'sweetalert2';

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(formFooter(data));
    reset();
    alert("¡Formulario enviado!");
  };
  return (
    <footer className={style.mainFooter}>
      <div className={style.container}>
        <div className={style.footerSection}>
          <h3 className={style.title}>Conocé LA GRUTA</h3>
          <ul>
            <li className={style.itemsTex}>
              <a href="/about">Qué hacemos?</a>
            </li>
            <li className={style.itemsTex}>
              <a href="/historia">Nuestra historia</a>
            </li>
            <li className={style.itemsTex}>
              <a href="/noticias">Novedades</a>
            </li>
            <li className={style.itemsTex}>
              <a href="/tienda">Tienda Online</a>
            </li>
          </ul>
        </div>

        <div className={style.footerSection}>
          <h3 className={style.title}>SÉ PARTE</h3>
          <ul>
            <li className={style.itemsTex}>
              <a href="/dona">Donaciones</a>
            </li>
            <li className={style.itemsTex}>
              <a href="/se-voluntario">Voluntariado</a>
            </li>
            <li className={style.itemsTex}>
              <a href="/se-padrino">Colaboraciones</a>
            </li>
          </ul>
        </div>

        <form className={style.footerSection} onSubmit={handleSubmit(onSubmit)}>
          <h3 className={style.title}>¡Suscríbete para más información!</h3>
          <input
            className={style.input}
            type="text"
            name="email"
            placeholder="Ingresar Email"
            {...register("email", {
              pattern: /^[^\s@]+@gmail\.com$/i,
              required: true,
            })}
          />
          {errors.email && (
            <p className={style.fail}>Ingresar tu email válido</p>
          )}
          <button className={style.btnSuscripcion} type="submit">
            SUSCRIBIRSE
          </button>
        </form>

        <div className={style.footerSection}>
          <a href="/dona" className={style.btnFooter}>
            {" "}
            DONÁ AHORA
          </a>
          <ul className={style.redes}>
            <li className={style.itemRedes}>
              <a
                href="https://www.facebook.com/lagrutacomedor"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            {/*<li className={style.itemRedes}>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </li>*/}
            <li className={style.itemRedes}>
              <a
                href="https://www.instagram.com/lagrutacdi/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            {/*<li className={style.itemRedes}>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                <FaYoutube />
              </a>
              </li>*/}
          </ul>
        </div>
      </div>
      <div className={style.copy}>
        <p>© 2023 La Gruta.</p>
      </div>
    </footer>
  );
};

export default Footer;
