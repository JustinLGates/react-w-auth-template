import React from "react";
import PriceCalculator from "../Components/PriceCalculator"
const Quote = () => {
  return (
    <div className="container-fluid bg-background ">
      <div className="row">
        <div className="col-12 p-4">
          <h1 className="text-md-left text-center p-2">Fair transparent pricing.</h1>
          <p className="text-md-left text-center text-large p-2">We have a formula for pricing. Just enter your information and we will calculate the cost.</p>
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
