import React from "react";
import { Div, Divs, Img } from "./NewStyled";
import { H3, Paragraph, Span } from "../../../ui/typography";
import arrow from "../../../assets/icons/arrow-right.png";

const NewStudents = () => {
  return (
    <Div>
      <Divs>
        <Div style={{ width: "80%", height: "25%", marginLeft: "30px" }}>
          <H3>So’rov yuborganlar</H3>
          <H3>Jami - 4</H3>
        </Div>
        <Div style={{ width: "80%", height: "25%", marginLeft: "30px" }}>
          <div>
            <H3>Turg’unboev Samandar</H3>
            <Span>+ 998 90 000 00 00</Span> |
            <Span style={{ paddingLeft: "5px" }}>Ingliz tili</Span> |
            <Span style={{ paddingLeft: "5px" }}>15:09</Span>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Img src={arrow} />
            <Img src={arrow} style={{ background: "#039BE5" }} />
          </div>
        </Div>
        <Div style={{ width: "80%", height: "25%", marginLeft: "30px" }}>
          <div>
            <H3>Turg’unboev Samandar</H3>
            <Span>+ 998 90 000 00 00</Span> |
            <Span style={{ paddingLeft: "5px" }}>Ingliz tili</Span> |
            <Span style={{ paddingLeft: "5px" }}>15:09</Span>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Img src={arrow} />
            <Img src={arrow} style={{ background: "#039BE5" }} />
          </div>
        </Div>
        <Div></Div>
        <Div></Div>
      </Divs>
      <Divs>dasd</Divs>
      <Divs>asdas</Divs>
    </Div>
  );
};

export default NewStudents;
