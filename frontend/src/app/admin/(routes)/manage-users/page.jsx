'use client'

import DeleteModal from "@/components/admin_components/DeleteModal";
import Sidebar from "@/components/admin_components/Sidebar";
import Loading from "@/components/user_components/Loading";
import { useRouter } from "next/navigation";
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
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isBanModel, setIsBanModel] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [banId, setBanId] = useState("");

  function handleChange(e) {
    const inputValue = e.target.value;
    const dataToShow = fakeUserData.filter((data) => {
      return data.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    setFilteredData(dataToShow);
  }
  async function handleModalDelete() {
    // const newData = await deleteCar(deleteId);
    // setData(newData);
    // setDeleteId(null);
    alert("deleted");
    setIsDeleteModal(false);
  }
  async function handleModalBan() {
    // const newData = await deleteCar(deleteId);
    // setData(newData);
    // setDeleteId(null);
    alert("deleted");
    setIsDeleteModal(false);
  }

  function handleDelete(id) {
    setDeleteId(id);
    setIsDeleteModal(true);
  }
  function handleBan(id) {
    setBanId(id);
    setIsBanModel(true);
  }
  const router = useRouter();
  const { isUser, isAdmin } = useSelector((state) => state.auth);
  if (!isUser || !isAdmin) {
    router.push("/");
  }
  if (!isUser || !isAdmin) return <Loading />;
  return (
    <>
      <Sidebar />

      <div className={`${menuStatus ? "sm:ml-52" : "ml-20"} min-h-screen  `}>
        {isDeleteModal && (
          <DeleteModal
            setIsDeleteModal={setIsDeleteModal}
            handleModalDelete={handleModalBan}
            btn={"Delete"}
            msg={"Are you sure you want to Delete this User ?"}
          />
        )}
        {isBanModel && (
          <DeleteModal
            btn={"Ban"}
            setIsDeleteModal={setIsBanModel}
            handleModalDelete={handleModalDelete}
            msg={"Are you sure you want to Ban this User ?"}
          />
        )}
        <p className="text-4xl p-3">Users</p>

        <input
          type="search"
          className="input  input-bordered input-accent w-[90%]  flex justify-center mx-auto bg-white text-black dark:bg-[#303134]  dark:text-white dark:placeholder:text-white  rounded py-2 px-5 border-black  border"
          placeholder="Search Users"
          onChange={handleChange}
        />

        <div className="my-5 overflow-auto 375:overflow-auto">
          {filteredData.length > 0 ? (
            <table className="table-auto w-[90%] mx-auto text-center border border-[#f1f5f9] dark:border-[#374151] ">
              <thead className="bg-[#f1f5f9] dark:bg-[#374151] text-lg font-sans ">
                <tr className="py-5">
                  <th className="py-3 ">Name</th>
                  <th className="py-3 ">Email</th>
                  <th className="py-3 ">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map(({ name, email }, i) => (
                  <tr
                    key={i}
                    className={`${
                      i % 2 !== 0 && "bg-[#f1f5f9] dark:bg-[#374151]"
                    }`}
                  >
                    <td className="py-3 px-2">{name}</td>
                    <td className="px-2">{email}</td>
                    <td>
                      <div className="flex gap-2 justify-center items-center">
                        <button
                          className="bg-transparent border border-red-500 px-4 py-0.5  rounded-md hover:bg-red-500 hover:text-white transition-all duration-200 font-semibold"
                          title="delete user"
                          onClick={() => handleDelete(i)}
                        >
                          <p> Delete</p>
                        </button>
                        <button
                          className="bg-transparent border border-green-500   px-4 py-0.5 rounded-md hover:bg-green-500 hover:text-white transition-all duration-200 font-semibold"
                          title="ban user"
                          onClick={() => handleBan(i)}
                        >
                          <p> Ban </p>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="p-3 500:text-2xl poppins-bold text-base text-center ">
              No user is matching
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default page