import React, { useRef } from "react";
import { Box } from "@mui/system";
import { useInView } from "framer-motion";
import importIconDark from "../../../assets/dark/export.png"
import importIconLight from "../../../assets/icons/export.png"
import { useTheme } from "@mui/material";

const Right = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const theme = useTheme()
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "50%" },
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        display: "flex",
        alignItems: "center",
        justifyContent:"center"
      }}
      ref={ref}
    >
      <img
        width="40%"
        src={theme.palette.mode == "dark" ? importIconDark : importIconLight}
        alt="download"
      />
    </Box>
  );
};

export default Right;
