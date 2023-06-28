import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { H3 } from "../../../ui/typography";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditMo from "./EditMo";
import DeleteMo from "./DeleteMo";
import UsersMo from "./UsersMo";
import PaidMo from "./PaidMo";

const Selected = () => {
  const [editMo, setEditMo] = useState(false);
  const [delModal, setDelModal] = useState(false);
  const [usersMo, setUsersMo] = useState(false);
  const [paidMo, setPaidMo] = useState(false);
  return (
    <>
    <motion.div
      initial={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <Box
        sx={{
          height: "56px",
          bgcolor: "action.hover",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 10px",
        }}
      >
        <H3>Selected - 1</H3>
        <Box
          sx={{
            padding: "4px",
            display: "flex",
            flexDirection: "row",
            gap: "4px",
          }}
        >
          <IconButton onClick={() => setUsersMo(!usersMo)}>
            <ZoomOutMapIcon />
          </IconButton>
          <IconButton onClick={() => setPaidMo(!paidMo)}>
            <AttachMoneyIcon />
          </IconButton>
          <IconButton onClick={() => setEditMo(!editMo)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => setDelModal(!delModal)}>
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </Box>
      </Box>
    </motion.div>
    <EditMo modal={editMo} setModal={setEditMo}/>
    <DeleteMo modal={delModal} setModal={setDelModal} />
    <UsersMo modal={usersMo} setModal={setUsersMo} />
    <PaidMo modal={paidMo} setModal={setPaidMo} />
    </>
  );
};

export default Selected;
