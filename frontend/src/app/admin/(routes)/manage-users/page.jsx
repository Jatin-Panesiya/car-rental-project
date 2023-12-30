'use client'

import Sidebar from '@/components/admin_components/Sidebar'
import React from 'react'
import { useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { FaBan } from "react-icons/fa";
const page = () => {
  const menuStatus = useSelector((state) => state.menuStatus);
  const fakeUserData = [
    { name: "Tejas", email: "tejas@gmail.com" },
    { name: "Bhargav", email: "bhargav@gmail.com" },
    { name: "Paras", email: "paras@gmail.com" },
    { name: "Tejas", email: "tejas@gmail.com" },
    { name: "Bhargav", email: "bhargav@gmail.com" },
    { name: "Paras", email: "paras@gmail.com" },
    { name: "Tejas", email: "tejas@gmail.com" },
  ];
  return (
    <>
      <Sidebar />
      <div className={`${menuStatus ? "sm:ml-52" : "ml-20"} min-h-screen  `}>
        <p className="text-2xl">Users</p>

        <div className="my-5 mx-1 overflow-auto 375:overflow-auto">
          <table className="table-auto w-full text-center border border-[#f1f5f9] dark:border-[#374151] ">
            <thead className="bg-[#f1f5f9] dark:bg-[#374151] text-lg font-sans ">
              <tr className="py-5">
                <th className="py-3 ">Name</th>
                <th className="py-3 ">Email</th>
                <th className="py-3 ">Action</th>
              </tr>
            </thead>
            <tbody>
              {fakeUserData.map(({ name, email }, i) => (
                <tr
                  key={i}
                  className={`${
                    i % 2 !== 0 && " bg-[#f1f5f9] dark:bg-[#374151]"
                  }`}
                >
                  <td className="py-3 px-2">{name}</td>
                  <td className="px-2">{email}</td>
                  <td>
                    <div className="flex gap-2 justify-center items-center ">
                      <button
                        className=" px-3 400:px-5 py-0.5  rounded items-center flex justify-center border border-red-500   gap-1 "
                        title="delete user"
                      >
                        {/* <MdDelete className="text-lg hidden sm:flex" /> */}
                        <p> Delete</p>
                      </button>
                      <button
                        className=" px-3 400:px-5 py-0.5 rounded flex items-center justify-center border border-green-500 gap-1  "
                        title="ban user"
                      >
                        {/* <FaBan className="text-lg hidden sm:flex" /> */}
                        <p> Ban </p>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default page