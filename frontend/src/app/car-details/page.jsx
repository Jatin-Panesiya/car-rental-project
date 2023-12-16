"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchData } from "@/Structure/ApiHandler";
import CarReviews from "@/components/user_components/CarReviews";
import Loading from "@/components/user_components/Loading";
import './style.css'
const page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [data, setData] = useState({});
  const [mount, setMount] = useState(true);
  const carDetailsClass =
    "px-5 py-1.5 bg-white dark:bg-[#121212] text-black dark:text-white border border-emerald-500 text-center rounded text-lg cursor-pointer hover:border-black hover:dark:border-white transition-all duration-300";
  useEffect(() => {
    async function dataFetch() {
      const arrdata = await fetchData();
      const finalData = arrdata.find((data) => data._id === id);
      setData(finalData);
      setMount(false);
      console.log(finalData);
    }
    dataFetch();
  }, []);
   const reviews = ['Nice Car','Very Good Experience']
  const {
    cylinders,
    displacement,
    drive,
    fuel_type,
    highwayMPG,
    images,
    make,
    model,
    price,
    seats,
    year,
    mpg,
  } = data;
  const dayPrice = price + 50;
  return (
    <div className="text-black dark:text-white  min-h-screen">
      {mount ? (
        <Loading/>
      ) : (
        <div className="py-20">
        <div className="responsive__carDetails gap-2 justify-around ">
          <div className="grid gap-2 w-full md:w-[700px] ">
          <p className="text-3xl py-5 text-center md:hidden">{make + " " + model}</p>

            <img src={images[0]} alt={make} className=" w-full md:w-[700px]" />
            <div className="grid md:flex gap-2 w-full md:w-[700px]">
              <img src={images[1]} alt={make} className="w-full  md:w-[228px]" />
              <img src={images[2]} alt={make} className="w-full  md:w-[228px]" />
              <img src={images[3]} alt={make} className="w-full  md:w-[228px]" />
            </div>
          </div>
          <div>
            <p className="text-3xl py-5 text-center">{make + " " + model}</p>
            <div className="grid mx-2 grid-cols-2 gap-5">
              <p className={carDetailsClass}>{seats} Persons</p>
              <p className={carDetailsClass}>{year} Model</p>
              <p className={carDetailsClass}>{fuel_type}</p>
              <p className={carDetailsClass}>{drive}</p>
              <p className={carDetailsClass}> MPG {mpg}</p>
              <p className={carDetailsClass}>Highway Mpg {highwayMPG} </p>
              <p className={carDetailsClass}>Cylinders {cylinders} </p>
              <p className={carDetailsClass}>Displacement {displacement} </p>
            </div>
            <div className="pt-10">
              <p className="text-2xl py-3">Prices</p>
              <span className="flex items-center">
                <p>$</p>
                <p className="text-4xl px-1">{price} </p> / Hour
              </span>
              <span className="flex items-center py-5">
                <p>$</p>
                <p className="text-4xl px-1">{dayPrice} </p> / Day
              </span>
              <button className="px-10 py-2.5 text-lg border border-emerald-500 rounded-xl hover:scale-105 transition-all duration-300 ">
                + Book {make + " " + model}
              </button>
            </div>
          </div>
        </div>
        <div className="px-2 md:pl-[88px]">
          <p className="text-4xl  py-5">Reviews</p>
          {
            reviews.map((review,i)=>{
              return(
                <div key={i}>
                   <span className="flex items-center gap-2 text-lg "><p>{i+1}.</p> <p className="text-emerald-500 font-semibold">{review}</p></span>
                </div>
              )
            })
          }
          <div className="py-10">
            <CarReviews/>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default page;
