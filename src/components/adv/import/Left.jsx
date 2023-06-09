import React, { useRef } from "react";
import { H1, Paragraph } from "../../../ui/typography";
import { Box } from "@mui/system";
import { useInView } from "framer-motion";

const Left = () => {
  const ref = useRef();
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
      <H1>Import and exportQuick</H1>
      <Paragraph>
        and easy data import from MS Excel. Pull transactions, deals, and
        client’s information into Brizo in a few clicks. If needed, you can also
        export data back to Excel to create backup copies, client segmentation,
        specialized reports, charts, and more.
      </Paragraph>
    </Box>
  );
};

export default Left;
