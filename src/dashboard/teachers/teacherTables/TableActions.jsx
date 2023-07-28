import React, { useState } from "react";
import { Box, IconButton, Menu, useTheme } from "@mui/material";
import dotD from "../../../assets/dark/dots.png";
import dotW from "../../../assets/icons/dots.png";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Img } from "../../students/tablestudents/TableStyled";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import EditMo from "./EditMo";
import UsersMo from "./UsersMo";
import DeleteMo from "../../../ui/DeleteMo";
import { useTranslation } from "react-i18next";
import { DEL_TEACHER_BY_ID, GET_TEACHER_BY_ID } from "../../../utils/constants";

const TableActions = ({ id }) => {
  console.log(id);
  const [anchorEl, setAnchorEl] = useState(null);
  const [delModal, setDelModal] = useState(false);
  const [editMo, setEditMo] = useState(false);
  const [usersMo, setUsersMo] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const { t } = useTranslation()
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
          <IconButton onClick={() => setEditMo(!editMo)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => setDelModal(!delModal)}>
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </Box>
      </Menu>
      <DeleteMo modal={delModal} setModal={setDelModal} text={"teachersAction"} id={id} link={DEL_TEACHER_BY_ID} />
      <EditMo modal={editMo} setModal={setEditMo}/>
      <UsersMo modal={usersMo} setModal={setUsersMo} id={id} link={GET_TEACHER_BY_ID}/>
    </>
  );
};

export default TableActions;
