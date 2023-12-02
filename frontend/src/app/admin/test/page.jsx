"use client"

import { authenticate } from "@/Structure/ApiHandler";
import React, { useEffect } from "react";

const Page = () => {
  
    useEffect(()=>{
    async function authenticate(data) {
        try {
          const response = await fetch(
            `https://5000-itsparasdev-carapi-qy1zu9h5d46.ws-us106.gitpod.io/auth/local`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );
    
          console.log(response);
          
            const result = await response.json();
            console.log(result);
            
         
        } catch (error) {
          console.error("Authentication error:", error);
         
        }
      };authenticate()
    })

  return (
    <div>
      
    </div>
  );
};

export default Page;
