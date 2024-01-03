'use client'

import Sidebar from '@/components/admin_components/Sidebar'
import React, { useState } from "react";
import { useSelector } from "react-redux";

const fakeUserData = [
  { name: "Tejas", email: "tejas@gmail.com" },
  { name: "Bhargav", email: "bhargav@gmail.com" },
  { name: "Paras", email: "paras@gmail.com" },
  { name: "Tejas", email: "tejas@gmail.com" },
  { name: "Bhargav", email: "bhargav@gmail.com" },
  { name: "Paras", email: "paras@gmail.com" },
  { name: "Tejas", email: "tejas@gmail.com" },
];
const page = () => {
  const menuStatus = useSelector((state) => state.menuStatus);
  const [filteredData, setFilteredData] = useState(fakeUserData);

  function handleChange(e) {
    const inputValue = e.target.value;
    const dataToShow = fakeUserData.filter((data) => {
      return data.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    setFilteredData(dataToShow);
  }
  return (
    <>
      <Sidebar />
      <div className={`${menuStatus ? "sm:ml-52" : "ml-20"} min-h-screen  `}>
        <p className="text-4xl p-3">Users</p>

        <input
          type="search"
          className="input  input-bordered input-accent w-[90%]  flex justify-center mx-auto bg-white text-black dark:bg-[#303134]  dark:text-white dark:placeholder:text-white  rounded py-2 px-5 border-black  border"
          placeholder="Search Users"
          onChange={handleChange}
        />

        <div className="my-5 overflow-auto 375:overflow-auto">
          <table className="table-auto w-[90%] mx-auto text-center border border-[#f1f5f9] dark:border-[#374151] ">
            <thead className="bg-[#f1f5f9] dark:bg-[#374151] text-lg font-sans ">
              <tr className="py-5">
                <th className="py-3 ">Name</th>
                <th className="py-3 ">Email</th>
                <th className="py-3 ">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map(({ name, email }, i) => (
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
                          <p> Delete</p>
                        </button>
                        <button
                          className=" px-3 400:px-5 py-0.5 rounded flex items-center justify-center border border-green-500 gap-1  "
                          title="ban user"
                        >
                          <p> Ban </p>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <p className="p-3 text-base ">No user is matching</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default page