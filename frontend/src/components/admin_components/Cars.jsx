"use client";

import { deleteCar, fetchData } from "@/Structure/ApiHandler";
import DeleteModal from "@/components/admin_components/DeleteModal";
import Loading from "@/components/user_components/Loading";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";

const Cars = () => {
  const [data, setData] = useState([]);
  const [deleteId, setDeleteId] = useState("");
  const [mount, setMount] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const searchQuery = useSelector((state) => state.searchQuery);

  useEffect(() => {
    const newData = data.filter((item) => {
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

  if (!mount) return <Loading />;
  return (
    <div className="text-black dark:text-white min-h-screen">
      {isDeleteModal && (
        <DeleteModal
          setIsDeleteModal={setIsDeleteModal}
          handleModalDelete={handleModalDelete}
          btn={"Delete"}
          msg={"Are you sure you want to delete this Car ?"}
        />
      )}

      <p className="text-2xl p-2">Available Cars</p>
      {filteredData.length > 0 ? (
        <div className="grid gap-2 py-2">
          {filteredData.map(
            ({ _id: id, make: carName, images, price: rent }) => {
              return (
                <div
                  key={id}
                  className={` bg-slate-200 dark:bg-neutral-950 dark:shadow-slate-600 shadow-sm shadow-slate-600 rounded-xl  flex items-center mx-2 justify-between my-1   p-2 text-center `}
                >
                  <img
                    src={images[0]}
                    alt={carName}
                    className=" w-24 h-24 transition-all duration-200 500:w-32 500:h-28 imageResponsive  rounded-xl object-cover"
                  />
                  <p className="w-28 text__responsive">{carName}</p>
                  <p className="rentResponsive">{rent}$</p>

                  <div className="flex editDeleteResponsive items-center gap-2">
                    <Link
                      href={`/admin/edit-car?id=${id}`}
                      className="bg-transparent border border-green-500  hidden sm:block px-4 py-0.5 rounded-md hover:bg-green-500 hover:text-white transition-all duration-200 font-semibold"
                    >
                      Edit
                    </Link>
                    <Link
                      href={`/admin/edit-car?id=${id}`}
                      className="bg-emerald-400 edit__responsive sm:hidden px-4 py-1 rounded-sm hover:bg-emerald-500"
                    >
                      <AiFillEdit />
                    </Link>

                    <button
                      onClick={() => handleDelete(id)}
                      className="bg-transparent border border-red-500 px-4 py-0.5 hidden sm:block rounded-md hover:bg-red-500 hover:text-white transition-all duration-200 font-semibold"
                    >
                      Delete
                    </button>
                    <button
                      onClick={handleDelete}
                      className="bg-red-400 px-4 edit__responsive  sm:hidden py-1 rounded-sm hover:bg-red-500"
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                </div>
              );
            }
          )}
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
