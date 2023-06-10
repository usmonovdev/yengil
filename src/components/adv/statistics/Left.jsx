import { Box, useTheme } from "@mui/material";
import financialStatisticsDark from "../../../assets/dark/financial-statistics.png";
import financialStatisticsLight from "../../../assets/icons/financial-statistics.png";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

const Left = () => {
  const theme = useTheme();
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "50%" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
      ref={ref}
    >
      <img
        width="40%"
        src={
          theme.palette.mode == "dark"
            ? financialStatisticsDark
            : financialStatisticsLight
        }
        alt="financial statistics"
      />
    </Box>
  );
};

export default Left;
