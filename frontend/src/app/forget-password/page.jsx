import Header from "@/components/user_components/Header";
import Link from "next/link";
import React from "react";
import "./style.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const page = () => {
  return (
    <div>
     

      <div className=" background__image">
        <div className="bg-[#00000085] text-white h-screen pt-24">
          <div className="bg-[#000000ba] rounded-md w-full md:w-96 m-auto py-5 px-3 md:px-10">

            <h1 className="text-3xl font-semibold py-5">Reset Password</h1>

            <div className="grid gap-3 ">
            
              <input
                type="text"
                className="bg-[#333333] placeholder:text-gray-500 rounded-sm px-3 py-2"
                placeholder="Email"
                name="email"
              />
              

              <button className="bg-emerald-600  py-1.5 rounded-sm hover:bg-emerald-800">Send Reset Password</button>
             
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
