// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Auth0Provider } from "@auth0/auth0-react";
import dotenv from "dotenv";

/* Cargar variables de entorno desde .env */
dotenv.config();

/* Componentes */
import Home from "./views/Home/Home"
import News from "./views/Noticias/News";
import LogIn from "./views/LogIn/LogIn";
import Tienda from "./views/Tienda/Tienda";

const App = () => {
  const auth0Config = {
      domain: import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN,
      clientId: import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID,
  };
  
  return (
    <div className="App">
<Auth0Provider {...auth0Config}>
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Noticias" element={<News />} />
        <Route path="/Tienda" element={<Tienda />} />
      </Routes>
      </Auth0Provider>
    </div>
  );
};

export default App;
