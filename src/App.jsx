import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../src/assets/logo.png'


import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import About from "./views/About/About";
import News from "./views/Noticias/News";
import DetailsNews from "./components/News/DetailsNews/DetailsNews";
import Tienda from "./views/Tienda/Tienda";
import CarritoContainer from "./components/Store/CarritoContainer/CarritoContainer";
import PopUpDonateNow from "./components/MensajeFloat/DonateNow";
import WP_Button from "./components/MensajeFloat/WP_Button.jsx";
import BackToTop from "./components/BackToTop/BackToTop";
import Timeline from "./views/About/Timeline/Timeline";
import Equipo from "./views/About/Equipo/Equipo";

/* componentes usuarios */
import Perfil from "./views/Perfil/Perfil";
import LogIn from "./views/LogIn/LogIn";
import LogOut from "./views/LogIn/LogOut";

/* donaciones */
import DonationForm from "./views/Donacion/Donacion";
import Padrino from "./views/Padrino/Padrino";
import Voluntario from "./views/Voluntario/Voluntario";

/* componentes del dashboard */
import Dashboard from "./views/DashBoard/DashBoard";
import DashboardNoticias from "./views/DashBoard/DashboarNoticias";
import DashboardShop from "./views/DashBoard/DashboardShop";
import DashboardUsers from "./views/DashBoard/DashboardUsers";





const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="loading-container">
        <img
          src={logo}
          alt="Loading..."
          className="loading-image"
        />
      </div>
    );
  }


  const location = useLocation();
  const currentPath = location.pathname;

    const isDashboardPage = !(
      currentPath === '/dashboard' ||
      currentPath === '/dashboard/2' ||
      currentPath === '/dashboard/3' ||
      currentPath === '/dashboard/4'

    );


  return (
    <div className="App">
      <NavBar isAuthenticated={isAuthenticated} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/historia" element={<Timeline />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/noticias" element={<News />} />
        <Route exact path="/noticias/:id" element={<DetailsNews />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/cart" element={<CarritoContainer />} />
        <Route path="/dona" element={<DonationForm/>}/>
        <Route path="/se-padrino" element={<Padrino />} />
        <Route path="/se-voluntario" element={<Voluntario />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/2" element={<DashboardNoticias />} />
        <Route path="/dashboard/3" element={<DashboardShop />}  />
        <Route path="/dashboard/4" element={<DashboardUsers />}  />
      </Routes> 
      <WP_Button />
      {isDashboardPage && <PopUpDonateNow />}
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
