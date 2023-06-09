import React, { useRef } from "react";
import Financial from "../../assets/icons/Financial.png";
import Analytics from "../../assets/icons/Analytics.png";
import sales from "../../assets/icons/sotish.png";
import darkSales from "../../assets/dark/coins.png"
import darkFinancial from "../../assets/dark/bank.png"
import darkAnalytics from "../../assets/dark/chat-arrow-grow.png"
import { H3 } from "../../ui/typography";
import { useTranslation } from "react-i18next";
import { useInView } from "framer-motion";
import "./section.scss";
import { useTheme } from "@mui/material";

const Section = () => {
  const theme = useTheme()
  // console.log(theme.palette.mode);
  if(theme.palette.mode == "light"){
    console.log("abrordan salom")
  }else{
    console.log(false)
  }
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const { t } = useTranslation();
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
    >
      <div className="section-box">
        <div className="box">
          <img src={theme.palette.mode == "light" ? sales : darkSales} />
          <H3>{t("section-selling")}</H3>
        </div>
        <div className="box">
          <img src={theme.palette.mode == "light" ? Financial : darkFinancial} />
          <H3>{t("section-financial")}</H3>
        </div>
        <div className="box">
          <img src={theme.palette.mode == "light" ? Analytics : darkAnalytics} />
          <H3>{t("section-analytics")}</H3>
        </div>
      </div>
    </div>
  );
};

export default Section;
