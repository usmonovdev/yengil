import React from "react";
import { Box, Button, Modal, styled } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { H3, Paragraph } from "./typography";
import Keywords from "./Keywords";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "70%", md: "500px" },
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const StyledP = styled(Paragraph)(({ theme }) => ({
  width: "100%",
  height: "fit-content",
  textAlign: "left",
  background: theme.palette.action.hover,
  padding: "10px",
  borderRadius: "5px",
}));

const Keyword = ({ modal, setModal }) => {
  const { t } = useTranslation();
  return (
    <Modal
      disableScrollLock
      sx={{ zIndex: "1000" }}
      open={modal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
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
          <H3>Keywords</H3>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Box>
            <StyledP>(STUDENT) - Talabaning ismi</StyledP>
            <ContentCopyIcon />
            </Box>
            <StyledP>(GROUP) - Guruh nomi</StyledP>
            <StyledP>(TEACHER) - O’qituvchining ismi</StyledP>
            <StyledP>(DAYS) - Dars kunlari</StyledP>
            <StyledP>(HOURS) - Darsning boshlanish va tugash vaqti</StyledP>
            <StyledP>(SUM) - To’lov miqdori</StyledP>
            <StyledP>(MARKAZ) - O’quv markaz</StyledP>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              variant="contained"
              onClick={() => setModal(!modal)}
              color="alsoWhite"
            >
              {t("addStudentsClose")}
            </Button>
          </Box>
          <Keywords />
        </Box>
      </motion.div>
    </Modal>
  );
};

export default Keyword;
