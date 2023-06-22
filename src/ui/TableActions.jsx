import React, { useState } from "react";
import { Box, IconButton, Menu, useTheme } from "@mui/material";
import dotD from "../assets/dark/dots.png";
import dotW from "../assets/icons/dots.png";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Img } from "../dashboard/students/tablestudents/TableStyled";
import DeleteMo from "./DeleteMo";
import EditMo from "./EditMo";

const TableActions = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [delModal, setDelModal] = useState(false)
  const [editMo, setEditMo] = useState(false)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Img
          width="18px"
          height="18px"
          src={theme.palette.mode == "light" ? dotW : dotD}
        />
      </IconButton>
      <Menu
        disableScrollLock={true}
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "fit-content"
          },
        }}
        sx={{ display: "flex", flexDirection: "row" }}
      >
        <Box sx={{ padding: "4px", display: "flex", flexDirection: "row", gap: "4px" }}>
          <IconButton onClick={() => setEditMo(!editMo)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => setDelModal(!delModal)}>
            <DeleteIcon sx={{ color: "red" }}/>
          </IconButton>
        </Box>
      </Menu>
      <DeleteMo modal={delModal} setModal={setDelModal}/>
      <EditMo modal={editMo} setModal={setEditMo} title={"Edit Students"}/>
    </>
  );
};

export default TableActions;
