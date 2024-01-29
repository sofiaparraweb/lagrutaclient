import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LastNews from "../../components/News/HeaderNews/LastNews";
import { Link } from "react-router-dom";
import style from "./Home.module.css";
import DonaHome from "./DonaHome/Dona";
import SePadrinoHome from "./SePadrino/SePadrino";
import FotosSlider from "./FotosSlider/FotosSlider";
import Headerslider from "./FotosSlider/HeaderSlider";
import lagruta from '../../assets/lagruta.png';
import PedirInfo from './Informacion/informacion';
import { getAllActivity, createUser, getUser, getUserId } from "../../Redux/actions.jsx";
import { auth } from "../../Firebase/Firebase"; // Import the Firebase authentication instance

const Home = () => {
  const dispatch = useDispatch();
  const userEmail = auth.currentUser?.email;
  console.log(userEmail)
  const allActivity = useSelector((state) => state.LocalPersist.allActivity);
  const isProfileCreated = useSelector((state) => state.LocalPersist.isProfileCreated);

  useEffect(() => {
    const fetchData = async () => {
      if (userEmail) {
        try {
          // Obtener el usuario existente
          const existingUser = await dispatch(getUser(userEmail));
          
          // Verificar si el usuario no existe
          if (!existingUser) {
            const newUser = {
              fullName: userEmail,
              email: userEmail,
            };

            // Crear un nuevo usuario
            await dispatch(createUser(newUser));
          }

          // Obtener el ID del usuario
          await dispatch(getUserId(userEmail));

          // Obtener todas las actividades
          await dispatch(getAllActivity());
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [dispatch, userEmail]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className={style.Home}>
        <Headerslider />
        <div className="imageHomeContainer">
          <img src={lagruta} alt="lagruta" />
        </div>
        <FotosSlider />
        <h2 className={style.frase}>“Los científicos dicen que estamos hechos de átomos, pero un pajarito me contó que estamos hechos de historias”</h2>
        <h2 className={style.frase}>Eduardo Galeano</h2>
        <div className={style.RecuadrosContainer}>
          <div className={style.BgImage} />
          <div className={style.GridContainer}>
            <div className={style.GridItem}>
              <DonaHome />
            </div>
            <div className={style.GridItem}>
              <SePadrinoHome />
            </div>
          </div>
        </div>
        <PedirInfo />
        <div className={style.NoticiasContenedor}>
          <LastNews className={style.Noticias} allActivity={allActivity} />
          <Link to="/noticias" className={style.BotonMasNoticias} onClick={handleClick}>Ver más noticias</Link>
        </div>
        <div className={style.UbicacionContenedor}>
          <h3 className={style.UbicacionUbicacion}>Ubicacion</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1310.9655359480112!2d-65.18791653816835!3d-26.866093637318254!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2sar!4v1687909792362!5m2!1ses!2sar"
            width="100%"
            height="350"
            className={style.MapaUbicacion}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className={style.ContenedorTextoUbicacion}>
            <p>- El Barrio A. Los Vallistos es un asentamiento que pertenece al Municipio de La Banda del Río Salí.</p>
            <p>- Se encuentra ubicado en el conurbano de la ciudad de San Miguel de Tucumán, bajo el empalme con Ruta 302.</p>
            <p>- El barrio se localiza a la vera del Río Salí y contiguo a la planta del ex basural municipal Pacará Pintado.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
