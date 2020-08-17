import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { setBearer } from "../axios";

const LoginButton = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const setBearerToken = async () => {
    setBearer("Bearer " + (await getAccessTokenSilently()));
  };
  const { loginWithPopup } = useAuth0();
  return (
    <button
      onClick={() => loginWithPopup().then(setBearerToken)}
      className="btn btn-primary"
    >
      Log In
    </button>
  );
};

export default LoginButton;
