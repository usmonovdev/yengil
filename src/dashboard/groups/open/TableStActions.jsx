import React from "react";
import { Box, IconButton } from "@mui/material";
import { Img } from "../../students/tablestudents/TableStyled";
import editD from "../../../assets/dark/edit.png"
import delD from "../../../assets/dark/delete.png"

const TableStActions = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
      <IconButton>
        <Img src={editD} />
      </IconButton>
      <IconButton>
        <Img src={delD} />
      </IconButton>
    </Box>
  );
};

export default TableStActions;
