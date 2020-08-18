import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { api, setBearer } from "../axios";

async function makeRequest() {
  try {
    let res = await api.get("messages");
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
}
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [userMetadata] = useState(null);
  return (
    isAuthenticated && (
      <div className="d-flex flex-column justify-content-center align-items-center pt-3 mt-2">
        <div className="">
          <img src={user.picture} alt={user.name} />
          <h2>{user.nickname}</h2>
          <p>{user.email}</p>
        </div>

        <button className="btn btn-dark" onClick={makeRequest}>
          Make api request
        </button>
      </div>
    )
  );
};

export default Profile;
