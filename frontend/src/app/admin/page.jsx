"use client";

import React from "react";
import Sidebar from "../../components/admin_components/Sidebar";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Loading from "@/components/user_components/Loading";

const page = () => {
    const menuStatus = useSelector((state) => state.menuStatus);
    const { isUser, isAdmin } = useSelector((state) => state.auth);
    const router = useRouter();
    if (!isUser || !isAdmin) {
        router.push("/");
    }
    if (!isUser || !isAdmin) return <Loading />;
    return (
        <div className="text-black darK:text-white min-h-screen poppins">
            <Sidebar />

            <div
                className={`${menuStatus ? "sm:ml-52" : "ml-20"
                    } text-black dark:text-white min-h-screen flex items-center justify-center text-5xl  `}
            >
                <p>Welcome Admin !</p>
            </div>
        </div>
    );
};

export default page;
