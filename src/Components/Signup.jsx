import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignupButton = () => {
  const { loginWithPopup } = useAuth0();
  return (
    <button
      onClick={() => loginWithPopup({ redirectUrl:"http://localhost:3000/profile"})}
      className="btn btn-outline-success text-bold"
    >
      Create account
    </button>
  );
};

export default SignupButton;
