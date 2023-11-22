import Link from "next/link";
import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { MdDirectionsCar } from "react-icons/md";
import { CgMenuCheese } from "react-icons/cg";
import { RiFeedbackFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GrPowerShutdown } from "react-icons/gr";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleHamburger = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    {
      id: 1,
      linkPath: "/admin/manage-cars",
      icon: MdDirectionsCar,
      linkName: "Manage Cars",
      linkNameShort: "Cars",
    },
    {
      id: 2,
      linkPath: "/admin/manage-cars",
      icon: FaUser,
      linkName: "Manage Users",
      linkNameShort: "Users",
    },
    {
      id: 3,
      linkPath: "/admin/manage-cars",
      icon: FaCartShopping,
      linkName: "Manage Orders",
      linkNameShort: "Orders",
    },
    {
      id: 4,
      linkPath: "/admin/manage-cars",
      icon: RiFeedbackFill,
      linkName: "Feedbacks",
      linkNameShort: "Feeback",
    },
    {
      id: 5,
      linkPath: "/admin/manage-cars",
      icon: GrPowerShutdown,
      linkName: "Logout",
      linkNameShort: "Logout",
    },
  ];
  return (
    <div className="border fixed h-screen">
      <div className="flex pl-5  rounded  bg-slate-50">
        <CgMenuCheese
          onClick={handleHamburger}
          className="cursor-pointer text-3xl"
        />
      </div>

      <div
        className={`sidebar ${
          isMenuOpen ? "open" : "closed"
        } bg-slate-50 rounded-md h-screen `}
      >
        <div className="menu ">
          {isMenuOpen
            ? links.map((data, i) => {
                return (
                  <div
                    key={i}
                    className="hover:bg-slate-300 flex items-center justify-between  px-3 rounded my-1"
                  >
                    <Link
                      href={data.linkPath}
                      className={`flex items-center ${
                        data.linkName === "Logout" && "text-red-500"
                      } justify-center rounded-lg py-2 gap-2 `}
                    >
                      <p className="text-xl font-semibold">{<data.icon />}</p>
                      <p>{data.linkName} </p>
                    </Link>
                  </div>
                );
              })
            : links.map((data, i) => {
                return (
                  <div key={i} className="hover:bg-slate-300 rounded my-1">
                    <div>
                      <Link
                        className={`text-[23px] ${
                          data.linkName === "Logout" && "text-red-500"
                        } justify-center font-semibold  grid p-1 `}
                        href={data.linkPath}
                      >
                        <p className="flex justify-center py-0.5">
                          <data.icon />
                        </p>
                        <p className="text-[12px]  cursor-pointer">
                          {data.linkNameShort}
                        </p>
                      </Link>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
