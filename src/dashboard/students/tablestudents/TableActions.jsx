import { Box, IconButton, Menu, MenuItem, useTheme } from "@mui/material";
import React, { useState } from "react";
import dotD from "../../../assets/dark/dots.png";
import dotW from "../../../assets/icons/dots.png";
import editD from "../../../assets/dark/edit.png";
import editW from "../../../assets/icons/edit.png";
import delD from "../../../assets/dark/delete.png";
import delW from "../../../assets/icons/delete.png";
import { Img } from "./TableStyled";

const TableActions = () => {
  const [anchorEl, setAnchorEl] = useState(null);
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
          <IconButton>
            <Img
              width="18px"
              height="18px"
              src={theme.palette.mode == "light" ? editW : editD}
            />
          </IconButton>
          <IconButton>
            <Img
              width="18px"
              height="18px"
              src={theme.palette.mode == "light" ? delW : delD}
            />
          </IconButton>
        </Box>
      </Menu>
    </>
  );
};

export default TableActions;
