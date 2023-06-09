import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import { Data } from "../../localData/data";
import { H2, Paragraph } from "../../ui/typography";
import { useInView } from "framer-motion";
import "./Comment.scss";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

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
  const [index, setIndex] = useState(1);
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  console.log(Data.length);
  console.log(index, "index");

  const handleAdd = () => {
    if (index >= Data.length) {
      setIndex(1);
    } else {
      setIndex(index + 1);
    }
  };

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
      <Swiper
        className="mySwiper"
      >
        {Data.map((data) => {
          return (
            <SwiperSlide
              key={data.id}
            >
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
    // <>
    //   <Swiper
    //     slidesPerView={4}
    //     centeredSlides={true}
    //     spaceBetween={30}
    //     grabCursor={true}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     modules={[Pagination]}
    //     className="mySwiper"
    //   >
    //     <SwiperSlide>Slide 1</SwiperSlide>
    //     <SwiperSlide>Slide 2</SwiperSlide>
    //     <SwiperSlide>Slide 3</SwiperSlide>
    //     <SwiperSlide>Slide 4</SwiperSlide>
    //     <SwiperSlide>Slide 5</SwiperSlide>
    //     <SwiperSlide>Slide 6</SwiperSlide>
    //     <SwiperSlide>Slide 7</SwiperSlide>
    //     <SwiperSlide>Slide 8</SwiperSlide>
    //     <SwiperSlide>Slide 9</SwiperSlide>
    //   </Swiper>
    // </>
  );
};

export default Comment;
