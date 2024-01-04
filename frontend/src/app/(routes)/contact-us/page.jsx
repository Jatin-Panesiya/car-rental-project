"use client";

import Header from "@/components/user_components/Header";
import React from "react";
import {
  FaPhoneVolume,
  FaLocationDot,
  FaXTwitter,
  FaSquareInstagram,
  FaDiscord,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


import ContactForm from "@/components/user_components/ContactForm";
const page = () => {
  return (
    <div className="min-h-screen text-black dark:text-white">
      <Header />
      <div className="pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold pt-5">Contact Us</h2>
          <p className="text-gray-500 text-lg pt-2">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        <div className="grid items-center sm:flex mx-3 sm:justify-around gap-5 py-3 600:py-10 ">
          <div className="border rounded-md border-black dark:border-white px-5 pb-10 w-full sm:w-96 sm:mx-3 mx-1 my-5">
            <div className="my-10">
              <h2 className="text-2xl">Contact Information</h2>
              <p>Say something to start a live chat!</p>
            </div>

            <div className="text-lg">
              <span className="flex items-center gap-5 py-2">
                <p>
                  <FaPhoneVolume />
                </p>
                <p>+1234567890</p>
              </span>
              <span className="flex items-center gap-5 py-2">
                <p>
                  <MdEmail />
                </p>
                <p>JandP@gmail.com</p>
              </span>
              <span className="flex items-center gap-5 py-2">
                <p>
                  <FaLocationDot />
                </p>
                <p>Rajkot, Gujarat</p>
              </span>
            </div>

            <div className="flex items-center gap-5 text-xl mt-10">
              <i className="cursor-pointer rounded">
                <FaXTwitter />
              </i>
              <i className="cursor-pointer rounded">
                <FaSquareInstagram />
              </i>
              <i className="cursor-pointer rounded">
                <FaDiscord />
              </i>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default page;
