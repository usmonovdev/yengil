import React, { useState } from "react";
import { Box, IconButton, Menu, useTheme } from "@mui/material";
import dotD from "../../../assets/dark/dots.png";
import dotW from "../../../assets/icons/dots.png";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Img } from "./TableStyled";
import DeleteMo from "./DeleteMo";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import UsersMo from "./UsersMo";
import EditMo from "./EditMo";
import PaidMo from "./PaidMo";

const TableActions = ({ id }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [delModal, setDelModal] = useState(false);
  const [editMo, setEditMo] = useState(false);
  const [usersMo, setUsersMo] = useState(false);
  const [paidMo, setPaidMo] = useState(false);
  const theme = useTheme();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
            width: "fit-content",
          },
        }}
        sx={{ display: "flex", flexDirection: "row", zIndex: "1000" }}
      >
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
            <EditIcon/>
          </IconButton>
          <IconButton onClick={() => setDelModal(!delModal)}>
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </Box>
      </Menu>
      <EditMo modal={editMo} setModal={setEditMo}/>
      <DeleteMo modal={delModal} setModal={setDelModal} />
      <UsersMo modal={usersMo} setModal={setUsersMo} id={id} />
      <PaidMo modal={paidMo} setModal={setPaidMo} />
    </>
  );
};

export default TableActions;
