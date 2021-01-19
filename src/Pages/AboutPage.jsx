import React, { Component } from "react";
const AboutPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center">
        <h1 className="text-dark p-0 m-0 pt-5 d-md-inline"> About</h1>
          <h1 className="text-dark d-md-inline"> IDA SCOOPER</h1>
        </div>
      </div>
      <div className="row pt-5 p-0 m-0">
        <div className="col-12 col-md-6 p-2">
          <h3>Our mission</h3>
          <p className="text-large">We started IDA SCOOPER to create rewarding jobs and provide exceptional pet waste solutions for Idaho Families.</p>
        </div>
        <div className="col-12 col-md-6 p-0 m-0 ">
        <img  src={require('../Assets/family.jpg')} width="100%" />

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
