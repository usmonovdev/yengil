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
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
      ref={ref}
    >
      <H1>Website integration</H1>
      <Paragraph>
        Integrate your web site with Brizo CRM and receive leads directly into
        the system in real time. With the simple web form design tool in just a
        few minutes, you'll be able to create any form you need, place it on
        your web site and start automatically collect leads in Brizo CRM.
      </Paragraph>
    </Box>
  );
};

export default Left;
