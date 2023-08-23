import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import {store, persistor} from '../src/Redux/store.js'
import { PersistGate } from 'redux-persist/integration/react';
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <React.StrictMode> 
      <Provider store = {store}>
        <BrowserRouter>
          <PersistGate persistor = {persistor}>
<AuthProvider>
<App />
</AuthProvider>
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </ChakraProvider>
);