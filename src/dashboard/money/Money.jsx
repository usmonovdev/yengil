import React from "react";
import { Box } from "@mui/material";
import TopDashboard from "../topDashboard/TopDashboard";
import { useSelector } from "react-redux";
import MoneyTables from "./money/MoneyTables";
import SalaryTables from "./salary/SalaryTables";
import Cost from "./cost/Cost";
import { useTranslation } from "react-i18next";

const Money = () => {
  const { sidebar } = useSelector((state) => state.theme);
  const { t } = useTranslation();
  return (
    <Box sx={{ width: "100%" }}>
      <TopDashboard
        header={t("dashboardMoney")}
        title={t("dashboardMoneyTitle")}
        prew={"/dashboard/teachers"}
        next={"/dashboard/settings"}
      />
      <Box
        sx={{
          position: "relative",
          top: "50px",
          left: `${sidebar ? "90px" : "0"}`,
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <MoneyTables />
        <Cost />
        <SalaryTables />
      </Box>
    </Box>
  );
};

export default Money;
