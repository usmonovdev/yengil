import React, { useRef } from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Data } from "../../localData/data";
import { H2, Paragraph } from "../../ui/typography";
import { useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Comment.scss";
import "swiper/css";
import "swiper/css/pagination";

const StyledImgBox = styled("div")(({ theme }) => ({
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: theme.palette.blue.main,
}));

const Comment = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "60px",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
      ref={ref}
    >
      <Swiper className="mySwiper">
        {Data.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <StyledImgBox>
                <img src={data.image} width="60%" />
              </StyledImgBox>
              <H2>
                {data.name} <Paragraph>{data.jobs}</Paragraph>
              </H2>
              <Paragraph>{data.title}</Paragraph>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Comment;
