import { Box, IconButton, styled, useTheme } from "@mui/material";
import React, { useState } from "react";
import { H1, Paragraph } from "../../ui/typography";
import chatArrow from "../../assets/icons/double-arrow.png";
import darkChatArrow from "../../assets/dark/double-arrow.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/themeSlice";
import { motion } from "framer-motion";

const Image = styled("img")(({ theme }) => ({
  width: "20px",
}));

const TopDashboard = ({ header, title }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.sidebar);

  const HeaderBox = styled("div")(({ theme }) => ({
    background: theme.palette.custom.headerOpacity,
    width: `${state ? "calc(100% - 80px)" : "100%"}`,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    position: "fixed",
    gap: "20px",
    right: "0",
    backdropFilter: "blur(5px)",
    zIndex: "10000",
  }));

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, type: "spring", delay: 0.4 }}
    >
      <HeaderBox>
        <IconButton
          onClick={() => dispatch(toggleSidebar())}
          variant="text"
          sx={{
            marginLeft: "10px",
            transform: `${state ? "rotate(180deg)" : "rotate(0deg)"}`,
          }}
        >
          <Image
            src={theme.palette.mode == "dark" ? darkChatArrow : chatArrow}
            alt="icon"
          />
        </IconButton>
        <Box>
          <H1>{header}</H1>
          <Paragraph>{title}</Paragraph>
        </Box>
      </HeaderBox>
    </motion.div>
  );
};

export default TopDashboard;
