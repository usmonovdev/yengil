import { Box, IconButton, Menu, Tooltip } from "@mui/material";
import React, { useState } from "react";
import studentimg from "../../assets/dark/students.png";
import teachers from "../../assets/dark/teachers.png";
import groups from "../../assets/dark/groups.png";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";

const Actions = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <AddCircleOutlineIcon fontSize="large" />
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
          <Tooltip arrow title="Student qo'shish">
            <IconButton>
              <img width="20px" src={studentimg} />
            </IconButton>
          </Tooltip>

          <Tooltip arrow title="Ustoz qo'shish">
            <IconButton>
              <img width="20px" src={teachers} />
            </IconButton>
          </Tooltip>

          <Tooltip arrow title="Guruh qo'shish">
            <IconButton>
              <img width="20px" src={groups} />
            </IconButton>
          </Tooltip>
        </Box>
      </Menu>
    </>
  );
};

export default Actions;
