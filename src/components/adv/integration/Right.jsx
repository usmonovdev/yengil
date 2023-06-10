import { Box, useTheme } from "@mui/material";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import settingsDark from "../../../assets/dark/settings.png"
import settingsLight from "../../../assets/icons/settings.png"

const Right = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const theme = useTheme()
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
        src={theme.palette.mode == "dark" ? settingsDark : settingsLight}
        alt="integration"
      />
    </Box>
  );
};

export default Right;
