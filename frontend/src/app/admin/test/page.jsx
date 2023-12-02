"use client"

import { authenticate } from "@/Structure/ApiHandler";
import React, { useEffect } from "react";

const Page = () => {
  
    useEffect(()=>{
        authenticate()
    })

  return (
    <div>
      
    </div>
  );
};

export default Page;
