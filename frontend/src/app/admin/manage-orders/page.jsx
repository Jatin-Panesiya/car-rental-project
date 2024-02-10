'use client'

import { getBooking } from '@/Structure/ApiHandler';
import Sidebar from '@/components/admin_components/Sidebar'
import Loading from "@/components/user_components/Loading";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const menuStatus = useSelector((state) => state.menuStatus);
  const router = useRouter();
  const { isUser, isAdmin } = useSelector((state) => state.auth);
  const [data, setData] = useState([])
  if (!isUser || !isAdmin) {
  //  router.push("/");
  }
  if (!isUser || !isAdmin) return <Loading />;


  async function getData() {
    const res = await getBooking();
    setData(res)


  }

  useEffect(() => {
    getData()
  }, [])


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
                <th>Car</th>
                <th>Total Amount</th>
                <th>Payment Status</th>
                <th>Booking Status</th>
              </tr>
            </thead>
            <tbody>
              {orderData.length > 0 &&
                data.map(
                  (data) => (
                    <tr className="bg-base-200">
                      <td>{data?.author?.email}</td>
                      <td>{data?.carId?.make}{data?.carId?.model}</td>
                      <td>{data?.totalAmount}</td>
                      <td>{data?.paymentStatus}</td>
                      <td>{data.status}</td>
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