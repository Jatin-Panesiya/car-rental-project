import Link from "next/link";
import React, { useState } from "react";
import { IoCarSharp } from "react-icons/io5";
const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleHamburger = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  // const links = 'manage users, manage orders, logout,manage cars, feedbacks'
  const links = [
    {
      id:1,
      linkName:'',
      linkPath:'',
      linkClassName:'',
      lableName:'',
    }
  ]
  return (
    <div className={`sidebar ${isMenuOpen ? "open" : "closed"} bg-emerald-300 rounded-md `}>
      <div className="flex justify-end px-3 shadow-md">
        
        <label className=" btn-circle swap swap-rotate ">
          <input type="checkbox" onClick={handleHamburger} />

          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>

      <div className="menu">
        {isMenuOpen ? (
          <Link href={"admin/manage-cars"} className="flex items-center justify-center py-1 gap-2">
            <p> Manage Cars </p>
            <p className="text-lg font-semibold">
              <IoCarSharp />
            </p>
          </Link>
        ) : (
          <div>

            <span className=" grid ">
              <Link
                className="text-xl font-semibold flex justify-center hover-trigger relative"
                href={"admin/manage-cars"}
              >
                <IoCarSharp />
              </Link>

              <p className=" hover-content absolute left-16">
                Manage cars
              </p>

            </span>

          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
