import { Button, Container } from "@mui/material";
import React, { useState } from "react";
import { Data } from "../../localData/data";
import arrow from "../../assets/icons/arrow-right.png";
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
        color="blue"
        className="Buttoncomment"
        sx={{ borderRadius: "50%" }}
        onClick={handlesubtract}
      >
        <img src={arrow} width="40px"style={{ transform: "rotateY(180deg)"  }}/>
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
      >
        <img width="40px" src={arrow} />
      </Button>
    </Container>
  );
};

export default Comment;
