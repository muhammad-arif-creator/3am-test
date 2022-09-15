import React from "react";
import Agents from "../components/Agents/Agents";
import Banner from "../components/Banner/Banner";
import Custom from "../components/Customs/Custom";
import Info from "../components/Info/Info";
import Partners from "../components/Partners/Partners";
import Services from "../components/Services/Services";

const Home = () => {
  return (
    <>
      <Banner />
      <Partners />
      <Agents />
      <Info />
      <Services />
      <Custom />
    </>
  );
};

export default Home;
