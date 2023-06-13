import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

/* Componentes */
import News from "./components/News/News";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Noticias" element={<News />} />
      </Routes>
      <p>Prueba de pagina</p>
    </div>
  );
}

export default App;
