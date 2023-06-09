import { Button, Container } from "@mui/material";
import React, { useRef, useState } from "react";
import { Data } from "../../localData/data";
import arrow from "../../assets/icons/arrow-right.png";
import { H2, Paragraph } from "../../ui/typography";
import { useInView } from "framer-motion";
import "./Comment.scss";
import styled from "@emotion/styled";

const StyledImgBox = styled("div")(({ theme }) => ({
  width: "100px",
  height: "100px",
  background: theme.palette.white.main
}))

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

  const handlesubtract = () => {
    if (index + 1 < Data.length) {
      setIndex(Data.length);
    } else {
      setIndex(index - 1);
    }
  };
  return (
    <Container
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
      <Button
        variant="contained"
        color="blue"
        className="Buttoncomment"
        sx={{ borderRadius: "50%", transform: "rotateY(180deg)" }}
        onClick={handlesubtract}
      >
        <img src={arrow} style={{width: "26px"}}/>
      </Button>
      {Data.map((data) => {
        return (
          <div className={`${index === data.id ? "active" : "noactive"} card`}>
            <div className="img-box">
            <img width="40px" src={data.image} />
            </div>
            <H2>
              {data.name} <Paragraph>{data.jobs}</Paragraph>
            </H2>
            <Paragraph>{data.title}</Paragraph>
          </div>
        );
      })}
      <Button
        variant="contained"
        color="blue"
        className="Buttoncomment"
        sx={{ borderRadius: "56%" }}
        onClick={handleAdd}
        ref={ref}
      >
        <img width="40px" src={arrow} />
      </Button>
    </Container>
  );
};

export default Comment;
