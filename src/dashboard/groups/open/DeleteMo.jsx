import { Box, Button, Modal, useTheme } from "@mui/material";
import { motion } from "framer-motion";

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

const DeleteMo = ({ modal, setModal }) => {
  const theme = useTheme();

  return (
    <>
      <Modal
        open={modal}
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
              Rostan ham bu o'quvchini Guruhdan chiqarmoqchimisiz?
            </p>
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
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
              <Button color="error" variant="contained">
                Delete
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Modal>
    </>
  );
};

export default DeleteMo;
