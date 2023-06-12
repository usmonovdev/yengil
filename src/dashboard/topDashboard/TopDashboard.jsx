import { Box, IconButton, styled } from "@mui/material";
import React, { useState } from "react";
import { H1, Paragraph } from "../../ui/typography";
import chatArrow from "../../assets/icons/double-arrow.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/themeSlice";

const Image = styled("img")(({ theme }) => ({
  width: "20px",
}));

const TopDashboard = ({ header, title }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.sidebar);
  console.log(state);
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
    <>
      <HeaderBox>
        <IconButton
          onClick={() => dispatch(toggleSidebar())}
          variant="text"
          sx={{
            marginLeft: "10px",
            transform: `${state ? "rotate(180deg)" : "rotate(0deg)"}`
          }}
        >
          <Image src={chatArrow} alt="icon" />
        </IconButton>
        <Box>
          <H1>{header}</H1>
          <Paragraph>{title}</Paragraph>
        </Box>
      </HeaderBox>
    </>
  );
};

export default TopDashboard;
