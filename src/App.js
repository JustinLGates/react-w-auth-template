import React from "react";
import "./App.css";
import { Nav } from "./Components/Nav";
import Testapirequest from "./Pages/Profile";
import { Route } from "react-router-dom";
import About from "./Pages/AboutPage";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
function App() {
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
