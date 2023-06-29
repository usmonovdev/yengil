import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { H3White } from "../../../ui/typography";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteMo from "../../../ui/DeleteGrMo";
import MessageIcon from "@mui/icons-material/Message";
import { useSelector } from "react-redux";
import SendMsg from "../../../ui/SendMsg";

const Selected = () => {
  const [delModal, setDelModal] = useState(false);
  const [paidMo, setPaidMo] = useState(false);
  const [msgMo, setMsgMo] = useState(false);
  const selected = useSelector((state) => state.selected);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: -10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.9, type: "spring" }}
      >
        <Box
          sx={{
            bgcolor: "blue.main",
            height: "100%",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0px 10px",
            gap: "20px",
          }}
        >
          <H3White>Selected - {selected}</H3White>
          <Box
            sx={{
              padding: "4px",
              display: "flex",
              flexDirection: "row",
              gap: "4px",
            }}
          >
            <IconButton onClick={() => setMsgMo(!msgMo)}>
              <MessageIcon sx={{ color: "common.white" }} />
            </IconButton>
            <IconButton onClick={() => setDelModal(!delModal)}>
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
          </Box>
        </Box>
      </motion.div>
      <DeleteMo
        modal={delModal}
        setModal={setDelModal}
        text="Are you sure you want to delete this Students?"
      />
      <SendMsg modal={msgMo} setModal={setMsgMo} />
    </>
  );
};

export default Selected;
