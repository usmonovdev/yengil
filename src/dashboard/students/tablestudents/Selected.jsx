import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { H3 } from "../../../ui/typography";

const Selected = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <Box
        sx={{
          height: "56px",
          bgcolor: "action.hover",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 10px",
        }}
      >
        <H3>Selected - 1</H3>
        <Box></Box>
      </Box>
    </motion.div>
  );
};

export default Selected;
