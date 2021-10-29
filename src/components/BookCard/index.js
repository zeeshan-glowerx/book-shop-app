import React from "react";
import DownloadedCard from "./DownloadCard";
import TopRatedCard from "./TopRateCard";

const BookCard = ({location})=> {
  return (
    <div>
      <TopRatedCard />
      <DownloadedCard location={location}/>
    </div>
  );
}

export default BookCard;
