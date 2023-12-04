"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchData } from "@/Structure/ApiHandler";

const page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [data, setData] = useState({});
  const [mount, setMount] = useState(true);

  useEffect(() => {
    async function dataFetch() {
      const arrdata = await fetchData();
      const finalData = arrdata.find((data) => data._id === id);
      setData(finalData);
      setMount(false);
    }
    dataFetch();
  }, []);
  const { make, model, year, displacement, seats, images } = data;

  return (
    <div className="text-black dark:text-white">
      {mount ? <p>Loading...</p> : <p>Hello</p>}
    </div>
  );
};

export default page;
