import React from "react";
import styled from "@emotion/styled";
import { Box, Button, Modal } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@emotion/react";
import { H3, Paragraph } from "../../../ui/typography";
import DeleteMo from "../../../ui/DeleteMo";
import { useTranslation } from "react-i18next";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "70%", md: "400px" },
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  textAlign: "center",
};

const StyledH3 = styled(H3)(({ theme }) => ({
  background: theme.palette.action.hover,
  width: "100%",
  padding: "4px",
  textAlign: "left",
  borderRadius: "5px",
}));

const UsersMo = ({ modal, setModal }) => {
  const theme = useTheme();
  const {t} = useTranslation()
  return (
    <div>
      <Modal
        disableScrollLock
        open={modal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
            top: "50%",
            left: "50%",
            position: "absolute",
            width: "100%",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            translateX: "-50%",
            translateY: "-50%",
            width: "100%",
          }}
          transition={{ duration: 1, type: "spring", delay: 0.1 }}
        >
          <Box sx={modalStyle}>
            <Paragraph>{t("dashboardMainProfit")}</Paragraph>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <StyledH3>{t("moneyUsed")}: Mirzoqulov Abbos</StyledH3>
              <StyledH3>{t("monneyCostsReason")}: Arenda</StyledH3>
              <StyledH3>{t("moneyHowUsed")}: 3.200.000</StyledH3>
              <StyledH3>{t("groupTablesClock")}: 01.01.2023</StyledH3>
              <StyledH3>{t("groupOpenHour")}: 13:05</StyledH3>
              <StyledH3>{t("gruopOpenPhone")}: +998 90 000 00 00</StyledH3>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px",
                gap: "10px",
              }}
            >
              <Button
                variant="contained"
                onClick={() => setModal(!modal)}
                color="alsoWhite"
              >
                {t("groupOpenCanel")}
              </Button>
              <DeleteMo />
            </Box>
          </Box>
        </motion.div>
      </Modal>
    </div>
  );
};

export default UsersMo;
