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

  const orderData = [
    {
      email: "jatin@gmail.com",
      totalAmount: "1500",
      paymentStatus: "success",
      bookingStatus: "success",
      make: "audi",
      model: "a8",
    },
  ];
  return (
    <>
      <Sidebar />
      <div className={`${menuStatus ? "sm:ml-52" : "ml-20"}  `}>
        <h1 className="font-bold text-3xl p-3 py-5">Manage Orders</h1>

        <div className="overflow-x-auto">
          <table className="table w-full text-center">
            {/* head */}
            <thead>
              <tr>
                <th>Email</th>
                <th>Total Amount</th>
                <th>Payment Status</th>
                <th>Booking Status</th>
                <th>Car</th>
              </tr>
            </thead>
            <tbody>
              {orderData.length > 0 &&
                orderData.map(
                  ({
                    email,
                    totalAmount,
                    make,
                    model,
                    paymentStatus,
                    bookingStatus,
                  }) => (
                    <tr className="bg-base-200">
                      <td>{email}</td>
                      <td>{totalAmount}</td>
                      <td>{paymentStatus}</td>
                      <td>{bookingStatus}</td>
                      <td>{make + " " + model}</td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default page