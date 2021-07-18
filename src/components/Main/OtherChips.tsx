import React from "react";
import {Grid, Chip } from "@material-ui/core";
import { OtherChipsData } from "../../assets/otherChips";
export const OtherChips: React.FC = () => {
  return (
    <>
    <Grid
      container
      justifyContent="center"
    >
       {OtherChipsData.map((chip) => (
          <Chip
            key={chip.id}
            variant="outlined"
            size="small"
            label={chip.label}
            color="default"
          />
        ))}
    </Grid>
    </>
  );
};


