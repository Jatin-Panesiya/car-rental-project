'use client'

import Sidebar from '@/components/admin_components/Sidebar'
import Loading from "@/components/user_components/Loading";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

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
      <div className={`${menuStatus ? "sm:ml-52" : "ml-20"}  `}></div>
    </>
  );
};

export default page