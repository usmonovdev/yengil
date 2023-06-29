import React, { useState } from "react";
import { Box, Button, Chip, Modal, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { H3, Paragraph } from "./typography";
import Keywords from "./Keywords";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "70%", md: "700px" },
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const SendMsg = ({ modal, setModal }) => {
  const { t } = useTranslation();
  const [msg, setMsg] = useState("");
  const [keyword, setKeyword] = useState(false)

  const handleDelete = () => {};
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
          <H3>Send Message</H3>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-multiline-static"
            label={"Message"}
            multiline
            onChange={(e) => setMsg(e.target.value)}
            color="blue"
            rows={5}
            defaultValue={"Assalomu alaykum..."}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <Paragraph>Tanlandi (10):</Paragraph>
            <Chip label="Deletable" onDelete={handleDelete} />
            <Chip label="Deletable" onDelete={handleDelete} />
            <Chip label="Deletable" onDelete={handleDelete} />
            <Chip label="Deletable" onDelete={handleDelete} />
            <Chip label="Deletable" onDelete={handleDelete} />
            <Chip label="Deletable" onDelete={handleDelete} />
            <Chip label="Deletable" onDelete={handleDelete} />
            <Chip label="Deletable" onDelete={handleDelete} />
            <Chip label="Deletable" onDelete={handleDelete} />
            <Chip label="Deletable" onDelete={handleDelete} />
            <Chip label="Deletable" onDelete={handleDelete} />
            <Chip label="Deletable" onDelete={handleDelete} />
            <Chip label="Deletable" onDelete={handleDelete} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <Button variant="contained" color="blue" onClick={() => setKeyword(!keyword)}>Keywords</Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <Button
                variant="contained"
                onClick={() => setModal(!modal)}
                color="alsoWhite"
              >
                {t("addStudentsClose")}
              </Button>
              <Button variant="contained" color="blue">
                Send
              </Button>
            </Box>
          </Box>
          <Keywords modal={keyword} setModal={setKeyword} />
        </Box>
      </motion.div>
    </Modal>
  );
};

export default SendMsg;
