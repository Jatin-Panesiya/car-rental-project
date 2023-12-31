"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { MdOutlineMenu } from "react-icons/md";
import { useSelector } from "react-redux";

const Header = () => {
  const isLoggedInUser = useSelector((state) => state.auth.isUser);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  let headerData = [
    {
      linkName: "Home",
      linkPath: "/",
    },
    {
      linkName: "Cars",
      linkPath: "/carListing",
    },
    {
      linkName: "About",
      linkPath: "/about",
    },
    ,
    {
      linkName: "Contact",
      linkPath: "/contact-us",
    },
    {
      linkName: "Login",
      linkPath: "/login",
    },
    {
      linkName: "Admin",
      linkPath: "/admin",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentRoute = usePathname();
  // const [filteredHeader]

  if (isLoggedInUser) {
    headerData = headerData.filter((item) => item.linkName !== "Login");
  }
  if (!isAdmin) {
    headerData = headerData.filter((item) => item.linkName !== "Admin");
  }

  return (
    <div>
      <div className="flex items-center z-10 gap-5 bg-transparent  shadow-md  px-5 py-5  justify-between fixed w-full backdrop-blur-sm backdrop-brightness-100  text-black ">
        {/* Logo*/}
        <Link href={"/"}>
          <h1 className="poppins-bold text-3xl flex items-center text-emerald-500 uppercase">
            J&P Cars
          </h1>
        </Link>

        {/* desktop menu*/}

        <div className="hidden 750:flex gap-2 text-xl font-semibold">
          {headerData.map(({ linkName, linkPath }, i) => {
            return (
              <Link
                key={i}
                className={`dark:hover:text-white transition-colors duration-300 text-black text-xl shadow-sm shadow-slate-400 ${
                  currentRoute === linkPath
                    ? "bg-emerald-300 px-3 rounded py-1"
                    : "bg-white bg-opacity-20 px-3 rounded py-1"
                } `}
                href={linkPath}
              >
                {linkName}
              </Link>
            );
          })}
        </div>

        {/* mobile menu*/}
        {isMenuOpen && (
          <div className="grid absolute bg-slate-100 dark:bg-[#121212]  text-center text-black left-0 justify-center top-[74px] w-full 750:hidden gap-5  py-3 text-xl">
            {headerData.map(({ linkName, linkPath }, i) => {
              return (
                <Link
                  key={i}
                  className={`hover:text-emerald-500 text-black dark:text-white ${
                    currentRoute === linkPath
                      ? "bg-emerald-600 px-3 rounded py-1"
                      : "bg-white bg-opacity-20 px-3 rounded py-1"
                  } `}
                  href={linkPath}
                >
                  {linkName}
                </Link>
              );
            })}
          </div>
        )}

        {/* three bar label */}

        <MdOutlineMenu
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="750:hidden text-3xl text-emerald-500 "
        />
      </div>
    </div>
  );
};

export default Header;
