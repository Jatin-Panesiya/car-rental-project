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
    <div className="flex items-center  py-0.5 sticky top-0 px-2">
      <div className="my-1 w-full">
        <input
          type="search"
          className="input  input-bordered input-accent w-[80%]  bg-white text-black dark:bg-[#303134]  dark:text-white dark:placeholder:text-white  rounded py-1 px-5 border-black  border "
          placeholder="Search Cars"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Header;
