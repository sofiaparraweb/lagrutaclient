import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../src/assets/logo.png'


import Home from "./views/Home/Home";
import About from "./views/About/About";
import News from "./views/Noticias/News";
import DetailsNews from "./components/News/DetailsNews/DetailsNews";
import Tienda from "./views/Tienda/Tienda";
import Perfil from "./views/Perfil/Perfil";
import LogIn from "./views/LogIn/LogIn";
import LogOut from "./views/LogIn/LogOut";
import NavBar from "./components/NavBar/NavBar";
import BackToTop from "./components/BackToTop/BackToTop";
import Footer from "./components/Footer/Footer";
import DonationForm from "./views/Donacion/Donacion";
import WP_Button from "./components/MensajeFloat/WP_Button.jsx";
import Dashboard from "./views/DashBoard/DashBoard";
import Padrino from "./views/Padrino/Padrino";
import Voluntario from "./views/Voluntario/Voluntario";

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

  return (
    <div className="App">
      <NavBar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/noticias" element={<News />} />
        <Route exact path="/noticias/:id" element={<DetailsNews />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/carrito" />
        <Route path="/checkout" />
        <Route path="/dona" element={<DonationForm/>}/>
        <Route path="/se-padrino" element={<Padrino />} />
        <Route path="/se-voluntario" element={<Voluntario />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes> 
      <WP_Button />
      <Footer />
     
      <BackToTop />
    </div>
  );
};

export default App;
