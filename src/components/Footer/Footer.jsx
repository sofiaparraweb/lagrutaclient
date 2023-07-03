import style from "./Footer.module.css";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { formFooter } from "../../Redux/actions";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(formFooter(data.email));
    reset();
    Swal.fire({
      icon: "success",
      title: "¡Formulario enviado!",
    });
  };

  return (
    <footer className={style.mainFooter}>
      <div className={style.container}>
        <div className={style.footerSection}>
          <h3 className={style.title}>Conocé LA GRUTA</h3>
          <ul>
            <li className={style.itemsTex}>
              <a href="/about">Qué hace la Gruta</a>
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

        <form className={style.footerSection} onSubmit={handleSubmit(onSubmit)}>
          <h3 className={style.title}>¡Suscríbete para más información!</h3>
          <input
            className={style.input}
            type="email"
            name="email"
            placeholder="Ingresar Email"
            {...register("email", {
              required: true,
              pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className={style.fail}>Correo electrónico no válido</p>
          )}
          <button className={style.btnSuscripcion} type="submit">
            SUSCRIBIRSE
          </button>
        </form>

        <div className={style.footerSection}>
          <div className={style.footerSection}>
            <Link to="/donacion" className={style.btnFooter}>
              DONÁ AHORA
            </Link>
          </div>
          <ul className={style.redes}>
            <li className={style.itemsRedes}>
              <a
                href="https://www.facebook.com/lagrutacomedor"
                target="_blank"
                rel="noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li className={style.itemsRedes}>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </li>
            <li className={style.itemsRedes}>
              <a
                href="https://www.instagram.com/lagrutacdi/"
                target="_blank"
                rel="noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li className={style.itemsRedes}>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer">
                <FaYoutube />
              </a>
            </li>
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
