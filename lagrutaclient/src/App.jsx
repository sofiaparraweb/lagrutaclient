import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

/* Componentes */
import News from "./views/Noticias/News";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Noticias" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
