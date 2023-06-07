import React from "react";
import "./Error.scss";
import { H1, H2, H3, StyledLink } from "../../ui/typography";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Error = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", delay: 0.4 }}
        className="Error"
      >
        <H1>404</H1>
        <H2>{t("Error-404")}</H2>
        <StyledLink to="/">
          <Button variant="contained" color="white">
            {t("Back-to-home")}
          </Button>
        </StyledLink>
      </motion.div>
    </>
  );
};

export default Error;
