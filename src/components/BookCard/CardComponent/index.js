import React from "react";
import { Card, Grid, CardMedia, Typography } from "@mui/material";
import { cardData } from "../Data";
import StarIcon from "@mui/icons-material/Star";
import { convertReview, reviewStars } from "../../../utlis";
import {Link} from  'react-router-dom'

const CardComponent = () => {
  
  return cardData.map((elem, ind) => {
    return (
      <Grid key={ind} item>
      <Link
       style={{ color: 'inherit', textDecoration: 'inherit' }}  
        key={indexedDB} 
        to={`Books/${elem.title}/${elem.id}`}> 
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
            {reviewStars(elem.rating, StarIcon)}{" "}
            {convertReview(elem.reviewCount)} <b>review</b>
          </Typography>
        </Card>
        </Link>
      </Grid>
    );
  });
};

export default CardComponent;
