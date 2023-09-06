import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import logo from '../src/assets/logo.png'
import { useState } from "react";

import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import About from "./views/About/About";
import News from "./views/Noticias/News";
import DetailsNews from "./components/News/DetailsNews/DetailsNews";
import Tienda from "./views/Tienda/Tienda";
import Detail from "./views/Detail/Detail"
import CarritoContainer from "./components/Store/CarritoContainer/CarritoContainer";
import PopUpDonateNow from "./components/MensajeFloat/DonateNow";
import WP_Button from "./components/MensajeFloat/WP_Button.jsx";
import BackToTop from "./components/BackToTop/BackToTop";
import Timeline from "./views/About/Timeline/timeline";
import Equipo from "./views/About/Equipo/Equipo";

/* componentes usuarios */
import Perfil from "./views/Perfil/Perfil";
// import Profile from "./views/Perfil/Perfil2";
import LogIn from "./views/LogIn/LogIn";
/* import { ProtectedRoutes } from "./components/ProtectedRoutes/ProtectedRoutes";
 */
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
// import Calendar from "./views/DashBoard/Calendar/Calendar";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // if (isLoading) {
  //   return (
  //     <div className="loading-container">
  //       <img
  //         src={logo}
  //         alt="Loading..."
  //         className="loading-image"
  //       />
  //     </div>
  //   );
  // }


  const location = useLocation();
  const currentPath = location.pathname;

    const isDashboardPage = !(
      currentPath === '/dashboard' ||
      currentPath === '/news' ||
      currentPath === '/shop' ||
      currentPath === '/users'

    );

    const handleLogin = () => {
      // Realiza la lógica de inicio de sesión aquí
      // Luego, cuando el inicio de sesión sea exitoso, actualiza el estado
      setIsAuthenticated(true);
    };
  
    const handleLogout = () => {
      // Realiza la lógica de cierre de sesión aquí
      // Luego, cuando el cierre de sesión sea exitoso, actualiza el estado
      setIsAuthenticated(false);
    };
    
  return (
    <div className="App">
      
      {isDashboardPage && <NavBar isAuthenticated={isAuthenticated} handleLogout={handleLogout}/> }

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/historia" element={<Timeline />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/noticias" element={<News />} />
        <Route exact path="/noticias/:id" element={<DetailsNews />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/detail/:id" element={<Detail />} /> 
        <Route path="/cart" element={<CarritoContainer />} />
        <Route path="/dona" element={<DonationForm/>}/>
        <Route path="/se-padrino" element={<Padrino />} />
        <Route path="/se-voluntario" element={<Voluntario />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<LogIn handleLogin={handleLogin}  />} />
        {/* <Route path="/logout" element={<LogOut />} /> */}
        <Route path="/" element={<LayoutAdmin />}>
      {/*   <Route path="dashboard" element={
        <ProtectedRoutes redirectTo="/">
          <Dashboard />
        </ProtectedRoutes>
        } /> */}
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="news" element={<DashboardNoticias />} />
        <Route path="shop" element={<DashboardShop />}  />
        <Route path="users" element={<DashboardUsers />}  />
        <Route path="modifi" element={<Modifiview />} />
        {/* <Route path="calendar" element={<Calendar />} /> */}
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
