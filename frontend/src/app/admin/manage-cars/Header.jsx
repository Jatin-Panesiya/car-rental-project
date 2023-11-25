import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex serachResponsive items-center justify-between  px-2">
      <div className="my-1">
        <input
          type="search"
          className="input h-[2rem] input-bordered input-accent w-full max-w-4xl  rounded"
          placeholder="Search Cars"
        />
      </div>

      <div className="my-3 flex justify-end">
        <Link
          href={"/admin/add-car"}
          className="bg-emerald-400  px-5 py-1 text-center w-full text-lg font-semibold  hover:bg-emerald-500 rounded sm:mx-3"
        >
          Add Car
        </Link>
      </div>
    </div>
  );
};

export default Header;
