import React from "react";
import { Box } from "@mui/material";
import Left from "./Left";
import Right from "./Right";

const Statistics = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Left />
      <Right/>
    </Box>
  );
};

export default Statistics;
