import { carDataApi } from "@/config";
import { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

const Cars = () => {
  
const [data, setData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      console.log(1);
      const response = await fetch(
        "https://5000-itsparasdev-carapi-qy1zu9h5d46.ws-us106.gitpod.io/cars",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
          mode:"no-cors"        }
      );

      console.log(response);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData(); // Call the function directly if you want it to run once on mount
}, []);

  const carsData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      carName: "Mustang Gt",
      rent: "180$",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1620157206955-5d8ebca0df95?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      carName: "BMW",
      rent: "180$",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      carName: "Sport Car",
      rent: "180$",
    },
  ];

  return (
    <>
      <p>Available Cars</p>
      <div>
        {carsData.map(({ id, image, carName, rent }, i) => {
          return (
            <div
              key={id}
              className={`border shadow-emerald-200 flex items-center mx-2 justify-between my-1  rounded-md p-2 text-center `}
            >
              <img
                src={image}
                alt={carName}
                className="w-24 imageResponsive h-24 rounded-md"
              />
              <p className="w-24 text__responsive">{carName}</p>
              <p className="rentResponsive">{rent}</p>

              <div className="flex editDeleteResponsive items-center gap-2">
                <button className="bg-transparent border border-green-500  hidden sm:block px-4 py-0.5 rounded-md hover:bg-green-500 hover:text-white transition-all duration-200 font-semibold">
                  Edit
                </button>
                <button className="bg-emerald-400 edit__responsive sm:hidden px-4 py-1 rounded-sm hover:bg-emerald-500">
                  <AiFillEdit />
                </button>

                <button className="bg-transparent border border-red-500 px-4 py-0.5 hidden sm:block rounded-md hover:bg-red-500 hover:text-white transition-all duration-200 font-semibold">
                  Delete
                </button>
                <button className="bg-red-400 px-4 edit__responsive  sm:hidden py-1 rounded-sm hover:bg-red-500">
                  <MdDeleteForever />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cars;
