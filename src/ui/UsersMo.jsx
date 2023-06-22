import React from "react";
import styled from "@emotion/styled";
import { Box, Button, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useTheme } from "@emotion/react";
import { H3, Paragraph } from "./typography";
import { studentsInfoTables } from "../store/themeSlice";
import DeleteMo from "./DeleteMo";

const style = {
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
  width: "fit-content",
  padding: "4px",
  borderRadius: "5px",
}));

const UsersMo = ({
  name,
  group,
  price,
  payment,
  id,
  modal,
  setModal,
  salary,
}) => {
  const theme = useTheme();
  return (
    <div>
      <Modal
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
          <Box sx={style}>
            <Paragraph>People info</Paragraph>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <StyledH3>Name: Azizbek</StyledH3>
              <StyledH3>Tel: +998 90 000 00 00</StyledH3>
              <StyledH3>Qarzdorlik vaqti: May</StyledH3>
              {group && <StyledH3>Group: Matematika</StyledH3>}
              {salary && <StyledH3>Oylik: 50%</StyledH3>}
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
                onClick={() => setModal(!modal)}
                style={{
                  background: theme.palette.custom.newStudentWhite,
                  color: "black",
                }}
              >
                Canel
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