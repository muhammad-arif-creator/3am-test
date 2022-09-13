import React from "react";
import Agents from "../components/Agents/Agents";
import Banner from "../components/Banner/Banner";
import Info from "../components/Info/Info";
import Partners from "../components/Partners/Partners";

const Home = () => {
  return (
    <>
      <Banner />
      <Partners />
      <Agents />
      <Info />
    </>
  );
};

export default Home;
