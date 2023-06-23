import { Box } from "@mui/material";
import React from "react";
import TopDashboard from "../topDashboard/TopDashboard";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import MoneyTables from "./moneyTables/MoneyTables";

const Money = () => {
  const { t } = useTranslation();
  const { sidebar } = useSelector((state) => state);
  return (
    <Box sx={{ width: "100%" }}>
      <TopDashboard header={"Moliya"} title={"Foyda va harajatlar"} />
      <Box
        sx={{
          position: "relative",
          top: "100px",
          left: `${sidebar ? "90px" : "0"}`,
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <MoneyTables />
      </Box>
    </Box>
  );
};

export default Money;
