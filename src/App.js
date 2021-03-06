import React from "react";
import "./App.css";
import { Nav } from "./Components/Nav";
import { Route } from "react-router-dom";
import About from "./Pages/AboutPage";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import landingPage from "./Pages/LandingPage";
import quote from "./Pages/Quote";
import subscribe from "./Pages/SignupForService";
import { useAuth0 } from "@auth0/auth0-react";
import { setBearer } from "./axios";
import { resetBearer } from "./axios";
function App() {
  //NOTE If the user is authenticated the beraer token will be set in axios and sent with all
  //requests.If they are not authenticated the token will be set to "".
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  if (isAuthenticated) {
    try {
      (async () => setBearer("Bearer " + (await getAccessTokenSilently())))();
    } catch (error) {
      console.error(error);
    }
  } else {
    resetBearer();
  }
  return (
    <div className="">
      <Nav />
      <Route path="/" exact component={landingPage} />
      <Route path="/profile" exact component={Dashboard} />
      <Route path="/about" exact component={About} />
      <Route path="/home" exact component={Home} />
      <Route path="/quote" exact component={quote} />
      <Route path="/subscribe" exact component={subscribe} />
    </div>
  );
}

export default App;
