import React from "react";
import DownloadedCard from "./DownloadCard";
import TopRatedCard from "./TopRateCard";

const BookCard = ()=> {
  return (
    <div>
      <TopRatedCard />
      <DownloadedCard />
    </div>
  );
}

export default BookCard;
