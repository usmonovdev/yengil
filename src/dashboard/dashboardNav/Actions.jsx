import { Box, IconButton, Menu, Tooltip, useTheme } from "@mui/material";
import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import {
  addNavGroup,
  addNavStudents,
  addNavTeachers,
} from "../../store/themeSlice";
import studentD from "../../assets/dark/students.png";
import studentW from "../../assets/icons/students.png";
import teachersD from "../../assets/dark/teachers.png";
import teachersW from "../../assets/icons/teachers.png";
import groupsD from "../../assets/dark/groups.png";
import groupsW from "../../assets/icons/groups.png";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Paid from "./modals/Paid"

const Actions = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const [paid, setPaid] = useState(false)
  const theme = useTheme();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <AddCircleOutlineIcon fontSize="large" color="alsoWhite" />
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
          <Tooltip
            arrow
            title="Student qo'shish"
            onClick={() => dispatch(addNavStudents())}
          >
            <IconButton>
              <img
                width="20px"
                src={theme.palette.mode == "dark" ? studentD : studentW}
              />
            </IconButton>
          </Tooltip>

          <Tooltip
            arrow
            title="Ustoz qo'shish"
            onClick={() => dispatch(addNavTeachers())}
          >
            <IconButton>
              <img
                width="20px"
                src={theme.palette.mode == "dark" ? teachersD : teachersW}
              />
            </IconButton>
          </Tooltip>

          <Tooltip
            arrow
            title="Guruh qo'shish"
            onClick={() => dispatch(addNavGroup())}
          >
            <IconButton>
              <img
                width="20px"
                src={theme.palette.mode == "dark" ? groupsD : groupsW}
              />
            </IconButton>
          </Tooltip>

          <Tooltip
            arrow
            title="To'lov qo'shish"
            onClick={() => setPaid(!paid)}
          >
            <IconButton>
              <AttachMoneyIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Menu>
      <Paid modal={paid} setModal={setPaid} />
    </>
  );
};

export default Actions;
