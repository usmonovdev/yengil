import { Button, Container } from "@mui/material";
import React, { useRef, useState } from "react";
import { Data } from "../../localData/data";
import buttonLeft from "../../assets/icons/buttonLeft.png";
import buttonRight from "../../assets/icons/buttonRight.png";
import { H2, Paragraph } from "../../ui/typography";
import "./Comment.scss";
import { useInView } from "framer-motion";

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
        color="white"
        className="Buttoncomment ButtoncommentRight"
        sx={{
          borderRadius: "50%",
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
        ref={ref}
        onClick={handlesubtract}
      >
        <img src={buttonRight} style={{ width: "26px" }} />
      </Button>
      {Data.map((data) => {
        return (
          <div className={`${index === data.id ? "active" : "noactive"} card`}>
            <img src={data.image} />
            <H2>
              {data.name} <Paragraph>{data.jobs}</Paragraph>
            </H2>
            <Paragraph>{data.title}</Paragraph>
          </div>
        );
      })}
      <Button
        variant="contained"
        color="white"
        className="Buttoncomment ButtoncommentLeft"
        sx={{
          borderRadius: "56%",
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
        onClick={handleAdd}
        ref={ref}
      >
        <img src={buttonLeft} />
      </Button>
    </Container>
  );
};

export default Comment;
