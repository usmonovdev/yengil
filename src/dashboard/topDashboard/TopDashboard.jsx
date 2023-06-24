import { Box, IconButton, styled, useTheme } from "@mui/material";
import React, { useState } from "react";
import { H1, Paragraph } from "../../ui/typography";
import chatArrow from "../../assets/icons/double-arrow.png";
import darkChatArrow from "../../assets/dark/double-arrow.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/themeSlice";
import { motion } from "framer-motion";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

const Image = styled("img")(({ theme }) => ({
  width: "20px",
}));

const TopDashboard = ({
  header,
  title,
  prew,
  next,
  prewDisabled = false,
  nextDisabled = false,
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.sidebar);

  const HeaderBox = styled("div")(({ theme }) => ({
    background: theme.palette.custom.headerOpacity,
    width: `${state ? "calc(100% - 80px)" : "100%"}`,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "fixed",
    gap: "20px",
    right: "0",
    backdropFilter: "blur(5px)",
    zIndex: "1000",
  }));

  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, type: "spring", delay: 0.4 }}
    >
      <HeaderBox>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
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
        </Box>
        <Box sx={{ marginRight: "10px" }}>
          <IconButton
            disabled={prewDisabled}
            sx={{ transform: "rotate(180deg)" }}
            onClick={() => navigate(prew)}
          >
            <NavigateNextIcon />
          </IconButton>
          <IconButton disabled={nextDisabled}>
            <NavigateNextIcon onClick={() => navigate(next)} />
          </IconButton>
        </Box>
      </HeaderBox>
    </motion.div>
  );
};

export default TopDashboard;
