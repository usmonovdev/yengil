import { Box } from "@mui/material";
import React from "react";
import TopDashboard from "../topDashboard/TopDashboard";
import { useTranslation } from "react-i18next";
import GroupTables from "./groupTables/GroupTables";
import { useSelector } from "react-redux";

const Groups = () => {
  const { t } = useTranslation();
  const { sidebar } = useSelector((state) => state.theme);

  return (
    <Box sx={{ width: "100%" }}>
      <TopDashboard
        header={t("group")}
        title={t("groupTitle")}
        prew={"/dashboard/students"}
        next={"/dashboard/teachers"}
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
        <GroupTables />
      </Box>
    </Box>
  );
};

export default Groups;
