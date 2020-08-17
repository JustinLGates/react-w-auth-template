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
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  // (async () => setBearer("Bearer " + (await getAccessTokenSilently())))();
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.nickname}</h2>
        <p>{user.email}</p>
        <button onClick={makeRequest}>Make api request</button>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
      </div>
    )
  );
};

export default Profile;
