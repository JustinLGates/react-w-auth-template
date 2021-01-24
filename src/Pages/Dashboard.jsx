import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ServiceSection from "../Components/ServiceSection"
import UserProfile from "../Components/UserProfile"
const Dashboard = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>

    {isAuthenticated ? 
          <div className="row">
            <div className="col-6">
              <UserProfile/>
            </div>
            <div className="col-6">
            <ServiceSection/>
            </div>
          </div> 
    :
    <div>
      <h4>not authenticated...</h4>
    </div>
  }
  </div>
  );
};

export default Dashboard;
