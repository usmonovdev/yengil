import React from "react";
import { Container, useTheme } from "@mui/material";
import { H3, Span, StyledAncor } from "../../ui/typography";
import telegramicon from "../../assets/icons/telegramicon.png";
import instagramicon from "../../assets/icons/instagramicon.png";
import { useTranslation } from "react-i18next";
import { Div, FooterContainer, Img, Styledfooter } from "./FooterStyle.js";

const Footer = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <Styledfooter>
        <Container
          className="Container"
          sx={{
            minHeight: "100px",
            marginTop: "80px",
            display: "flex",
            alignItems: "start",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            gap: "30px",
            padding: "20px",
          }}
        >
          <Div>
            <H3 style={{ color: "#f5f5f5" }}>{t("footer-title")}</H3>
            <Span style={{ cursor: "pointer", color: "#f5f5f5" }}>
              +998 78 777 11 00
            </Span>
            <Span style={{ cursor: "pointer", color: "#f5f5f5" }}>
              {t("footer-title-city")}
            </Span>
          </Div>
          <Div>
            <H3 style={{ color: "#f5f5f5" }}>{t("footer-page")}</H3>
            <Span style={{ cursor: "pointer", color: "#f5f5f5" }}>
              {t("footer-page-tab1")}
            </Span>
            <Span style={{ cursor: "pointer", color: "#f5f5f5" }}>
              {t("footer-page-tab2")}
            </Span>
            <Span style={{ cursor: "pointer", color: "#f5f5f5" }}>
              {t("footer-page-tab3")}
            </Span>
          </Div>
          <Div>
            <H3 style={{ color: "#f5f5f5" }}>{t("footer-support")}</H3>
            <Span style={{ cursor: "pointer", color: "#f5f5f5" }}>
              {t("footer-conditions")}
            </Span>
            <Span style={{ cursor: "pointer", color: "#f5f5f5" }}>
              {t("footer-confidentiality")}
            </Span>
            <Span style={{ cursor: "pointer", color: "#f5f5f5" }}>
              {t("footer-map")}
            </Span>
          </Div>
          <Div>
            <H3 style={{ color: "#f5f5f5" }}>{t("footer-social")}</H3>
            <StyledAncor href="https://t.me/+50UxzsayyoxjY2Ey">
              <Span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  cursor: "pointer",
                  color: "#f5f5f5",
                }}
              >
                <Img src={telegramicon} />
                Telegram
              </Span>
            </StyledAncor>
            <StyledAncor href="https://instagram.com/crm.app?igshid=MmJiY2I4NDBkZg==">
              <Span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                  color: "#f5f5f5",
                }}
              >
                <Img src={instagramicon} /> instagram
              </Span>
            </StyledAncor>
          </Div>
        </Container>
      </Styledfooter>
      <FooterContainer>
        <Span style={{ color: "#f5f5f5" }}>@ 2023 {t("footer-title")}</Span>
      </FooterContainer>
    </>
  );
};

export default Footer;
