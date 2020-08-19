import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth0-provider-with-history";
import "./index.css";
import store from "./Store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);
