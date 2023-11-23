"use client";

import React from "react";

import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import Link from "next/link";

const page = () => {
  const menuStatus = useSelector((state) => state.menuStatus);

  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>

      <div className={`${menuStatus ? "ml-52" : "ml-20"}`}>

        <div className="my-1">
          <input
            type="search"
            className="border border-black  outline-none rounded px-3 py-1 w-full"
            placeholder="Search Cars"
          />
        </div>

        <div className="my-3 flex justify-end">
          <Link
            href={"/admin/add-car"}
            className="bg-emerald-300 px-5 py-1 text-lg hover:bg-emerald-400 rounded"
          >
            Add Car
          </Link>
        </div>

      </div>
    </div>
  );
};

export default page;
