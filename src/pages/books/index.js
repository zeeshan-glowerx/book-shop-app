import React from "react";
import BookCard from "../../components/BookCard";
import Layout from "../../components/Layout";
import Slider from "../../components/Slider";
import CopyRight from "../../components/CopyRight";

const Books = () => {
  return (
    <Layout activeItem="Books">
      <Slider />
      <BookCard />
      <CopyRight />
    </Layout>
  );
};

export default Books;
