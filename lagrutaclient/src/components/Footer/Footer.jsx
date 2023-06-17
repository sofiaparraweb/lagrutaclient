import style from "./Footer.module.css"
import React from "react"
import { FaFacebook, FaTwitter,FaInstagram, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    
    return (  
       <footer className={style.mainFooter}>
      <div className={style.container}>
        <div className={style.footerSection}>
          <h3 className={style.title}>Conocé LA GRUTA</h3>
          <ul>
          <li className={style.itemsTex} >
            <a href="/home">Qué hace La Gruta</a>
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
            <li className={style.itemsTex}>Eventos especiales</li>
            <li className={style.itemsTex}>Acciones solidarias</li>
            <li className={style.itemsTex}>Emergencias</li>
          </ul>
        </div>

        <form className={style.footerSection}>
          <h3 className={style.title}>Para conocer mas novedades dejanos tu email</h3>
          <input className={style.input} 
          type="email" 
          name="email"
          placeholder="Ingresar Email" 
          required 
          />
          <button className={style.btn} type="submit">SUSCRIBIRSE</button>
        </form>

        <div className={style.footerSection}>
          <button className={style.btn} >DONÁ AHORA</button>
          <ul className={style.redes} >
             <li className={style.itemsRedes} >
                 <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <FaFacebook />
                 </a>
             </li>
             <li className={style.itemsRedes}>
                 <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <FaTwitter />
                 </a>
             </li>
             <li className={style.itemsRedes}>
                 <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <FaInstagram />
                 </a>
             </li>
             <li className={style.itemsRedes}>
                 <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                    <FaYoutube />
                 </a>
             </li>
               
          </ul>
        </div>
      </div>

      <div className={style.copy}>
        <p>© 2023 La Gruta. Designed By TeamGo.</p>
      </div>
    </footer>
       
    );
}

export default Footer; 
