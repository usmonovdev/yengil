import { Box } from "@mui/material";
import React, { useRef } from "react";
import { H1, Paragraph } from "../../../ui/typography";
import { useTranslation } from "react-i18next";
import { useInView } from "framer-motion";

const Right = () => {
  const { t } = useTranslation();
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <Box
      ref={ref}
      sx={{
        width: {
          xs: "100%",
          md: "50%",
        },
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <H1>{t("heading")}</H1>
      <Paragraph>{t("title1")}</Paragraph>
    </Box>
  );
};

export default Right;
