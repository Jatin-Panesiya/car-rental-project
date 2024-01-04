import { useRouter } from "next/navigation";
import React from "react";

const LoginModal = ({ setIsLoginModalOpen, msg }) => {
  const router = useRouter();
  return (
    <div className="fixed  z-50  w-full h-screen m-auto bg-black bg-opacity-40 pt-10 ">
      <div className=" bg-white dark:bg-[#1f2937] w-[95%] mx-2 600:mx-auto  600:w-[500px]  rounded-xl flex flex-col border dark:border-[#37475d]    ">
        <div className="border-b px-5 border-gray-500 py-3 font-bold text-xl flex items-center justify-between">
          <p>Login</p>{" "}
          <button onClick={() => setIsLoginModalOpen(false)}>x</button>
        </div>
        <p className="py-3 px-5 border-b  border-gray-500 text-gray-700  dark:text-gray-400 ">
          {msg}
        </p>
        <div className="flex justify-end gap-3 px-5 py-5">
          <button
            className="bg-red-600 hover:bg-red-500 duration-200 transition-all px-3 py-1  font-bold text-white dark:text-black"
            onClick={() => setIsLoginModalOpen(false)}
          >
            Close
          </button>
          <button
            className="bg-emerald-600 hover:bg-emerald-500 duration-200 transition-all px-3 py-1  font-bold text-white dark:text-black"
            onClick={() => router.push("/login")}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
