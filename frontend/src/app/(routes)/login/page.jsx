"use client";

import Header from "@/components/user_components/Header";

import React, { useEffect } from "react";
import "./style.css";

import { useRouter } from "next/navigation";
import { BACKEND_URL } from "@/config";
import Image from "next/image";
import { useSelector } from "react-redux";
import Loading from "@/components/user_components/Loading";

const page = () => {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.auth.isUser);

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  function handleGoogle() {
    window.open(`${BACKEND_URL}/auth/google`, "_self");
  }
  if (isLoggedIn) return <Loading />;
  return (
    <div>
      <Header />

      <div className=" background__image">
        <div className="bg-[#00000085] text-white h-screen flex items-center ">
          <div className="bg-[#000000ba] rounded-md w-full md:w-96  py-10 px-3 md:px-10 mx-3 700:mx-auto">
            <h1 className="text-4xl font-semibold py-5 text-center poppins-bold">
              Log into J&P Cars
            </h1>
            <div className="grid gap-2 justify-center">
              <button
                type="button"
                onClick={handleGoogle}
                className="bg-transparent text-white hover:bg-white hover:text-black rounded  flex items-center gap-2 py-1 px-5 border-white border transition-all duration-300"
              >
                <p>
                  <Image
                    src={"/googleSVG.svg"}
                    alt="Google"
                    width={40}
                    height={40}
                  />
                </p>
                <p className="font-bold">Log in with Google</p>
              </button>
              <button
                onClick={handleGoogle}
                type="button"
                className="bg-transparent text-white hover:bg-white hover:text-black rounded  flex items-center gap-2 py-1 px-5 border-white border transition-all duration-300 "
              >
                <p>
                  <Image
                    src={"/githubSVG (2).svg"}
                    alt="Google"
                    width={40}
                    height={40}
                  />
                </p>
                <p className="font-bold">Log in with Github</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
