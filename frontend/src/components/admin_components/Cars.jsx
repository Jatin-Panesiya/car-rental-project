"use client";

import { deleteCar, fetchData } from "@/Structure/ApiHandler";
import DeleteModal from "@/components/admin_components/DeleteModal";
import Loading from "@/components/user_components/Loading";
import { setSearchQuery } from "@/redux/searchQuery";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { HiDotsHorizontal } from "react-icons/hi";

const Cars = () => {
  const [data, setData] = useState([]);
  const [deleteId, setDeleteId] = useState("");
  const [mount, setMount] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [isActionVisible, setIsActionVisible] = useState(0);
  function handleActionShow(id) {
    setIsActionVisible(id);
    if (id === isActionVisible) {
      setIsActionVisible(0);
    }
  }
  const searchQuery = useSelector((state) => state.searchQuery);

  useEffect(() => {
    const newData = data?.filter((item) => {
      const make = item.make.toLowerCase();
      return make.startsWith(searchQuery.toLowerCase());
    });
    setFilteredData(newData);
  }, [searchQuery, data]);

  useEffect(() => {
    async function fetchDataAndShowData() {
      const result = await fetchData();
      setData(result);
      setFilteredData(result);
      setMount(true);
    }
    fetchDataAndShowData();
  }, []);

  function handleDelete(id) {
    setDeleteId(id);
    setIsDeleteModal(true);
  }
  async function handleModalDelete() {
    const newData = await deleteCar(deleteId);
    setData(newData);
    setDeleteId(null);
    setIsDeleteModal(false);
  }
  const dispatch = useDispatch();

  function handleSearch(e) {
    dispatch(setSearchQuery(e.target.value));
  }

  if (!mount) return <Loading />;
  return (
    <div className="text-black dark:text-white min-h-screen ">
      {isDeleteModal && (
        <DeleteModal
          setIsDeleteModal={setIsDeleteModal}
          handleModalDelete={handleModalDelete}
          btn={"Delete"}
          msg={"Are you sure you want to delete this Car ?"}
        />
      )}
      {/* Search bar */}
      <div className="p-2 w-full">
        <input
          type="search"
          className="input  input-bordered input-accent  w-[95%] 700:w-[450px] flex   bg-slate-100 text-black dark:bg-[#303134]  dark:text-white dark:placeholder:text-white  rounded py-1.5 px-5 border-black  border sticky top-0 outline-none"
          placeholder="Search Cars"
          onChange={handleSearch}
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="text-xl 400:text-2xl p-5 font-bold ">All Cars</p>
        <Link
          href={"/admin/add-car"}
          className="bg-emerald-400 uppercase text-sm 400:text-base  px-2 mx-1 400:px-5 py-1 text-center  min-w-[120px]  font-semibold text-black dark:text-black hover:bg-emerald-500 rounded sm:mx-3"
        >
          + Add New Car
        </Link>
      </div>

      {filteredData?.length > 0 ? (
        <div className="flex flex-wrap justify-evenly gap-2 py-2">
          {filteredData?.map((data) => {
            const { _id: id, make, images, price, model, seats, mpg } = data;
            return (
              <div
                className=" shadow-xl dark:shadow-none dark:border-none border border-[#dcdcd78c] shadow-[#dcdcd78c] dark:bg-[#303030] p-3 rounded-xl w-[95%] 500:w-96 m-2 relative"
                key={id}
              >
                <div className="flex  justify-between">
                  <div className="flex gap-4  400:gap-8">
                    <img
                      src={images[0]}
                      alt="img"
                      className="400:w-28 400:h-24 w-20 h-20 rounded-xl"
                    />
                    <div>
                      <p className="font-bold">{make}</p>
                      <p className="text-sm py-1">{data.class}</p>
                      <p className=" py-2 text-green-500 font-semibold">
                        ${price}
                      </p>
                    </div>
                  </div>

                  <button
                    className="items-start flex"
                    onClick={() => handleActionShow(id)}
                  >
                    <HiDotsHorizontal className="cursor-pointer text-xl" />
                  </button>
                </div>
                <div>
                  <p className="pt-2 font-semibold">Summary</p>
                  <p className="py-1">
                    {make + " " + model} {seats}-seater car that achieves {mpg}{" "}
                    miles per gallon in the city
                  </p>
                </div>
                {isActionVisible === id && (
                  <div className="absolute right-2 top-8 400:right-14  400:top-3 grid  ">
                    <Link
                      href={`/admin/edit-car?id=${id}`}
                      className="bg-emerald-600 text-white  rounded px-2 my-0.5  text-sm py-1 text-center"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(id)}
                      className="bg-red-600 text-white rounded px-2 my-0.5  text-sm py-1"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="p-3 500:text-2xl poppins-bold text-base text-center ">
          No Car is matching
        </p>
      )}
    </div>
  );
};

export default Cars;
