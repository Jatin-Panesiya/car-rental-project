"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchData } from "@/Structure/ApiHandler";

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
    <div className="text-black dark:text-white min-h-screen">
      {mount ? (
        <p>Loading...</p>
      ) : (
        <div className="flex gap-2 justify-evenly">
          <div className="grid gap-2 w-[700px]">
            <img src={images[0]} alt={make} className="w-[700px]" />
            <div className="flex gap-2 w-[700px]">
              <img src={images[1]} alt={make} className="w-[228px]" />
              <img src={images[2]} alt={make} className="w-[228px]" />
              <img src={images[3]} alt={make} className="w-[228px]" />
            </div>
          </div>
          <div>
            <p className="text-3xl py-5">{make + " " + model}</p>
            <div className="grid grid-cols-2 gap-5">
              <p className={carDetailsClass}>{seats} Persons</p>
              <p className={carDetailsClass}>{year} Model</p>
              <p className={carDetailsClass}>{fuel_type}</p>
              <p className={carDetailsClass}>{drive}</p>
              <p className={carDetailsClass}> MPG {mpg}</p>
              <p className={carDetailsClass}>Highway Mpg {highwayMPG} </p>
              <p className={carDetailsClass}>Cylinders {cylinders} </p>
              <p className={carDetailsClass}>Displacement {displacement} </p>
            </div>
            <div>
              <p className="text-xl">Prices</p>
              <span className="flex items-center">
                <p>$</p>
                <p className="text-4xl px-1">{price} </p> / Hour
              </span>
              <span className="flex items-center">
                <p>$</p>
                <p className="text-4xl px-1">{dayPrice} </p> / Day
              </span>
              <button className="px-10 py-2.5 text-lg border border-emerald-500 ">
                + Book {make + " " + model}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
