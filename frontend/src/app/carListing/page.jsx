"use client";

import { fetchData } from "@/Structure/ApiHandler";
import Header from "@/components/user_components/Header";
import React, { useEffect, useState } from "react";
import "./carListingStyle.css";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CarSkeleton from "@/components/user_components/CarSkeleton";

const page = () => {
  const [data, setData] = useState([]);
  const [mount, setMount] = useState(false);
  
  useEffect(() => {
    async function dataFetch() {
      const data = await fetchData();
      setData(data);
      setMount(true);
    }
    dataFetch();
  }, []);

  return (
    <div>
      <Header />
      <div className="pt-24">
        <h1 className="text-black dark:text-white">Cars Page</h1>

        {!mount ? (
          <span className="text-black dark:text-white m-3 gap-3  justify-evenly respnosive__Cars">
            <CarSkeleton/>
            <CarSkeleton/>
            <CarSkeleton/>
            <CarSkeleton/>
            <CarSkeleton/>
            <CarSkeleton/>
            <CarSkeleton/>
            <CarSkeleton/>
            <CarSkeleton/>
            </span>

        ) : (
          <div className="respnosive__Cars justify-center md:justify-evenly gap-3 transition-all duration-300 p-3">
            {data.map((data, key) => {
              return (
                <div key={key} className="border dark:border-white rounded-md">
                  <img
                    src={data.images[0]}
                    alt={data.make}
                    className="w-full rounded-md image__resp"
                    loading="lazy"
                  />
                  <button className="text-center w-full py-1 bg-emerald-400  mt-2 rounded-md text-lg font-semibold hover:bg-emerald-600 ">
                    Book Now
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
