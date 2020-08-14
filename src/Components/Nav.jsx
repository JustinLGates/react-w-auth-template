import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout";
import LoginButton from "./Login";

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="justify-content-end">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};
