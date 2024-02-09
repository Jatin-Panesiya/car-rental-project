"use client";

import { fetchData } from "@/Structure/ApiHandler";
import Header from "@/components/user_components/Header";
import React, { useEffect, useState } from "react";
import "./carListingStyle.css";
import "react-loading-skeleton/dist/skeleton.css";
import CarSkeleton from "@/components/user_components/CarSkeleton";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { debounce } from "lodash";
import { useRouter } from "next/navigation";
import LoginModal from "@/components/user_components/LoginModal";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { LuBadgeDollarSign } from "react-icons/lu";
import { MdDateRange } from "react-icons/md";

const page = () => {
  const [data, setData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const isLoggedInUser = useSelector((state) => state.auth.isUser);

  //tets
  const router = useRouter();
  async function dataFetch() {
    try {
      const data = await fetchData();
      setData(data);
      setSearchedData(data);
      setIsDataLoaded(true);
    } catch (err) {
     }
  }
  useEffect(() => {
    dataFetch();
  }, []);

  const debouncedSearch = debounce((searchValue) => {
    const filteredData = data.filter((item) => {
      const make = item.make.toLowerCase();
      return make.startsWith(searchValue.toLowerCase());
    });
    setSearchedData(filteredData);
  }, 300);

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    debouncedSearch(value);
  };
  const checkUserIsLoggedIn = (id) => {
    if (!isLoggedInUser) {
      setIsLoginModalOpen(true);
    } else {
      router.push(`/car-details?id=${id}`);
    }
  };

  return (
    <div>
      <Header />
      {isLoginModalOpen && (
        <LoginModal
          setIsLoginModalOpen={setIsLoginModalOpen}
          msg={"Please Login to book Car"}
        />
      )}
      <div className="pt-24 min-h-screen mx-2">
        <h1 className="text-black dark:text-white text-3xl sm:text-4xl md:px-10 px-2 poppins-bold">
          Browse Luxury Cars
        </h1>
        <input
          type="search"
          className=" py-2 sm:mx-10 w-full  sm:w-96 border border-black dark:border-white  placeholder:text-black placeholder:dark:text-white outline-none px-5 rounded text-black dark:text-white mt-3  bg-white dark:bg-[#121212]"
          placeholder="Search Car"
          onChange={handleSearchChange}
        />
        {!isDataLoaded ? (
          <span className="text-black py-10 dark:text-white gap-3   justify-evenly respnosive__Cars">
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
          <div
            className={`respnosive__Cars py-10 justify-center "md:justify-center" mx-1 md:mx-10 gap-3 transition-all duration-300 p-3`}
          >
            {searchedData.length > 0 ? (
              searchedData.map(
                ({
                  _id,
                  make,
                  model,
                  images,
                  fuel_type,
                  year,
                  price,
                  seats,
                }) => {
                  return (
                    <>
                      <div
                        key={_id}
                        className={` rounded-xl p-3 cursor-pointer bg-slate-100 dark:bg-neutral-950 dark:shadow-slate-600  shadow-xl dark:shadow-none dark:border-none border border-[#dcdcd78c] shadow-[#dcdcd78c] `}
                      >
                        <img
                          src={images[0]}
                          alt={make}
                          className="w-full rounded-2xl image__resp object-cover"
                          loading="lazy"
                        />
                        <p className="text-black dark:text-white text-xl font-mono text-center py-1.5 poppins-bold">
                          {make + " " + model}
                        </p>
                        <div className="flex justify-between p-2">
                          <span className="text-center">
                            <MdOutlineAirlineSeatReclineNormal className="w-full text-lg" />{" "}
                            {seats}
                          </span>
                          <p className="text-center">
                            <BsFillFuelPumpFill className="w-full text-lg" />
                            {fuel_type}
                          </p>
                          <p className="text-center">
                            <MdDateRange className="w-full text-lg" />
                            {year}
                          </p>
                          <p className="text-center text-green-500 font-bold">
                            <LuBadgeDollarSign className="w-full text-lg text-green-500 font-bold" />
                            {price}
                          </p>
                        </div>
                        <button
                          onClick={() => checkUserIsLoggedIn(_id)}
                          className="text-center w-full py-3  bg-transparent  mt-2 rounded-xl text-lg font-semibold border border-emerald-400 flex items-center justify-center gap-2 text-black dark:text-white hover:transition-all hover:bg-emerald-300 duration-300 hover:dark:text-black  "
                        >
                          <FaPlus /> <p> Book Now</p>
                        </button>
                      </div>
                    </>
                  );
                }
              )
            ) : (
              <p className="text-center justify-center w-full text-2xl font-semibold">
                No Cars are matching
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
