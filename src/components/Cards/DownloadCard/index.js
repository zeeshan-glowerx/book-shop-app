import React from "react";
import { cardData } from "../Data";
import { Card, Grid, CardMedia, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { yellow } from "@mui/material/colors";
const BookCard = () => {
  const renderReview = (review) => {
    let num = review.toString();
    if (review < 1000) return review;
    else if (review > 10000) return num.charAt(0) + num.charAt(1) + "K";

    return num.charAt(0) + "K";
  };

  return (
    <Grid container spacing={5}>
      <Grid marginTop="20px" item xs={12}>
        <p
          style={{
            margin: "0 0 0 53px",
            padding: "10px 5px",
            fontWeight: "700px",
            fontSize: "20px",
          }}
        >
          {" "}
          <b> Most Downloaded</b>{" "}
          <span style={{ fontWeight: "400px", fontSize: "15px" }}>
            (View All)
          </span>
        </p>
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {cardData.map((elem, ind) => {
            return (
              <Grid key={ind} item>
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

                  <Typography>
                    <b>{elem.title}</b>
                  </Typography>
                  <Typography>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <StarIcon
                          sx={{
                            fontSize: 18,
                            color:
                              ratingValue > elem.rating
                                ? "#EEEDF5"
                                : yellow[800],
                          }}
                        />
                      );
                    })}{" "}
                    {renderReview(elem.reviewCount)} <b>review</b>
                  </Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BookCard;
