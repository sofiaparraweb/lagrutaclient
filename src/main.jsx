import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from '../src/Redux/store.js'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <React.StrictMode>
      <Provider store = {store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <Auth0Provider
              domain={import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN}
              clientId={import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID}
              authorizationParams={{
                redirect_uri: window.location.origin 
              }}
            >
              <App />
            </Auth0Provider>
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </ChakraProvider>
);