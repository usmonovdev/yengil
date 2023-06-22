import React from "react";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { Img } from "../../students/tablestudents/TableStyled";
import editD from "../../../assets/dark/edit.png";
import delD from "../../../assets/dark/delete.png";
import { motion } from "framer-motion";
import { useTheme } from "@emotion/react";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "70%", md: "400px" },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  border: "none",
  borderRadius: "5px",
  gap: "15px",
};

const TableStActions = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ zIndex: "10000" }}
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
            <Typography id="modal-modal-title" variant="h6" component="h2">
              O'chirish
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Rostan ham siz bu O'quvchini o'chirmoqchimisiz?
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: " 10px",
              }}
            >
              <Button
                variant="contained"
                color="blue"
                sx={{
                  background: theme.palette.custom.newStudentWhite,
                  color: "black",
                }}
                onClick={handleClose}
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
      <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
        <IconButton>
          <Img src={editD} />
        </IconButton>
        <IconButton onClick={handleOpen}>
          <Img src={delD} />
        </IconButton>
      </Box>
    </>
  );
};

export default TableStActions;
