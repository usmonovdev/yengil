import React from "react";
import TopDashboard from "../topDashboard/TopDashboard";
import { Box, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import FoydaRecharts from "../../recharts/FoydaRecharts";
import { H3, Paragraph, Span } from "../../ui/typography";
import { useTheme } from "@emotion/react";
import TolovRechart from "../../recharts/TolovRechart";
import OquvchilarReachart from "../../recharts/OquvchularReachart";
import { Div, Divs, Img } from "./HomeStyled";
import { styled } from "@mui/system";
import undov from "../../assets/icons/undov.png";
import darkUndov from "../../assets/dark/undov-white.png";
import "./home.scss";

const Home = () => {
  const { sidebar } = useSelector((state) => state);
  const data = new Date();
  const date = data.getDate();
  const month = data.getMonth();
  const year = data.getUTCFullYear();
  const theme = useTheme();
  console.log(sidebar);

  const StatBox = styled("div")(({ theme }) => ({
    width: `${sidebar ? "calc(100% - 110px)" : "100%" }`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "25px",
  }));

  return (
    <Box sx={{ width: "100%" }}>
      <TopDashboard
        header={"Asosiy"}
        title={"Statistika va Yangi o'quvchilar"}
      />
      <Box
        sx={{
          position: "relative",
          top: "100px",
          left: `${sidebar ? "90px" : "0"}`,
          padding: "15px"
        }}
      >
        <StatBox>
          <Divs>
            <Div>
              <H3
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                FOYDA
                <Tooltip
                  disableFocusListener
                  disableTouchListener
                  title="Oy davomida qilingan foyda summasi"
                >
                  <Img src={theme.palette.mode == "dark" ? darkUndov : undov} />
                </Tooltip>
              </H3>
              <Span>
                {date}.{month + 1}.{year}
              </Span>
            </Div>
            <Paragraph
              style={{
                background: theme.palette.custom.lightGray,
                width: "256px",
                height: "30px",
                lineHeight: "30px",
                paddingLeft: "10px",
                borderRadius: "5px",
              }}
            >
              Umumuiy foyda: "20.000.000"
            </Paragraph>
            <Span
              style={{
                background: theme.palette.custom.lightGray,
                width: "fit-content",
                height: "30px",
                padding: "10px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              O'tgan oyga qaraganda 5% ko'proq foyda
            </Span>
            <FoydaRecharts />
            <Span
              style={{
                background: theme.palette.custom.lightGray,
                width: "165px",
                height: "19px",
                lineHeight: "19px",
                display: "flex",
                alignItems: "center",
                borderRadius: "5px",
                gap: "5px",
                paddingLeft: "10px",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "20px",
                  background: "#039BE5",
                  borderRadius: "5px",
                }}
              ></div>
              To'langan summa
            </Span>
            <Span style={{ textAlign: "end", marginTop: "4%" }}>
              Oy davomida qilingan foyda summasi
            </Span>
          </Divs>
          <Divs>
            <Div>
              <H3
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                To’lovlar
                <Tooltip
                  disableFocusListener
                  disableTouchListener
                  title="O’quvchilar oy davomida to’lagan summa grafigi"
                >
                  <Img src={theme.palette.mode == "dark" ? darkUndov : undov} />
                </Tooltip>
              </H3>
              <Span>
                {date}.{month + 1}.{year}
              </Span>
            </Div>
            <Span
              style={{
                background: theme.palette.custom.lightGray,
                width: "256px",
                height: "30px",
                lineHeight: "30px",
                paddingLeft: "10px",
                borderRadius: "5px",
              }}
            >
              Umumuiy foyda: "20.000.000"
            </Span>
            <TolovRechart />
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
              <Span
                style={{
                  background: theme.palette.custom.lightGray,
                  width: "165px",
                  height: "19px",
                  lineHeight: "19px",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "5px",
                  gap: "5px",
                  paddingLeft: "10px",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "20px",
                    background: "#039BE5",
                    borderRadius: "5px",
                  }}
                ></div>
                To'langan summa
              </Span>
              <Span
                style={{
                  background: theme.palette.custom.lightGray,
                  width: "165px",
                  height: "19px",
                  lineHeight: "19px",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "5px",
                  gap: "5px",
                  paddingLeft: "10px",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "20px",
                    background: "#039BE5",
                    borderRadius: "5px",
                  }}
                ></div>
                To'langan summa
              </Span>
            </div>
            <Span
              style={{
                background: theme.palette.custom.lightGray,
                width: "250px",
                height: "19px",
                lineHeight: "19px",
                display: "flex",
                alignItems: "center",
                borderRadius: "5px",
                gap: "5px",
                paddingLeft: "10px",
              }}
            >
              Chap-raqam: Summa miqdori
            </Span>
            <Span
              style={{
                background: theme.palette.custom.lightGray,
                width: "250px",
                height: "19px",
                lineHeight: "19px",
                display: "flex",
                alignItems: "center",
                borderRadius: "5px",
                gap: "5px",
                paddingLeft: "10px",
              }}
            >
              Pastki-raqam: Summa miqdori
            </Span>
            <Span style={{ textAlign: "end" }}>
              O’quvchilar oy davomida to’lagan summa grafigi
            </Span>
          </Divs>
          <Divs>
            <Div>
            <H3
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                Yangi o’quvchilar
                <Tooltip
                  disableFocusListener
                  disableTouchListener
                  title="Yangi o’quvchilarning kurslarga qo’shilish grafigi"
                >
                  <Img  src={theme.palette.mode == "dark" ? darkUndov : undov} />
                </Tooltip>
              </H3>
              <Span>
                {date}.{month + 1}.{year}
              </Span>
            </Div>
            <Span
              style={{
                background: theme.palette.custom.lightGray,
                width: "256px",
                height: "30px",
                lineHeight: "30px",
                paddingLeft: "10px",
                borderRadius: "5px",
              }}
            >
              Umumiy soni: 221ta
            </Span>
            <OquvchilarReachart />
            <Span
              style={{
                background: theme.palette.custom.lightGray,
                width: "165px",
                height: "19px",
                lineHeight: "19px",
                display: "flex",
                alignItems: "center",
                borderRadius: "5px",
                gap: "5px",
                paddingLeft: "10px",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "20px",
                  background: "#039BE5",
                  borderRadius: "5px",
                }}
              ></div>
              To'langan summa
            </Span>
            <Span style={{ textAlign: "end", marginTop: "5%" }}>
              Yangi o’quvchilarning kurslarga qo’shilish grafigi
            </Span>
          </Divs>
        </StatBox>
      </Box>
    </Box>
  );
};

export default Home;
