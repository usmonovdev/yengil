import React from "react";
import { Button, Container } from "@mui/material";
import { H1, H3, Paragraph } from "../../ui/typography";
import { motion } from "framer-motion";
import "./footer.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation()
  return (
    <>
      <footer>
        <Container className="Container"
          sx={{
            
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            <H3>{t("footer-title")}</H3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1.5, y: 0 }}
            transition={{ duration: 1, type: "spring", delay: 0.2 }}
          >
            <H3>{t("footer-paragraph")}</H3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, type: "spring", delay: 0.4 }}
          >
            <Button
              variant="contained"
              color="white"
              sx={{
                color: "#fff",
                boxShadow: "0px 15px 50px 0px rgba(0,12,33,0.2)",
                marginTop: "40px",
              }}
            >
              {t("button")}
            </Button>
          </motion.div>
          <Paragraph>{t("button-title")}</Paragraph>
        </Container>
      </footer>
      <footer className="footer2">
        <Container className="footercontainer">
          <Paragraph>{t("footer-conditions")}</Paragraph>
          <Paragraph>{t("footer-confidentiality")}</Paragraph>
          <Paragraph>{t("footer-map")}</Paragraph>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
