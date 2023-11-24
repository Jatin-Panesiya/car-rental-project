"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  carClassData,
  carSeats,
  carYear,
  cylinderCount,
  driveTypes,
  fuelTypes,
} from "@/config";

const page = () => {
  // name price class(dropdown) mpg, cylinder(1to10), displacement(), drive(fwd dropdown), fuelType(dropdown), highwaymilage, make(cmpnay), model(), year(drop), seats

  const [data, setData] = useState({});

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleAdd = () => {
    console.log(data);
  };

  return (
    <div>
      <div>
        <h1>Add Car</h1>
      </div>

      <div className="grid mx-3 gap-3 my-1">
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

        <div className="grid sm:flex text-white  sm:justify-between text-center gap-5 ">
          <Link
            className="w-full bg-emerald-500 py-1 rounded"
            href={"/admin/manage-cars"}
            onClick={handleAdd}
          >
            Add
          </Link>
          <Link
            className="w-full bg-red-500 py-1 rounded"
            href={"/admin/manage-cars"}
          >
            Cancle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
