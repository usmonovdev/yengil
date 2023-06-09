import React, { useRef } from "react";
import { H1, Paragraph } from "../../../ui/typography";
import { Box } from "@mui/system";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const Left = () => {
  const ref = useRef();
  const { t } = useTranslation()
  const isInView = useInView(ref, { once: true });
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "50%" },
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
      ref={ref}
    >
      <H1>{t("import-title")}</H1>
      <Paragraph>
        {t('import-info')}
      </Paragraph>
    </Box>
  );
};

export default Left;
