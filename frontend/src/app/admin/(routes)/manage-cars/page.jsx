"use client";

import React from "react";
import Sidebar from "../../../../components/admin_components/Sidebar";
import { useSelector } from "react-redux";

import Cars from "../../../../components/admin_components/Cars";
import Header from "../../../../components/admin_components/Header";
import { useRouter } from "next/navigation";
import Loading from "@/components/user_components/Loading";

const page = () => {
  const menuStatus = useSelector((state) => state.menuStatus);
  const router = useRouter();
  const { isUser, isAdmin } = useSelector((state) => state.auth);
  if (!isUser || !isAdmin) {
    router.push("/");
  }
  if (!isUser || !isAdmin) return <Loading />;
  return (
    <>
      <Sidebar />
      <div className={`${menuStatus ? "sm:ml-52" : "ml-20"}  `}>
        <Header />
        <Cars />
      </div>
    </>
  );
};

export default page;
