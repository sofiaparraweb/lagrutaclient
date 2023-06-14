import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

/* Componentes */
import News from "./views/Noticias/News";
import Tienda from "./views/Tienda/Tienda";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Noticias" element={<News />} />
        <Route path="/Tienda" element={<Tienda />} />
      </Routes>
    </div>
  );
}

export default App;
