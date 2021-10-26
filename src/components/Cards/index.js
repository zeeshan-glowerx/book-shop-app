import React from "react";
import DownloadedCard from "./DownloadCard";
import TopRatedCard from "./TopRateCard";

function Card() {
  return (
    <div>
      <TopRatedCard />
      <DownloadedCard />
    </div>
  );
}

export default Card;
