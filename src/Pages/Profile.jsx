import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>

    {isAuthenticated ? 
          <p>IS authenticated....</p>  
    :
    <div>
      <h4>not authenticated...</h4>
    </div>
  }
  </div>
  );
};

export default Profile;
