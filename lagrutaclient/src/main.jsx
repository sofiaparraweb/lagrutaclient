import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from '../src/Redux/store.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <Auth0Provider
          domain={import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN}
          clientId={import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID}
          authorizationParams={{
          redirectUri: `http://localhost:5173/perfil` 
          }}
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </ChakraProvider>

);
