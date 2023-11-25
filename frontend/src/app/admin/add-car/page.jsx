"use client";
import React, { useState } from "react";

import {
  carClassData,
  carDataApi,
  carSeats,
  carYear,
  cylinderCount,
  driveTypes,
  fuelTypes,
} from "@/config";
import { MdError } from "react-icons/md";

const page = () => {
  const defaultData = {
    carMake: "",
    carModel: "",
    carRent: "",
    carSeats: "",
    carYear: "",
    carClass: "",
    carMPG: "",
    carDisplacement: "",
    driveType: "",
    carFuel: "",
    highwayMileage: "",
    mainCarImage: "",
    frontCarImage: "",
    sideCarImage: "",
    innerCarImage: "",
  };

  const [data, setData] = useState(defaultData);
  const [error, setError] = useState(false);
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const isFormValid = () => {
    for (const key in data) {
      if (data.hasOwnProperty(key) && data[key] === "") {
        return true;
      }
    }
    return false;
    // return Object.keys(defaultData).some((key) => defaultData[key] == "");
  };
  const handleReset = (e) => {
    e.preventDefault();
    setError(false);
    setData(defaultData);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      const fetchData = async () => {
        try {
          const response = await fetch(`${carDataApi}/cars`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleAdd} method="POST">
      <div>
        <h1 className="font-bold text-3xl px-3 pt-1">Add Car</h1>
      </div>

      <div className="grid px-3 py-3 gap-3 my-1 bg-slate-50 mx-1 md:mx-10">
        <p className="font-semibold">Car Details</p>
        <div className="grid grid-cols-1  md:grid-cols-3  justify-between gap-2 ">
          <span className="grid w-full gap-1">
            <label className="px-2">Make</label>
            <input
              type="text"
              placeholder="Company of Car"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="carMake"
              value={data.carMake}
              onChange={handleInput}
            />
          </span>
          <span className="grid w-full gap-1">
            <label className="px-2">Model</label>
            <input
              type="text"
              placeholder="Model of Car"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="carModel"
              value={data.carModel}
              onChange={handleInput}
            />
          </span>
          <span className="grid w-full gap-1">
            <label className="px-2">Rent</label>
            <input
              type="text"
              placeholder="Enter Rent / Hour $"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="carRent"
              value={data.carRent}
              onChange={handleInput}
            />
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  justify-between gap-2 ">
          <span className="grid w-full gap-1">
            <label className="px-2">Car Seats</label>
            <select
              name="carSeats"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
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
          </span>
          <span className="grid w-full gap-1">
            <label className="px-2">Make Year</label>
            <select
              name="carYear"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              onChange={handleInput}
              value={data.carYear}
            >
              {carYear.map((carYear, i) => {
                return (
                  <option key={i} value={carYear}>
                    {carYear}
                  </option>
                );
              })}
            </select>
          </span>

          <span className="grid w-full gap-1">
            <label className="px-2">Car Class</label>
            <select
              name="carClass"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              onChange={handleInput}
              value={data.carClass}
            >
              {carClassData.map((className, i) => {
                return (
                  <option key={i} value={className}>
                    {className}
                  </option>
                );
              })}
            </select>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  justify-between gap-2 ">
          <span className="grid w-full gap-1">
            <label className="px-2">Mpg</label>
            <input
              type="text"
              placeholder="Enter MPG (miles per gallon)*"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="carMPG"
              value={data.carMPG}
              onChange={handleInput}
            />
          </span>
          <span className="grid w-full gap-1">
            {" "}
            <label className="px-2">Cylinders</label>
            <select
              name="carCylinder"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
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
          </span>
          <span className="grid w-full gap-1">
            <label className="px-2">Displacement</label>
            <input
              type="text"
              placeholder="Enter Displacement"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="carDisplacement"
              value={data.carDisplacement}
              onChange={handleInput}
            />
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  justify-between gap-2 ">
          <span className="grid w-full gap-1">
            <label className="px-2">Drive</label>
            <select
              name="driveType"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
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
          </span>
          <span className="grid w-full gap-1">
            <label className="px-2">Fuel</label>
            <select
              name="carFuel"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
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
          </span>

          <span className="grid w-full gap-1">
            <label className="px-2">Highway Mileage</label>
            <input
              type="text"
              placeholder="Enter Highway Mileage"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="highwayMileage"
              value={data.highwayMileage}
              onChange={handleInput}
            />
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  justify-between gap-2 ">
          <span className="grid w-full gap-1">
            <label className="px-2">Main Car Image</label>
            <input
              type="text"
              placeholder="Enter Main Car Image Link"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="mainCarImage"
              value={data.mainCarImage}
              onChange={handleInput}
            />
          </span>
          <span className="grid w-full gap-1">
            <label className="px-2">Front Car Image</label>
            <input
              type="text"
              placeholder="Enter Front Car Image Link"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="frontCarImage"
              value={data.frontCarImage}
              onChange={handleInput}
            />
          </span>
          <span className="grid w-full gap-1">
            <label className="px-2">Side Car Image</label>
            <input
              type="text"
              placeholder="Enter Side Car Image Link"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="sideCarImage"
              value={data.sideCarImage}
              onChange={handleInput}
            />
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center  justify-between gap-2 ">
          <span className="grid w-full gap-1">
            <label className="px-2">Inner Car Image</label>
            <input
              type="text"
              placeholder="Enter Inner Car Image Link"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="innerCarImage"
              value={data.innerCarImage}
              onChange={handleInput}
            />
          </span>
        </div>

        {error && (
          <p className="text-red-500 font-semibold text-lg flex items-center gap-1">
            <MdError className="text-xl" />
            Please Fill Up All Details !!
          </p>
        )}
        <span className="md:mt-3 flex justify-between md:gap-3 md:w-60 w-full gap-1">
          <button
            className="w-full bg-emerald-500 py-2 rounded text-center  text-white  "
            type="submit"
          >
            Add
          </button>

          <button
            className="w-full bg-red-500 py-2 rounded text-center  text-white"
            onClick={handleReset}
          >
            Reset
          </button>
        </span>
      </div>
    </form>
  );
};

export default page;
