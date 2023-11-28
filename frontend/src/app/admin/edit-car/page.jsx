"use client";
import React, { useState, useEffect } from "react";
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
import { useSearchParams } from "next/navigation";
import { useRouter } from 'next/navigation'


const page = () => {
    const router = useRouter()
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [mount,setMount] = useState(false)
  const [error, setError] = useState(false);
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
      carImages: [''],
      cylinders: "",
    };
const [data, setData] = useState(defaultData);

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${carDataApi}/cars/${id}`);
        const result = await response.json();
        const {
          price,
          mpg,
          cylinders,
          displacement,
          highwayMileage,
          drive,
          fuel_type,
          make,
          model,
          year,
          seats,
          images,
        } = result;
       
        setData({
          carMake: make,
          carModel: model,
          carRent: price,
          carSeats: seats,
          carYear: year,
          carClass: result.class,
          carMPG: mpg,
          carDisplacement: displacement,
          driveType: drive,
          carFuel: fuel_type,
          highwayMileage: highwayMileage,
          cylinders: cylinders,
          carImages: images,
        });
        setMount(true)
        
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImage = (key, value) => {
    data.carImages[key] = value;
    setData(data);
  };

  const isFormValid = () => {
    for (const key in data) {
      if (data.hasOwnProperty(key) && data[key] === "") {
        return true;
      }
    }
    return false;
    
  };
  const handleReset = (e) => {
    e.preventDefault();
    setError(false);
    router.push('/admin/manage-cars')
  };

  const handleAdd = (e) => {
    e.preventDefault();

      const fetchData = async () => {
        try {
          const response = await fetch(`${carDataApi}/cars/${id}`, {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          const result = await response.json();
          console.log(result);
          
          // setData(result);
          router.push('/admin/manage-cars')
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    
  };

  if(!mount) return <h1>Loading</h1>
  return (
    
    <form
      onSubmit={handleAdd}
      method="POST"
      className="dark:bg-[#121212] text-black dark:text-white py-0.5"
    >
      <div>
        <h1 className="font-bold text-3xl p-3">Add Car</h1>
      </div>

      <div className="grid px-3 py-3 gap-3 my-1  bg-slate-100 rounded-md dark:bg-[#121212] dark:text-gray-300 mx-1 md:mx-10">
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
              type="number"
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
              type="number"
              placeholder="Enter MPG (miles per gallon)*"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="carMPG"
              value={data.carMPG}
              onChange={handleInput}
            />
          </span>
          <span className="grid w-full gap-1">
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
              type="number"
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
              type="number"
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
              value={data.carImages[0]}
              onChange={(e) => handleImage(0, e.target.value)}
            />
          </span>
          <span className="grid w-full gap-1">
            <label className="px-2">Front Car Image</label>
            <input
              type="text"
              placeholder="Enter Front Car Image Link"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="frontCarImage"
              value={data.carImages[1]}
              onChange={(e) => handleImage(1, e.target.value)}
            />
          </span>
          <span className="grid w-full gap-1">
            <label className="px-2">Side Car Image</label>
            <input
              type="text"
              placeholder="Enter Side Car Image Link"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="sideCarImage"
              value={data.carImages[2]}
              onChange={(e) => handleImage(2, e.target.value)}
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
              value={data.carImages[3]}
              onChange={(e) => handleImage(3, e.target.value)}
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
            Update
          </button>

          <button
            className="w-full bg-red-500 py-2 rounded text-center  text-white"
            onClick={handleReset}
          >
            Cancle
          </button>
        </span>
      </div>
    </form>
  );
};

export default page;