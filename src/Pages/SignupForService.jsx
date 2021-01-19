import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SignupComponent from "../Components/SignupComponent"
import Profile from "./Profile"
import SignupButton from "../Components/Signup"

const SignUpForService = (props) => {
const base = 11;
const pricePerDog = 3;
const hourlyRate = 20;
const [totalPerVisit, setTotalPerVisit] = useState(14);
const [totalPerMonth, setTotalPerMonth] = useState(14*4);
const [dogs, setDogs] = useState(1);
const [weeks, setWeeks] = useState(1);
const [frequency, setFrequency] = useState("Weekly");
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
  
  

   return (
    <div className="row">
    {isAuthenticated?
       <div className="col-6 m-auto py-5">
       <form className="card shadow p-4" >
         <div className="row">
           <div className="col-12">


         <div className="d-flex justify-content-between">
         <div>
           <h3>Plan Options and details</h3>
         </div>
         <div>
           <h3>Step 2/3</h3>
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
      </div>

{/*  */}

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
      <label htmlFor="">{"$"+totalPerVisit+".00 Per Visit"}</label>
    </div>
  </div>


{/*  */}
<div className="row">
         <button className="btn btn-outline-success">Save and continue</button>
         </div>
       </form>

     </div>     
    :
      <div className="col-6 m-auto py-5">
        <div className="p-4 shadow">
          <div className="d-flex justify-content-between ">
            <div>
              <h3>Authentication</h3>
            </div>
            <div>
              <h3>Step 1/3</h3>
            </div>
          </div>
          <div className="d-flex py-5 flex-column align-items-center justify-content-center">
            <div className="p-2">
              <p className="text-bold"> Lets protect your information.
              </p>
            </div>
            <div className="p-2">
              <SignupButton/>
            </div>
          </div>
        </div>
      </div>
    }

    </div>
)};

export default SignUpForService;