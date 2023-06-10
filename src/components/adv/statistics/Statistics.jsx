import React, { useRef } from "react";
import leftImg from "../../../assets/icons/crm4.png";
import { motion, useInView } from "framer-motion";
import { H1, Paragraph } from "../../../ui/typography";
import { Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import financialStatisticsDark from "../../../assets/dark/financial-statistics.png"
import financialStatisticsLight from "../../../assets/icons/financial-statistics.png"

const Statistics = () => {
  const { t } = useTranslation();
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const theme = useTheme()
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" }, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img width="40%" src={theme.palette.mode == "dark" ? financialStatisticsDark : financialStatisticsLight} alt="financial statistics" />
        </Box>
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <H1>{t("heading")}</H1>
          <Paragraph>{t("title1")}</Paragraph>
        </Box>
      </Box>
    </div>
  );
};

export default Statistics;
