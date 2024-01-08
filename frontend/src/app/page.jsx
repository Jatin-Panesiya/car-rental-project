"use client"

import Footer from "@/components/user_components/Footer";
import Header from "@/components/user_components/Header";
import "../assets/styles/globals.css";
import HeroSection from "@/components/user_components/HeroSection";
import { useEffect, useState } from "react";
import { getUser } from "@/Structure/ApiHandler";

function Home() {
  // const [data, setData] = useState("");
  // async function getUserData() {
  //   try {
  //     const newData = await getUser();
  //     setData(newData);
  //   } catch (err) {
  //     console.log({ err });
  //   }
  // }
  // useEffect(() => {
  //   getUserData();
  // }, []);
  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
}

export default Home;
