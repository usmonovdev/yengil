import { Box } from "@mui/material";
import { useInView } from "framer-motion";
import React, { useRef } from "react";

const Right = () => {
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
        width="100%"
        src="https://static.tildacdn.com/tild3766-6134-4234-b239-393737343364/crm11.png"
        alt=""
      />
    </Box>
  );
};

export default Right;
