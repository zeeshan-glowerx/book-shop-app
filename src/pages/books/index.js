import React from "react";
import NavBar from "../../components/NavBar";
import Cards from "../../components/Cards";
import Layout from "../../components/Layout";
import Slider from "../../components/Slider";
import CopyRight from "../../components/CopyRight";

const Books = () => {
  return (
    <Layout>
      <NavBar activeItem="Books" />
      <Slider />
      <Cards/>
      <CopyRight/>
    </Layout>
  );
};

export default Books;
