import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { studentsInfoTables } from "../../../store/themeSlice";
import { H3 } from "../../../ui/typography";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "50%", md: "400px" },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  borderRadius: "5px",
  border: "none",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const StyledH3 = styled(H3)(({ theme }) => ({
  background: theme.palette.action.hover,
  width: "fit-content",
  padding: "4px",
  borderRadius: "5px",
}));

const StudentsInfo = () => {
  const theme = useTheme();
  const { studentsInfo } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <Modal
        open={studentsInfo}
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
          <Box sx={style}>
            <Typography>People info</Typography>
            <Box
              sx={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <StyledH3>Name: Usmonov Azizbek</StyledH3>
              <StyledH3>Group: Dasturlash</StyledH3>
              <StyledH3>Tel: +998 91 166 73 64</StyledH3>
              <StyledH3>Qarzdorlik: -320,000</StyledH3>
              <StyledH3>Qarzdorlik vaqti: May</StyledH3>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "15px",
                marginTop: "20px",
              }}
            >
              <Button
                style={{
                  background: theme.palette.custom.newStudentWhite,
                  color: "black",
                }}
                onClick={() => dispatch(studentsInfoTables())}
              >
                Canel
              </Button>
              <Button variant="contained" color="error">
                Delete
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Modal>
    </div>
  );
};

export default StudentsInfo;
