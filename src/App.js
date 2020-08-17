import React from "react";
import "./App.css";
import { Nav } from "./Components/Nav";
import Testapirequest from "./Components/Testapirequest";
import { Route } from "react-router-dom";
import About from "./Pages/AboutPage";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="">
      <Nav />
      <Testapirequest />
      <Route path="/about" exact component={About} />
      <Route path="/home" exact component={Home} />
    </div>
  );
}

export default App;
