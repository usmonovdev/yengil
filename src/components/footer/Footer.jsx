import React from "react";
import { Box, Button, Container } from "@mui/material";
import { H1, H2, H3, Paragraph, Span, StyledAncor } from "../../ui/typography";
import { motion } from "framer-motion";
import telegramicon from "../../assets/icons/telegramicon.png";
import instagramicon from "../../assets/icons/instagramicon.png";
import "./footer.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className="footer">
        <Container
          className="Container"
          sx={{
            padding: "10px 0",
          }}
        >
          <div>
            <H3>{t("footer-title")}</H3>
            <Span>+998 78 777 11 00</Span>
            <Span>{t("footer-title-city")}</Span>
          </div>
          <div>
            <H2>{t("footer-generelt")}</H2>
            <Span>{t("footer-generelt-tab1")}</Span>
            <Span>{t("footer-generelt-tab2")}</Span>
            <Span>{t("footer-generelt-tab3")}</Span>
          </div>
          <div>
            <H3>{t("footer-support")}</H3>
            <Span>{t("footer-conditions")}</Span>
            <Span>{t("footer-confidentiality")}</Span>
            <Span>{t("footer-map")}</Span>
          </div>
          <div>
            <H3>{t("footer-social")}</H3>
            <StyledAncor href="https://t.me/+50UxzsayyoxjY2Ey">
              <Span
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <img src={telegramicon} />
                Telegram
              </Span>
            </StyledAncor>
            <StyledAncor href="https://instagram.com/crm.app?igshid=MmJiY2I4NDBkZg==">
              <Span
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img src={instagramicon} /> instagram
              </Span>
            </StyledAncor>
          </div>
        </Container>
      </footer>
      <div className="footer-container">
        <Span>@ 2023 {t("footer-title")}</Span>
      </div>
    </>
  );
};

export default Footer;
