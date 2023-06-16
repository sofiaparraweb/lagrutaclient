import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

/* Componentes */
//import News from "./views/Noticias/News";
import DonationForm from "./views/Donacion/Donacion";

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path="/" element={<DonationForm />} />
      </Routes>
    </div>
  );
}

export default App;
