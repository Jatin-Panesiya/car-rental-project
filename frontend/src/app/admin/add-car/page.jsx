"use client";
import React, { useEffect, useState } from "react";
import { carClassData, carSeats, carYear, cylinderCount, driveTypes, fuelTypes } from "@/config";

const page = () => {
  // name price class(dropdown) mpg, cylinder(1to10), displacement(), drive(fwd dropdown), fuelType(dropdown), highwaymilage, make(cmpnay), model(), year(drop), seats

  const [data, setData] = useState({});

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <div>
        <h1>Add Car</h1>
      </div>
      <div className="grid mx-3 gap-1 my-1">

      <label className="px-2">Make</label>
        <input
          type="text"
          placeholder="Company of Car"
          className="border border-emerald-500 rounded-md px-3 py-0.5"
          name="carMake"
          value={data.carMake}
          onChange={handleInput}
        />

<label className="px-2">Model</label>
        <input
          type="text"
          placeholder="Model of Car"
          className="border border-emerald-500 rounded-md px-3 py-0.5"
          name="carModel"
          value={data.carModel}
          onChange={handleInput}
        />


<label className="px-2">Car Seats</label>
        <select
          name="carSeats"
          className="border border-emerald-500 rounded-md px-3 py-0.5"
          onChange={handleInput}
        >
          {carSeats.map((carSeats, i) => {
            return (
              <option key={i} value={carSeats}>
                {carSeats}
              </option>
            );
          })}
        </select>

        
<label className="px-2">Make Year</label>
        <select
          name="carYear"
          className="border border-emerald-500 rounded-md px-3 py-0.5"
          onChange={handleInput}
        >
          {carYear.map((carYear, i) => {
            return (
              <option key={i} value={carYear}>
                {carYear}
              </option>
            );
          })}
        </select>

        <label className="px-2">Rent</label>
        <input
          type="text"
          placeholder="Enter Rent / Hour $"
          className="border border-emerald-500 rounded-md px-3 py-0.5"
          name="carRent"
          value={data.carRent}
          onChange={handleInput}
        />


        <label className="px-2">Car Class</label>
        <select
          name="carClass"
          className="border border-emerald-500 rounded-md px-3 py-0.5"
          onChange={handleInput}
        >
          {carClassData.map((className, i) => {
            return (
              <option key={i} value={className}>
                {className}
              </option>
            );
          })}
        </select>

        <label className="px-2">Mpg</label>
        <input
          type="text"
          placeholder="Enter MPG (miles per gallon)*"
          className="border border-emerald-500 rounded-md px-3 py-0.5"
          name="carMPG"
          value={data.carMPG}
          onChange={handleInput}
        />

        <label className="px-2">Cylinders</label>
        <select
          name="carClass"
          className="border border-emerald-500 rounded-md px-3 py-0.5"
          onChange={handleInput}
        >
          {cylinderCount.map((cylinderCount, i) => {
            return (
              <option key={i} value={cylinderCount}>
                {cylinderCount}
              </option>
            );
          })}
        </select>

        <label className="px-2">Displacement</label>
        <input
          type="text"
          placeholder="Enter Displacement"
          className="border border-emerald-500 rounded-md px-3 py-0.5"
          name="carMPG"
          value={data.carMPG}
          onChange={handleInput}
        />

        <label className="px-2">Drive</label>
        <select
          name="driveType"
          className="border border-emerald-500 rounded-md px-3 py-0.5"
          onChange={handleInput}
        >
          {driveTypes.map((driveTypes, i) => {
            return (
              <option key={i} value={driveTypes}>
                {driveTypes}
              </option>
            );
          })}
        </select>


        <label className="px-2">Fuel</label>
        <select
          name="driveType"
          className="border border-emerald-500 rounded-md px-3 py-0.5"
          onChange={handleInput}
        >
          {fuelTypes.map((fuelTypes, i) => {
            return (
              <option key={i} value={fuelTypes}>
                {fuelTypes}
              </option>
            );
          })}
        </select>

        <label className="px-2">Highway Mileage</label>
        <input
          type="text"
          placeholder="Enter Highway Mileage"
          className="border border-emerald-500 rounded-md px-3 py-0.5"
          name="highwayMileage"
          value={data.highwayMileage}
          onChange={handleInput}
        />

      </div>
    </div>
  );
};

export default page;
