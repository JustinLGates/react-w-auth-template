import { useState } from "react";
import React from "react";
import SignupButton from "../Components/Signup"
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const PriceCalculator = () => {
  const base = 11;
  const pricePerDog = 3;
  const hourlyRate = 20;
  const [totalPerVisit, setTotalPerVisit] = useState(14);
  const [totalPerMonth, setTotalPerMonth] = useState(14*4);
  const [dogs, setDogs] = useState(1);
  const [weeks, setWeeks] = useState(1);
  const [frequency, setFrequency] = useState("Weekly");
  const [detailsHidden, setDetailsHidden] = useState(true);


  
  const { isAuthenticated } = useAuth0();

  function updateTotals(dogs, weeks) {
  setTotalPerMonth()
  setTotalPerVisit(dogs * pricePerDog * weeks + base)
}

function updateDogs(value) {
  setDogs(value)
  updateTotals(value, weeks)
}

function updateWeeks(weeks) {
  setWeeks(weeks)
  
  switch(weeks) {
    case 0:
      setFrequency("Weekly")
      break;
    case 2:
      setFrequency("By-Weekly")
      break;
    case 4:
      setFrequency("Monthly")
      break;
  }
  updateTotals(dogs,weeks)
}

function toggleDetails() {
  setDetailsHidden(!detailsHidden)
}

  return (

<div className="border shadow p-3 bg-light">
  <div className="row">
    <div className="col-12 p-2">
      <h3 className="p-2">Easy price calculator</h3>
    </div>
  </div>
  <div className="row m-0 border-bottom p-2 d-flex justify-content-center align-items-center">
    <div className="col-9 col-md-8">
      <div>
        <label className="p-2 text-bold" htmlFor="">Number of Dogs: </label>
        <label className="p-2" htmlFor="">{dogs}</label>
        <button onClick={()=>updateDogs( dogs + 1 )} className="btn btn-outline-success mx-2"><i class="fas fa-plus"></i></button>
        <button onClick={()=>updateDogs( dogs > 1 ? dogs-1 : 0 )} className="btn btn-outline-danger mx-2"><i class="fas fa-minus"></i></button>

      </div>
    </div>
  
    <div className="col-3 col-md-4">
    <label className="p-0 m-0" htmlFor="">{ "+ $" + dogs*pricePerDog + ".00"+" Per Visit" }</label>
    </div>
  </div>

  <div className="row m-0 border-bottom p-2 d-flex justify-content-center align-items-center">
    <div className="col-9 col-md-8">
        <label className="p-2 text-bold" htmlFor="">Frequency</label>
        <br/>
        <label className="p-2" htmlFor="">Weekly</label>
        <input defaultChecked onChange={()=>updateWeeks(1)} name="frequency" type="radio"/>
        <br/>
        <label className="p-2" htmlFor="">By-Weekly</label>
        <input onChange={()=>updateWeeks(2)} name="frequency" type="radio"/>
        <br/>
        <label className="p-2" htmlFor="">Monthly</label>
        <input onChange={()=>updateWeeks(4)} name="frequency" type="radio"/>
    </div>
  
    <div className="col-3 col-md-4">
      <label htmlFor="">{"$"+ dogs*pricePerDog+".00"}</label>
      <br/>
      <label className="text-underline" htmlFor="">{ weeks==1?" x "+ weeks+" Week":" x "+ weeks+" Weeks"}</label>
      <br/>
      <label htmlFor="">{"$"+ (dogs*pricePerDog)*weeks+".00"}</label>
    </div>
  </div>

  <div className="row m-0 border-bottom d-flex justify-content-center align-items-center">
    <div className="col-9 col-md-8">
    <label className="p-2 m-0 text-bold" htmlFor="">Base Charge</label>
    </div>
    <div className="col-3 col-md-4">
      <label className="p-0 m-0" htmlFor="">{"$"+base+".00"}</label>
    </div>
  </div>

  <div className="row m-0 p-2 border-bottom">
    <div className="col-9 col-md-8">
<label className="text-bold p-0 m-0" htmlFor="">Total</label>
    </div>
  
    <div className="col-3 col-md-4 text-bold">
      <label className="text-success" htmlFor="">{"$"+totalPerVisit+".00 Per Visit"}</label>
    </div>
  </div>


  <div className="row m-0 px-2">
    <div className="col-12 text-center">
      <p className="p-2 py-4 text-success text-bold"><i class="fas fa-angle-double-down px-2"></i> Save 15% on your first month of service by signing up today. <i class="fas fa-angle-double-down px-2"></i></p>
    </div>
  </div>


{/* Address section --------------------------------------------------------- */}

   <div className="col-12 m-auto">
     <div className="d-flex justify-content-between">
     <div>
       <h3 className="text-xlarge">Address</h3>
     </div>
   
     </div>
     <div className="form-group">
       <label for="State">State</label>
       <select value="Idaho" className="form-control" name="City" id="city">
         <option value="Idaho">Idaho</option>
       </select>
       <small id="state" className="form-text text-muted">We are currently only serving Idaho. </small>
     </div>
      <div className="form-group">
       <label  for="City">City</label>
       <select className="form-control" name="City" id="city">
         <option value="Boise">Boise</option>
         <option value="Eagle">Eagle</option>
         <option value="Meridan">Meridian</option>
         <option value="Nampa">Nampa</option>
       </select>
      </div>
      <div className="form-group">
       <label for="address">Address</label>
       <input type="text" className="form-control" id="address" aria-describedby="emailHelp" placeholder="123 Scooper Ave"/>
      </div>
      </div>
      <div className="row">
    <div className="col-12 p-2">
      {isAuthenticated ?
     <Link className="btn btn-outline-success" to="/profile">
     View Profile
   </Link>
    :
    <SignupButton/>
      }
    </div>
  </div>


</div>
  );
};
export default PriceCalculator