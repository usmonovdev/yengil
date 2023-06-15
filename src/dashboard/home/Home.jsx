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
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const { sidebar } = useSelector((state) => state);
  const data = new Date();
  const date = data.getDate();
  const month = data.getMonth();
  const year = data.getUTCFullYear();
  const theme = useTheme();

  const StatBox = styled("div")(({ theme }) => ({
    width:"100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "25px",
  }));

  return (
    <Box sx={{ width: "100%" }}>
      <TopDashboard
        header={t("dashboardMain")}
        title={t("dashboardMainTitle")}
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
          <motion.div
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0,  }}
            transition={{ duration: 1, type: "spring", delay: 0.4 }}
          >
            <Divs>
              <Div>
                <H3
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  {t("dashboardMainProfit")}
                  <Tooltip
                    disableFocusListener
                    disableTouchListener
                    title={t("dashboardMainProfitDanger")}
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
                  width: "fit-content",
                  height: "30px",
                  borderRadius: "5px",
                  fontSize: {xs:"10px !important", md:"16px"}
                }}
              >
                {t("dashboardMainGeneralBenefit")}: "20.000.000"
              </Paragraph>
              <Span
                style={{
                  background: theme.palette.custom.lightGray,
                  width: {xs:"100%",md:"fit-content"},
                  fontSize: {xs:"10px !important", sm:"16px"},
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "5px",
                }}
              >
                {t("dashboardMainProfitCompared")}
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
                {t("dashboardMainPaid")}
              </Span>
              <Span style={{ textAlign: "end", marginTop: "4%" }}>
                {t("dashboardMainAmountProfit")}
              </Span>
            </Divs>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1.5, type: "spring", delay: 0.4 }}
          >

            <Divs>
              <Div>
                <H3
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  {t("dashboardMainPayments")}
                  <Tooltip
                    disableFocusListener
                    disableTouchListener
                    title={t("dashboardMainPaymentsDanger")}
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
                {t("dashboardMainPaymentsGeneralBenefit")}: "20.000.000"
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
                  {t("dashboardMainPaymentsAmountPaid")}
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
                  {t("dashboardMainPaymentsAmountPaid")}
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
                {t("dashboardMainPaymentsLeftNumber")}: {t("dashboardMainPaymentsTitle")}
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
                {t("dashboardMainPaymentsSubNumber")}: {t("dashboardMainPaymentsTitle")}
              </Span>
              <Span style={{ textAlign: "end" }}>
                {t("dashboardMainPaymentsAmount")}
              </Span>
            </Divs>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 10}}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 2, type: "spring", delay: 0.4 }}
          >

            <Divs>
              <Div>
                <H3
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  {t("dashboardMainNewStudents")}
                  <Tooltip
                    disableFocusListener
                    disableTouchListener
                    title={t("dashboardmainNewStudentsDanger")}
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
                {t("dashboardMainNewStudentsTotalNumber")}: 221ta
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
                {t("dashboardMainNewStudentsAmountPaid")}
              </Span>
              <Span style={{ textAlign: "end", marginTop: "5%" }}>
                {t("dashboardMainNewStudentsAmount")}
              </Span>
            </Divs>
          </motion.div>
        </StatBox>
      </Box>
    </Box>
  );
};

export default Home;
