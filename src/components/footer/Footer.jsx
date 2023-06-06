import React from "react";
import { Box, Button, Container } from "@mui/material";
import { H1, H2, H3, Paragraph } from "../../ui/typography";
import { motion } from "framer-motion";
import telegramicon from "../../assets/icons/telegramicon.png";
import instagramicon from "../../assets/icons/instagramicon.png";
import "./footer.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className="footer1">
        <Container
          className="Container"
          sx={{
            padding: "10px 0",
          }}
        >
          <div className="info">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "spring" }}
            >
              <H2>{t("footer-title")}</H2>
              <H3>+998 78 777 11 00</H3>
              <H3>{t("footer-title-city")}</H3>
            </motion.div>
          </div>
          <div className="footer-links">
            <H2>{t("footer-generelt")}</H2>
            <H3>{t("footer-generelt-tab1")}</H3>
            <H3>{t("footer-generelt-tab2")}</H3>
            <H3>{t("footer-generelt-tab3")}</H3>
          </div>
          <div className="footer-support">
            <H2>{t("footer-support")}</H2>
            <H3>{t("footer-conditions")}</H3>
            <H3>{t("footer-confidentiality")}</H3>
            <H3>{t("footer-map")}</H3>
          </div>
          <div className="support-social">
            <H2>{t("footer-social")}</H2>
            <Paragraph
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <img src={telegramicon} /> Telegram
            </Paragraph>
            <Paragraph
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <img src={instagramicon} /> instagram
            </Paragraph>
          </div>
        </Container>
      </footer>
      <footer className="footer-container">
          <H3>@ 2023 {t("footer-title")}</H3>
      </footer>
    </>
  );
};

export default Footer;
