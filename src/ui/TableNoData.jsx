import React from "react";
import notFoundDark from "../assets/dark/data-not-found.png";
import notFoundWhite from "../assets/icons/data-not-found.png";
import { Box, Button, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const TableNoData = ({ modal, setModal, title }) => {
  const { palette } = useTheme();
  const { t } = useTranslation()
  return (
    <Box className="flex flex-col items-center gap-[20px] p-4">
      <img
        className="w-[200px] opacity-40"
        src={palette.mode == "dark" ? notFoundDark : notFoundWhite}
        alt="No data"
      />
      <p>{t(title)}</p>
      <Button color="blue" onClick={() => setModal(!modal)}>
        qo'shish
      </Button>
    </Box>
  );
};

export default TableNoData;
