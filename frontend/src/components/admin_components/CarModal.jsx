import React, { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";

const CarModal = () => {
  const [isActionVisible, setIsActionVisible] = useState(false);
  function handleActionShow() {
    setIsActionVisible(!isActionVisible);
  }
  return (
    <div className="bg-slate-100 dark:bg-[#303030] p-3 rounded-xl w-[95%] 500:w-96 m-2 relative">
      <div className="flex  justify-between">
        <div className="flex gap-4  400:gap-8">
          <img
            src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?cs=srgb&dl=pexels-mike-bird-112460.jpg&fm=jpg"
            alt="img"
            className="w-20 object-fill h-20 rounded-xl"
          />
          <div>
            <p>Audi A8</p>
            <p className="text-sm">Batery</p>
            <p className=" py-2 text-green-500 font-semibold"> 100$</p>
          </div>
        </div>

        <button className="items-start flex" onClick={handleActionShow}>
          <HiDotsHorizontal className="cursor-pointer text-xl" />
        </button>
      </div>

      {isActionVisible && (
        <div className="absolute right-2 top-8 400:right-14  400:top-3 grid  ">
          <button className="bg-emerald-600 text-white  rounded px-2 my-0.5  text-sm py-1">
            Edit
          </button>
          <button className="bg-red-600 text-white rounded px-2 my-0.5  text-sm py-1">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default CarModal;
