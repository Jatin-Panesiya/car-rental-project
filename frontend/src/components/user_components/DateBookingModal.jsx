import { bookDate } from "@/Structure/ApiHandler";
import React, { useEffect, useState } from "react";
//import { useRouter } from "next/navigation";

const DateBookingModal = ({ setIsBookingModalOpen,id }) => {
  const [bookingDates, setBookingDates] = useState([]);
//  const router = useRouter();

  const handleBooking = async(date, month) => {
    const finalDate = date + month;
    let paymentLink =  await bookDate(id, finalDate);
    return window.open(paymentLink,"_self");

  };
  useEffect(() => {
    const newDates = [];

    for (let i = 1; i <= 7; i++) {
      const todayDate = new Date();
      todayDate.setDate(todayDate.getDate() + i);
      newDates.push(new Date(todayDate));
    }

    setBookingDates(newDates);
  }, []);
  return (
    <div className="justify-center flex w-full h-screen items-center fixed bg-[#00000078] text-black z-50 ">
      <div className="bg-white p-8 border__radius">
        <div className="w-full text-end">
          <button
            onClick={() => setIsBookingModalOpen(false)}
            className="px-2 hover:text-red-500 font-semibold"
          >
            Close
          </button>
        </div>
        <p className="py-3 font-semibold text-lg">Select Date for Booking</p>
        {bookingDates.map((date, i) => {
          return (
            <button
              key={i}
              className="p-1 border m-1 hover:bg-emerald-100 transition-all duration-150 my-5"
              onClick={() =>
                handleBooking(
                  date.getDate(),
                  date.toLocaleString("default", { month: "long" })
                )
              }
            >
              {date.getDate()}{" "}
              {date.toLocaleString("default", { month: "short" })}
            </button>
          );
        })}
        <p className="text-xs text-emerald-600">
          You can book your car up to 7 days in advance
        </p>
      </div>
    </div>
  );
};

export default DateBookingModal;
