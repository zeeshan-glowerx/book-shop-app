import React from "react";
import { cardData } from "../Data";
import { Card, Grid, CardMedia, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { yellow } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { convertReview, reviewStars } from "../../../utlis";

const BookCarouselCard = () => {
  return (
    <>
      <p
        style={{
          margin: "55px 0 20px 55px",
          fontWeight: "700px",
          fontSize: "22px",
        }}
      >
        {" "}
        <b> Top Rated</b>{" "}
        <span style={{ fontWeight: "400px", fontSize: "15px" }}>
          (View All)
        </span>
      </p>
      <div style={{ margin: "0 0 0 50px" }}>
        <Carousel
          autoPlay={3000}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          centerMode={true}
          centerSlidePercentage={20}
          width={1180}
          className="carousel"
        >
          {cardData.map((elem, ind) => {
            return (
              <Grid
                key={ind}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Link
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  key={indexedDB}
                  to={`Books/${elem.title}/${elem.id}`}
                >
                  <Card
                    style={{
                      border: "none",
                      boxShadow: "none",
                      height: "328px",
                      width: "222.3px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="250px"
                      width="219.3px"
                      image={elem.imgUrl}
                      alt="green iguana"
                    />

                    <Typography style={{ textAlign: "left" }}>
                      <b>{elem.title}</b>
                    </Typography>
                    <Typography style={{ textAlign: "left" }}>
                      {reviewStars(elem.rating, StarIcon)}{" "}
                      {convertReview(elem.reviewCount)} <b>review</b>
                    </Typography>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default BookCarouselCard;
