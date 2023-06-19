import { Box, Button, Modal, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { studentsInfoTables } from "../../../store/themeSlice";
import { H3, Paragraph } from "../../../ui/typography";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useTheme } from "@emotion/react";

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

function ChildModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();

  return (
    <Fragment>
      <Button onClick={handleOpen} color="error" variant="contained">
        Delete
      </Button>
      <Modal
        open={open}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
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
            <h2 id="child-modal-title">O'chirish</h2>
            <p id="child-modal-description">
              Rostan ham bu o'quvchini o'chirmoqchimisiz
            </p>
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
            >
              <Button
                onClick={handleClose}
                style={{
                  background: theme.palette.custom.newStudentWhite,
                  color: "black",
                }}
              >
                Canel
              </Button>
              <Button color="error" variant="contained">
                Delete
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Modal>
    </Fragment>
  );
}

const StudentsInfo = () => {
  const dispatch = useDispatch();
  const { studentsInfo } = useSelector((state) => state);
  const theme = useTheme();

  return (
    <div>
      <Modal
        open={studentsInfo}
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
                marginTop: "10px",
                gap: "10px",
              }}
            >
              <Button
                onClick={() => dispatch(studentsInfoTables())}
                style={{
                  background: theme.palette.custom.newStudentWhite,
                  color: "black",
                }}
              >
                Canel
              </Button>
              <ChildModal />
            </Box>
          </Box>
        </motion.div>
      </Modal>
    </div>
  );
};

export default StudentsInfo;