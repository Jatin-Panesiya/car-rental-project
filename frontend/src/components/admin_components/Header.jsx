"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/redux/searchQuery";

const Header = () => {
  const dispatch = useDispatch();

  function handleSearch(e) {
    dispatch(setSearchQuery(e.target.value));
  }

  return (
    <div className="flex  items-center   px-2">
      <div className="my-1 w-full">
        <input
          type="search"
          className="input  input-bordered input-accent w-[90%]  bg-white text-black dark:bg-[#303134]  dark:text-white dark:placeholder:text-white  rounded py-1.5 px-5 border-black  border "
          placeholder="Search Cars"
          onChange={handleSearch}
        />
      </div>

      <div className="my-3 flex justify-end">
        <Link
          href={"/admin/add-car"}
          className="bg-emerald-400  px-5 py-1 text-center  min-w-[120px] text-lg font-semibold text-black dark:text-white hover:bg-emerald-500 rounded sm:mx-3"
        >
          Add Car
        </Link>
      </div>
    </div>
  );
};

export default Header;
