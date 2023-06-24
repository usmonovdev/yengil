import React from "react";
import { Box } from "@mui/material";
import TopDashboard from "../topDashboard/TopDashboard";
import { useSelector } from "react-redux";
import MoneyTables from "./money/MoneyTables";
import SalaryTables from "./salary/SalaryTables";
import Cost from "./cost/Cost";

const Money = () => {
  const { sidebar } = useSelector((state) => state);
  return (
    <Box sx={{ width: "100%" }}>
      <TopDashboard
        header={"Moliya"}
        title={"Foyda va harajatlar"}
        prew={"/dashboard/teachers"}
        next={"/dashboard/settings"}
      />
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
        <Cost />
        <SalaryTables />
      </Box>
    </Box>
  );
};

export default Money;
