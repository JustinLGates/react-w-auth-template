import { useState } from "react";
import React from "react";

const PriceCalculator = () => {
  const base = 11;
  const pricePerDog = 3;
  const [totalPerVisit, setTotalPerVisit] = useState(14);
  const [totalPerMonth, setTotalPerMonth] = useState(14*4);
  const [dogs, setDogs] = useState(1);
  const [weeks, setWeeks] = useState(1);
  const [frequency, setFrequency] = useState("Weekly");
  
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

<div className="border shadow p-3 bg-light">
  <div className="row">
    <div className="col-12 p-2">
      <h4 className="text-center p-2">Easy price calculator</h4>
    </div>
  </div>
  <div className="row m-0 border-bottom p-2 d-flex justify-content-center align-items-center">
    <div className="col-9 col-md-8">
      <div>
        <label className="p-2" className="p-2" htmlFor="">How many Dogs: </label>
        <label className="p-2" htmlFor="">{dogs}</label>
        <button onClick={()=>updateDogs( dogs + 1 )} className="btn btn-outline-success mx-2"><i class="fas fa-plus"></i></button>
        <button onClick={()=>updateDogs( dogs > 1 ? dogs-1 : 0 )} className="btn btn-outline-danger mx-2"><i class="fas fa-minus"></i></button>

      </div>
    </div>
  
    <div className="col-3 col-md-4">
    <label className="p-0 m-0" htmlFor="">{ "$" + dogs*pricePerDog + ".00" }</label>
    </div>
  </div>

  <div className="row m-0 border-bottom p-2 d-flex justify-content-center align-items-center">
    <div className="col-9 col-md-8">
        <label className="p-2" htmlFor="">Weekly</label>
        <input checked onChange={()=>updateWeeks(1)} name="frequency" type="radio"/>
        <br/>
        <label className="p-2" htmlFor="">By-Weekly</label>
        <input onChange={()=>updateWeeks(2)} name="frequency" type="radio"/>
        <br/>
        <label className="p-2" htmlFor="">Monthly</label>
        <input onChange={()=>updateWeeks(4)} name="frequency" type="radio"/>
    </div>
  
    <div className="col-3 col-md-4">
    
      <label htmlFor="">{" x "+ weeks}</label>
    </div>
  </div>

  <div className="row m-0 border-bottom d-flex justify-content-center align-items-center">
    <div className="col-9 col-md-8">
    <label className="p-2 m-0" htmlFor="">Base Charge</label>
    </div>
    <div className="col-3 col-md-4">
      <label className="p-0 m-0" htmlFor="">{"$"+base+".00"}</label>
    </div>
  </div>

  <div className="row m-0 p-2">
    <div className="col-9 col-md-8">
<label htmlFor="">Total per visit</label>
    </div>
  
    <div className="col-3 col-md-4">
      <label htmlFor="">{"$"+totalPerVisit+".00"}</label>
    </div>
  </div>

  <div className="row m-0 p-2">
    <div className="col-12">
    <button className="btn btn-outline-success m-2">Sign-up</button>
    </div>
  </div>

</div>
  );
};
export default PriceCalculator