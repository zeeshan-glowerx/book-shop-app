import React from "react";
import { Card, Grid, CardMedia, Typography } from "@mui/material";
import { cardData } from "../Data";
import StarIcon from "@mui/icons-material/Star";
import { yellow } from "@mui/material/colors";

const CardComponent = () => {
    
  const convertReview = (review) => {
    let num = review.toString();
    if (review < 1000) return review;
    else if (review > 10000) return num.charAt(0) + num.charAt(1) + "K";

    return num.charAt(0) + "K";
  };
  return cardData.map((elem, ind) => {
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
                    color: ratingValue > elem.rating ? "#EEEDF5" : yellow[800],
                  }}
                />
              );
            })}{" "}
            {convertReview(elem.reviewCount)} <b>review</b>
          </Typography>
        </Card>
      </Grid>
    );
  });
};

export default CardComponent;
