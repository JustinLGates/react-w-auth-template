import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth0-provider-with-history";
import "./index.css";

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      {/* Example route path */}
      {/* <Route path="/link"exact component={imported component}/> */}
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);
