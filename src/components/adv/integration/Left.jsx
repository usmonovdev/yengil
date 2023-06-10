import React, { useRef } from "react";
import { H1, Paragraph } from "../../../ui/typography";
import { Box } from "@mui/material";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const Left = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "50%" },
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        textAlign: {xs: "center", md: "left"}
      }}
      ref={ref}
    >
      <H1>{t("integration-title")}</H1>
      <Paragraph>
        {t("integration-info")}
      </Paragraph>
    </Box>
  );
};

export default Left;
