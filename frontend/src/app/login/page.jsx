"use client";

import Header from "@/components/user_components/Header";
import Link from "next/link";
import React, { useState } from "react";
import "./style.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { authenticate } from "@/Structure/ApiHandler";
import { ValidateForm } from "@/utils/VaidateForm";

const page = () => {
  const defualtData = { email: "", password: "" };
  const [data, setData] = useState(defualtData);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function handleLogin(e) {
    if (!ValidateForm(data)) {
      setIsError(false);
      setError("");
      await authenticate(data);
    } else {
      setIsError(true);
      setError("Fill up all details");
    }
  }

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
                onChange={handleChange}
              />
              <input
                type="password"
                className="bg-[#333333] placeholder:text-gray-500 rounded-sm px-3 py-2"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              {isError && (
                <p className="text-red-500 font-bold text-lg">{error}</p>
              )}
              <button
                onClick={handleLogin}
                className="bg-emerald-600  py-1.5 rounded-sm hover:bg-emerald-800"
              >
                Sign In
              </button>
              <Link href={"forget-password"} className="text-blue-500">
                Froget Password ?
              </Link>
              <div className="grid gap-2">
                <button className="bg-transparent text-white hover:bg-white hover:text-black rounded  flex items-center gap-2 py-1 px-3 border-white border transition-all duration-300">
                  <p>
                    {" "}
                    <FaGoogle />
                  </p>
                  <p>Continue with Google</p>
                </button>
                <button className="bg-transparent text-white hover:bg-white hover:text-black rounded  flex items-center gap-2 py-1 px-3 border-white border transition-all duration-300 ">
                  <p className="text-blue-500">
                    {" "}
                    <FaFacebookF />
                  </p>
                  <p>Continue with Facebook</p>
                </button>
              </div>
            </div>

            <Link href={"register"} className="flex items-center gap-2 mt-10 ">
              <p className="text-gray-400">New to J&P Cars ? </p>{" "}
              <p className="hover:text-blue-500">Register</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
