import { Box, IconButton, Menu, Tooltip, useTheme } from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTranslation } from "react-i18next";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import DeleteMo from "../../../../ui/DeleteMo";

const NewActions = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [delModal, setDelModal] = useState(false);
  const [usersMo, setUsersMo] = useState(false);
  const [paidMo, setPaidMo] = useState(false);
  const { t } = useTranslation();
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
        <MoreVertIcon />
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
            <Box
              sx={{
                width: "100%",
                height: "100%",
                cursor: "pointer",
                borderRadius: "50%",
                bgcolor: "blue.dark",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                transform: {
                  xs: "rotate(90deg)",
                  sm: "rotate(90deg)",
                  md: "rotate(0deg)",
                },
              }}
            >
              <Tooltip
                disableFocusListener
                disableTouchListener
                title={t("newStudentsWaitingTooltip")}
                sx={{ position: "relative" }}
                arrow
              >
                <NavigateNextIcon color="alsoWhite" />
              </Tooltip>
            </Box>
          </IconButton>
          <IconButton onClick={() => setPaidMo(!paidMo)}>
            <Box
              sx={{
                width: "25px",
                height: "25px",
                cursor: "pointer",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "blue.main",
                transform: {
                  xs: "rotate(90deg)",
                  sm: "rotate(90deg)",
                  md: "rotate(0deg)",
                },
              }}
            >
              <Tooltip
                disableFocusListener
                disableTouchListener
                title={t("newStudentsReadyTooltip")}
                sx={{ position: "relative" }}
                arrow
              >
                <NavigateNextIcon color="alsoWhite" />
              </Tooltip>
            </Box>
          </IconButton>
          <IconButton onClick={() => setDelModal(!delModal)}>
            <Tooltip
              disableFocusListener
              disableTouchListener
              title={"Delete"}
              sx={{ position: "relative" }}
              arrow
            >
              <DeleteIcon color="error" />
            </Tooltip>
          </IconButton>
        </Box>
      </Menu>
      <DeleteMo modal={delModal} setModal={setDelModal} text={t("deleteTitle")}/>
    </>
  );
};

export default NewActions;
