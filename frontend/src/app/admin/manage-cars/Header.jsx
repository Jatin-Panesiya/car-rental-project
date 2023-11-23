import React from "react";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import Cars from "./Cars";

const Header = ()=>{
  const menuStatus = useSelector((state) => state.menuStatus);

    return(
        <div className="flex items-center justify-between">
        <div className="my-1 border border-black flex items-center rounded gap-1">
          <input
            type="search"
            className=" outline-none rounded px-3 py-1 "
            placeholder="Search Cars"
          /><FaSearch className="cursor-pointer mr-2" />
        </div>

        <div className="my-3 flex justify-end">
          <Link
            href={"/admin/add-car"}
            className="bg-emerald-300 px-5 py-1 text-lg hover:bg-emerald-400 rounded mx-3"
          >
            Add Car
          </Link>
        </div>
      </div>
    )
}

export default Header