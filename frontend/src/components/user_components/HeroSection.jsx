"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <>
      <div className="bg-img ">
        <div className="bg-emerald-950  bg-opacity-30 h-screen w-full  text-white ">
          <div className="flex flex-col justify-end items-center h-96 gap-5">
            <p className="text-base 280:text-lg transition-all duration-150 320:text-xl 375:text-2xl sm:text-3xl lg:text-6xl  md:text-4xl hero__title__font  uppercase">
              Drive Your Dream Car Now
            </p>

            <Link
              href={"/carListing"}
              className="bg-emerald-600 px-5 py-2 1000:py-3 font-bold  hover:bg-emerald-700 duration-300 transition-all rounded text-base 700:text-lg 1000:text-xl flex items-center gap-2"
            >
              Book Now
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
