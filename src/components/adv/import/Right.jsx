import React, { useRef } from "react";
import { Box } from "@mui/system";
import { useInView } from "framer-motion";

const Right = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "50%" },
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
      ref={ref}
    >
      <img
        style={{ width: "100%" }}
        src="https://static.tildacdn.com/tild3636-3337-4330-a237-383330613938/excel_to_brizo.svg"
        alt=""
      />
    </Box>
  );
};

export default Right;
