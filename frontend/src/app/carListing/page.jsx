"use client";

import { fetchData } from "@/Structure/ApiHandler";
import Header from "@/components/user_components/Header";
import React, { useEffect, useState } from "react";
import "./carListingStyle.css";
import "react-loading-skeleton/dist/skeleton.css";
import CarSkeleton from "@/components/user_components/CarSkeleton";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
const page = () => {
  const [data, setData] = useState([]);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    async function dataFetch() {
      const data = await fetchData();
      console.log(data);
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
          <span className="text-black py-10 dark:text-white gap-3  justify-evenly respnosive__Cars">
            <CarSkeleton />
            <CarSkeleton />
            <CarSkeleton />
            <CarSkeleton />
            <CarSkeleton />
            <CarSkeleton />
            <CarSkeleton />
            <CarSkeleton />
            <CarSkeleton />
          </span>
        ) : (
          <div className="respnosive__Cars py-10 justify-center md:justify-evenly gap-3 transition-all duration-300 p-3">
            {data.map((data, key) => {
              return (
                <div key={key} className=" rounded-md">
                  <img
                    src={data.images[0]}
                    alt={data.make}
                    className="w-full rounded-md image__resp"
                    loading="lazy"
                  />
                  <p className="text-black dark:text-white text-xl font-mono text-center py-1.5">
                    {data.make + " " + data.model}
                  </p>

                  <Link
                    href={`/car-details?id=${data._id}`}
                    className="text-center w-full py-3  bg-transparent  mt-2 rounded-md text-lg font-semibold border border-emerald-400 flex items-center justify-center gap-2 text-black dark:text-white hover:transition-all hover:bg-emerald-300 duration-300 hover:dark:text-black  "
                  >
                    <FaPlus /> <p> Book Now</p>
                  </Link>
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
