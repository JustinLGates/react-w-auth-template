import React from "react";
import PriceCalculator from "../Components/PriceCalculator"

const Quote = () => {
  return (
    <div className="container-fluid bg-background ">
      <div className="row">
        <div className="col-12 p-4">
          <h1 className="text-md-left text-center">Fair transparent pricing.</h1>
          <p className="text-md-left text-center">We have a formula for pricing so just enter your information and you will know exactly what it will cost to have the service you want.</p>
        </div>
      </div>
      <div className="row">
        <div className=" col-lg-8  m-auto col-md-10 col-12 p-lg-4 p-2 ">
        <PriceCalculator/>
        </div>
      </div>
    </div>   
  );
};

export default Quote;
