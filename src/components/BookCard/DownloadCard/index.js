import React from "react";
import { Grid } from "@mui/material";

import CardComponent from "../CardComponent";

const BookGridCard = ({location}) => {
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
          <CardComponent location={location} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BookGridCard;
