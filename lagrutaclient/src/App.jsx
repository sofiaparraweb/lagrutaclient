// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

/* Componentes */
import Home from "./views/Home/Home";
import News from "./views/Noticias/News";
import DetailsNews from "./components/News/DetailsNews/DetailsNews";
import Tienda from "./views/Tienda/Tienda";
import Perfil from "./views/Perfil/Perfil";
import LogIn from "./views/LogIn/LogIn";
import LogOut from "./views/LogIn/LogOut";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="App">
      <NavBar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Noticias" element={<News />} />
        <Route exact path="/Noticias/:id" element={<DetailsNews/>}></Route>
        <Route path="/Tienda" element={<Tienda />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/LogOut" element={<LogOut />} />
      </Routes>
    </div>
  );
};

export default App;
