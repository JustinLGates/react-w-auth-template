import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="container-fluid bg-background ">

      <div className="row m-0 pos-absolute pt-5">
        <div className="col-12 p-0 pt-5">
            <img  src={require('../Assets/DogOne.jpg')} width="100%" />
        </div>
      </div>
      
      <div className="row">
        <div className="col-8 p-4">          
          <h1 className="">IDA SCOOPER</h1>
          <p className="text-medium">The pet waste removal experts.</p>
        </div>
        <div className="col-4 p-4 flex-column d-flex text-right">
          <div className="">
            <h4>Call us Today!</h4>
          </div>
          <div className="py-2">
            <button className="btn btn-outline-success">
              <h4><i class="fas fa-phone"></i> 208-987-2345</h4>
            </button>
          </div>
          <div className="py-2">
            
            <h5><Link className="btn btn-outline-success" to="/quote">Get a quote <i className="fas fa-angle-double-right"></i></Link></h5>
          </div>
        </div>
      </div>


    </div>

   
  );
};

export default LandingPage;
