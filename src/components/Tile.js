import React from "react";
import { Box, Grid } from "@material-ui/core";

function Tile(props) {
  let bgColor;
  if (props.index === 0) {
    bgColor = "#FD879Dbb";
  } else if (props.index === 1) {
    bgColor = "#FDE85D";
  } else if (props.index === 2) {
    bgColor = "#5CFFA8";
  } else {
    bgColor = "#428bdf99";
  }
  return (
    <Grid>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height={100}
        width={260}
        fontSize={16}
        fontWeight={600}
        color={"#fff"}
        style={{ backgroundColor: bgColor }}
        p={2}
        m={1}
      >
        {Object.keys(props.data).map((key) => {
          return (
            <p key={key}>
              {key} - {props.data[key]}
            </p>
          );
        })}
      </Box>
    </Grid>
  );
}

export default Tile;
