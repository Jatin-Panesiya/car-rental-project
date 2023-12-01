import Header from "@/components/user_components/Header";
import Link from "next/link";
import React from "react";
import "./style.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <Header />

      <div className=" background__image">
        <div className="bg-[#00000085] text-white h-screen pt-24">
          <div className="bg-[#000000ba] rounded-md w-full md:w-96 m-auto py-5 px-3 md:px-10">

            <h1 className="text-3xl font-semibold py-5">Sign In</h1>

            <div className="grid gap-3 ">
            
              <input
                type="text"
                className="bg-[#333333] placeholder:text-gray-500 rounded-sm px-3 py-2"
                placeholder="Email"
                name="email"
              />
              <input
                type="password"
                className="bg-[#333333] placeholder:text-gray-500 rounded-sm px-3 py-2"
                placeholder="Password"
                name="password"
              />


              <button className="bg-emerald-600  py-1.5 rounded-sm hover:bg-emerald-800">Sign In</button>
              <div className="grid gap-2" >
                
                <button className="bg-transparent text-white hover:bg-white hover:text-black rounded  flex items-center gap-2 py-1 px-3 border-white border transition-all duration-300"><p> <FaGoogle /></p><p>Continue with Google</p></button>
                <button className="bg-transparent text-white hover:bg-white hover:text-black rounded  flex items-center gap-2 py-1 px-3 border-white border transition-all duration-300 "><p className="text-blue-500"> <FaFacebookF /></p><p>Continue with Facebook</p></button>
              </div>
            </div>

            <Link href={"register"} className="flex items-center gap-2 mt-10 "> <p className="text-gray-400">New to J&P Cars ? </p> <p className="hover:text-blue-500">Register</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
