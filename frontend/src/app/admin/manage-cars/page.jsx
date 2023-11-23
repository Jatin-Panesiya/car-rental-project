"use client";

import React from "react";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import Cars from "./Cars";
import Header from "./Header";

const page = () => {
  const menuStatus = useSelector((state) => state.menuStatus);
  return (
    <>
        <Sidebar />
      <div className={`${menuStatus ? "ml-52" : "ml-20"}  `}>
        <Header />
        <Cars />
      </div>

    </>
  );
};

export default page;
