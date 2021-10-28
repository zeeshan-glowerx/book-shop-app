import React from "react";
import { cardData } from "../../BookCard/Data";
import { convertReview, reviewStars } from "../../../utlis";
import StarIcon from "@mui/icons-material/Star";
import CloudDownloadSharpIcon from "@mui/icons-material/CloudDownloadSharp";
import { useParams } from "react-router-dom";

const RightSideBar = () => {
  const { id } = useParams();

  return (
    <div className="rightsidebar__container">
      {cardData.map((elem, ind) => {
        return elem.id === id ? (
          <>
            <h1>{elem.title}</h1>
            <h5>
              By {elem.aurthor} |{reviewStars(elem.rating, StarIcon)} (
              {convertReview(elem.reviewCount)} reviews)
            </h5>
            <button className="button__rightsidebar">
              <CloudDownloadSharpIcon sx={{ fontSize: 22 }} /> Free Downloads
            </button>
            <p> {elem.description}</p>
          </>
        ) : (
          <></>
        );
      })}
    </div>
  );
};

export default RightSideBar;
