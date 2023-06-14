import React from "react";
import { Div, Divs, Img, Nav } from "./NewStyled";
import { H3, Paragraph, Span } from "../../../ui/typography";
import arrow from "../../../assets/icons/arrow-right.png";
import { useTheme } from "@emotion/react";

const NewStudents = () => {
  const theme = useTheme()

  return (
    <Div>
      <Divs>
        <Nav></Nav>
        <Div style={{ width: "80%", height: "4vh", marginLeft: "30px" }}>
          <H3 style={{ color: theme.palette.custom.whitesmoke }}>So’rov yuborganlar</H3>
          <H3 style={{ color: theme.palette.custom.whitesmoke }}>Jami - 4</H3>
        </Div>
        <Div style={{ width: "80%", height: "7vh", marginLeft: "30px" }}>
          <div>
            <H3 style={{ color: theme.palette.custom.whitesmoke }}>Turg’unboev Samandar</H3>
            <Span style={{ color: theme.palette.custom.whitesmoke }}>+ 998 90 000 00 00  |</Span>
            <Span style={{ paddingLeft: "5px", color: theme.palette.custom.whitesmoke }}>Ingliz tili  |</Span>
            <Span style={{ paddingLeft: "5px", color: theme.palette.custom.whitesmoke }}>15:09</Span>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Img src={arrow} />
            <Img src={arrow} style={{ background: "#039BE5" }} />
          </div>
        </Div>
        <Div style={{ width: "80%", height: "7vh", marginLeft: "30px" }}>
          <div>
            <H3 style={{ color: theme.palette.custom.whitesmoke }}>Turg’unboev Samandar</H3>
            <Span style={{ color: theme.palette.custom.whitesmoke }}>+ 998 90 000 00 00  |</Span>
            <Span style={{ paddingLeft: "5px", color: theme.palette.custom.whitesmoke }}>Ingliz tili  |</Span>
            <Span style={{ paddingLeft: "5px", color: theme.palette.custom.whitesmoke }}>15:09</Span>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Img src={arrow} />
            <Img src={arrow} style={{ background: "#039BE5" }} />
          </div>
        </Div>
        <Div style={{ width: "80%", height: "7vh", marginLeft: "30px" }}>
          <div>
            <H3 style={{ color: theme.palette.custom.whitesmoke }}>Turg’unboev Samandar</H3>
            <Span style={{ color: theme.palette.custom.whitesmoke }}>+ 998 90 000 00 00  |</Span>
            <Span style={{ paddingLeft: "5px", color: theme.palette.custom.whitesmoke }}>Ingliz tili  |</Span>
            <Span style={{ paddingLeft: "5px", color: theme.palette.custom.whitesmoke }}>15:09</Span>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Img src={arrow} />
            <Img src={arrow} style={{ background: "#039BE5" }} />
          </div>
        </Div>
        <Div style={{ width: "80%", height: "7vh", marginLeft: "30px" }}>
          <div>
            <H3 style={{ color: theme.palette.custom.whitesmoke }}>Turg’unboev Samandar</H3>
            <Span style={{ color: theme.palette.custom.whitesmoke }}>+ 998 90 000 00 00  |</Span>
            <Span style={{ paddingLeft: "5px", color: theme.palette.custom.whitesmoke }}>Ingliz tili  |</Span>
            <Span style={{ paddingLeft: "5px", color: theme.palette.custom.whitesmoke }}>15:09</Span>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Img src={arrow} />
            <Img src={arrow} style={{ background: "#039BE5" }} />
          </div>
        </Div>
      </Divs>
      <Divs>
        <Nav style={{ background: "#212E48" }}></Nav>
        <Div style={{ width: "80%", height: "4vh", marginLeft: "30px" }}>
          <H3 style={{ color: theme.palette.custom.whitesmoke }}>Kutilmoqda</H3>
          <H3 style={{ color: theme.palette.custom.whitesmoke }}>Jami - 3</H3>
        </Div>
        <Div style={{ width: "80%", height: "7vh", marginLeft: "30px" }}>
          <div>
            <H3 style={{ color: theme.palette.custom.whitesmoke }}>Abduqayumov Abror</H3>
            <Span style={{ color: theme.palette.custom.whitesmoke }}>+ 998 98 725 07 15  |</Span>
            <Span style={{ paddingLeft: "5px", color: theme.palette.custom.whitesmoke }}>Ingliz tili  |</Span>
            <Span style={{ paddingLeft: "5px", color: theme.palette.custom.whitesmoke }}>2023.06.13</Span>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Img src={arrow} />
            <Img src={arrow} style={{ background: "#039BE5" }} />
          </div>
        </Div>
        <Div style={{ width: "80%", height: "7vh", marginLeft: "30px" }}>
          <div>
            <H3 style={{ color: theme.palette.custom.whitesmoke }}>Abduqayumov Abror</H3>
            <Span style={{ color: theme.palette.custom.whitesmoke }}>+ 998 98 725 07 15  |</Span>
            <Span style={{ paddingLeft: "5px", color: theme.palette.custom.whitesmoke }}>Ingliz tili  |</Span>
            <Span style={{ paddingLeft: "5px", color: theme.palette.custom.whitesmoke }}>2023.06.13</Span>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Img src={arrow} />
            <Img src={arrow} style={{ background: "#039BE5" }} />
          </div>
        </Div>
        <Div style={{ width: "80%", height: "7vh", marginLeft: "30px" }}>
          <div>
            <H3 style={{ color: theme.palette.custom.whitesmoke }}>Abduqayumov Abror</H3>
            <Span style={{ color: theme.palette.custom.whitesmoke }}>+ 998 98 725 07 15  |</Span>
            <Span style={{ paddingLeft: "5px", color: theme.palette.custom.whitesmoke }}>Ingliz tili  |</Span>
            <Span style={{ paddingLeft: "5px", color: theme.palette.custom.whitesmoke }}>2023.06.13</Span>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Img src={arrow} />
            <Img src={arrow} style={{ background: "#039BE5" }} />
          </div>
        </Div>
      </Divs>
      <Divs>
        <Nav style={{ background: "#039BE5" }}></Nav>
        <Div style={{ width: "80%", height: "4vh", marginLeft: "30px" }}>
          <H3 style={{ color: theme.palette.custom.whitesmoke }}>Tayyor</H3>
          <H3 style={{ color: theme.palette.custom.whitesmoke }}>Jami - 1</H3>
        </Div>
        <Div style={{ width: "80%", height: "7vh", marginLeft: "30px" }}>
          <div>
            <H3 style={{ color: theme.palette.custom.whitesmoke }}>Eshmatov Shermat</H3>
            <Span style={{ color: theme.palette.custom.whitesmoke }}>+ 998 90 000 00 01  |</Span>
            <Span style={{ paddingLeft: "5px", color: theme.palette.custom.whitesmoke }}>Ingliz tili  |</Span>
            <Span style={{ paddingLeft: "5px", color: theme.palette.custom.whitesmoke }}>2023.06.13</Span>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Img src={arrow} />
            <Img src={arrow} style={{ background: "#039BE5" }} />
          </div>  
        </Div>
      </Divs>
    </Div>
  );
};

export default NewStudents;
