import { Box } from "@mui/material";
import React from "react";
import TopDashboard from "../topDashboard/TopDashboard";
import { useTranslation } from "react-i18next";
import TeacherTables from "./teacherTables/TeacherTables";
import { useSelector } from "react-redux";

const Teachers = () => {
  const { t } = useTranslation();
  const { sidebar } = useSelector((state) => state);
  return (
    <Box sx={{ width: "100%" }}>
      <TopDashboard
        header={t("dashboardTeachers")}
        title={t("dashboardTeachersTitle")}
        prew={"/dashboard/groups"}
        next={"/dashboard/money"}
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
        <TeacherTables />
      </Box>
    </Box>
  );
};

export default Teachers;
