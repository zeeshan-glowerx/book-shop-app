import React from "react";
import DownloadCard from "../../components/BookCard/DownloadCard";
import Layout from "../../components/Layout";
const SearchFilter = () => {
  return (
    <Layout activeItem="Books">
      <DownloadCard location="Search" />
    </Layout>
  );
};

export default SearchFilter;
