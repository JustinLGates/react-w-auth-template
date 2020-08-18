import React from "react";
import "./App.css";
import { Nav } from "./Components/Nav";
import { Route } from "react-router-dom";
import About from "./Pages/AboutPage";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { setBearer } from "./axios";

function App() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  (async () => setBearer("Bearer " + (await getAccessTokenSilently())))();
  return (
    <div className="">
      <Nav />
      <Route path="/profile" exact component={Profile} />
      <Route path="/about" exact component={About} />
      <Route path="/home" exact component={Home} />
    </div>
  );
}

export default App;
