import { Button, Container } from "@mui/material";
import React, { useState } from "react";
import { Data } from "../../localData/data";
import buttonLeft from "../../assets/icons/buttonLeft.png";
import buttonRight from "../../assets/icons/buttonRight.png";
import { H2, Paragraph } from "../../ui/typography";
import "./Comment.scss";

const Comment = () => {
  const [index, setIndex] = useState(1);
  console.log(Data.length);
  console.log(index, "index");

  const handleAdd = () => {
    if(index >= Data.length) {
        setIndex(1)
    } else {
        setIndex(index + 1)
    }
  };

  const handlesubtract = () =>{
    if(index + 1 < Data.length) {
        setIndex(Data.length)
    } else {
        setIndex(index - 1)
    }
  }
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "60px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        color="white"
        className="Buttoncomment"
        sx={{ borderRadius: "50%" }}
        onClick={handlesubtract}
      >
        <img src={buttonRight} style={{width: "26px"}}/>
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
        className="Buttoncomment"
        sx={{ borderRadius: "56%" }}
        onClick={handleAdd}
      >
        <img src={buttonLeft} />
      </Button>
    </Container>
  );
};

export default Comment;
