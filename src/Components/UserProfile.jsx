import React from "react";

const ServiceSection = () => {

  return (
    <div className="row">
    <div className="col-12 p-4 shadow">
      <div className="">
      <h3 className="">Profile<i class="fas fa-user-edit px-3"></i></h3>
      <label className="text-bold" htmlFor="">Contact information</label><br/>
      <label htmlFor="">First Name: name</label> <br/>
      <label htmlFor="">Last Name: name</label><br/>
      <label htmlFor="">phone: ###-###-####</label><br/>
      <label htmlFor="">e-mail</label><br/>
      <label className="text-bold" htmlFor="">Address</label><br/>
      <label htmlFor="">State</label><br/>
      <label htmlFor="">City</label><br/>
      <label htmlFor="">Zip</label><br/>
      <label htmlFor="">Street</label><br/>



      </div>
  </div>
    </div>
  );
};

export default ServiceSection;