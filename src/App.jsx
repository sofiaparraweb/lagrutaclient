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
//import { ProtectedRoutes } from "./components/ProtectedRoutes/ProtectedRoutes";

/* donaciones */
import DonationForm from "./views/Donacion/Donacion";
import Padrino from "./views/Padrino/Padrino";
import Voluntario from "./views/Voluntario/Voluntario";

/* componentes del dashboard */
import LayoutAdmin from "./views/DashBoard/LayoutAdmin/LayoutAdmin";
import Dashboard from "./views/DashBoard/Home";
import DashboardNoticias from "./views/DashBoard/DashboarNoticias";
import DashboardShop from "./views/DashBoard/DashboardShop";
import DashboardUsers from "./views/DashBoard/DashboardUsers";
import Modifiview from "./views/DashBoard/Modifiview.jsx";

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
      currentPath === '/news' ||
      currentPath === '/shop' ||
      currentPath === '/users'

    );


  return (
    <div className="App">
      
      {isDashboardPage && <NavBar isAuthenticated={isAuthenticated} /> }

      <Routes>
        <Route index element={<Home />} />
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
        <Route path="/" element={<LayoutAdmin />}>
        {/* <Route path="dashboard" element={
        <ProtectedRoutes redirectTo="/">
          <Dashboard />
        </ProtectedRoutes>
        } />  */}
        {<Route path="/dashboard" element={<Dashboard/>} /> }
        <Route path="news" element={<DashboardNoticias />} />
        <Route path="shop" element={<DashboardShop />}  />
        <Route path="users" element={<DashboardUsers />}  />
        <Route path="modifi" element={<Modifiview />} />
        </Route>
      </Routes> 
      <WP_Button />
      {isDashboardPage && <PopUpDonateNow />}
      {isDashboardPage && <Footer />}
      <BackToTop />
    </div>
  );
};

export default App;
