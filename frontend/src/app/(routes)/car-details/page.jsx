"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { bookDate, fetchData } from "@/Structure/ApiHandler";
import CarReviews from "@/components/user_components/CarReviews";
import Loading from "@/components/user_components/Loading";
import "./style.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import CarDetailsImages from "@/components/user_components/CarDetailsImages";
import DateBookingModal from "@/components/user_components/DateBookingModal";
import LoginModal from "@/components/user_components/LoginModal";
const page = () => {
  const isLoggedInUser = useSelector((state) => state.auth.isUser);
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [carData, setCarData] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(true);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const carDetailsClass =
    "px-5 py-1.5 bg-white dark:bg-[#121212] text-black dark:text-white border border-emerald-500 text-center rounded text-sm 320:text-base  515:text-lg cursor-pointer hover:border-black hover:dark:border-white transition-all duration-300 flex items-center";

  const reviews = ["Nice Car", "Very Good Experience"];

  if (!isLoggedInUser) {
    router.push("/login");
  }

  async function dataFetch() {
    try {
      const arrdata = await fetchData();
      const finalData = arrdata.find((data) => data._id === id);
      setCarData(finalData);
      setIsDataLoaded(false);
    } catch (err) {
      console.log({ err });
    }
  }
  useEffect(() => {
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
  } = carData;

  return (
    <div className="text-black dark:text-white  min-h-screen">
      {isDataLoaded ? (
        <Loading />
      ) : (
        <>
          {/* Book Car Modal */}
          {isBookingModalOpen && (
            <DateBookingModal setIsBookingModalOpen={setIsBookingModalOpen} />
          )}

          <div className=" py-5 1100:py-20">
            <div className="grid 1100:flex  gap-2 justify-around ">
              <CarDetailsImages make={make} model={model} images={images} />
              <div>
                <p className="text-3xl py-5 text-center">
                  {make + " " + model}
                </p>
                <div className="grid mx-2 grid-cols-2 gap-5">
                  <p className={carDetailsClass}>{seats} Persons</p>
                  <p className={carDetailsClass}>{year} Model</p>
                  <p className={carDetailsClass}>{fuel_type}</p>
                  <p className={carDetailsClass}>{drive}</p>
                  <p className={carDetailsClass}> MPG {mpg}</p>
                  <p className={carDetailsClass}>Highway Mpg {highwayMPG} </p>
                  <p className={carDetailsClass}>Cylinders {cylinders} </p>
                  <p className={carDetailsClass}>Displacement {displacement}</p>
                </div>
                <div className="pt-10 px-5">
                  <p className="text-3xl py-3">Prices</p>

                  <span className="flex items-center py-5">
                    <p>$</p>
                    <p className="text-4xl px-1">{price} </p> / Day
                  </span>

                  <button
                    onClick={() => setIsBookingModalOpen(true)}
                    className="px-10 py-2.5 text-xl poppins-bold  bg-emerald-600 text-black rounded-xl hover:bg-emerald-500 transition-all duration-300 "
                  >
                    + Book {make + " " + model}
                  </button>
                </div>
              </div>
            </div>

            <div className="px-5 md:pl-[88px]">
              <p className="text-4xl  py-5">Reviews</p>
              {reviews.map((review, i) => {
                return (
                  <div key={i}>
                    <span className="flex items-center gap-2 text-lg ">
                      <p>{i + 1}.</p>
                      <p className="text-emerald-500 font-semibold">{review}</p>
                    </span>
                  </div>
                );
              })}
              <div className="py-10">
                <CarReviews />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default page;
