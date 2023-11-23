import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";


const Header = ()=>{
  const menuStatus = useSelector((state) => state.menuStatus);

    return(
        <div className="flex items-center justify-between">

        <div className="my-1">
          <input
            type="search"
            className="input  w-full max-w-xs border border-black rounded"
            placeholder="Search Cars"
          />
        </div>

        <div className="my-3 flex justify-end">
          <Link
            href={"/admin/add-car"}
            className="bg-emerald-300 px-5 py-1 text-lg btn hover:bg-emerald-400 rounded mx-3"
          >
            Add Car
          </Link>
        </div>
      </div>
    )
}

export default Header