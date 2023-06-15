import React from "react";
import TopDashboard from "../topDashboard/TopDashboard";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import TableStudents from "./tablestudents/TableStudents";
import { useSelector } from "react-redux";
import NewStudents from "./new/NewStudents";

const Students = () => {
  const { t } = useTranslation();
  const { sidebar } = useSelector((state) => state);

  return (
    <Box sx={{ width: "100%" }}>
      <TopDashboard
        header={t("dashboardStudents")}
        title={t("dashboardStudentsTitle")}
      />
      <Box
        sx={{
          position: "relative",
          top: "100px",
          left: `${sidebar ? "90px" : "0"}`,
          padding: "15px",
        }}
      >
        {/* <NewStudents /> */}
        <TableStudents />
      </Box>
    </Box>
  );
};

export default Students;
