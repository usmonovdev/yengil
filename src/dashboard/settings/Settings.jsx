import { Box } from "@mui/material";
import React from "react";
import TopDashboard from "../topDashboard/TopDashboard";
import { useTranslation } from "react-i18next";
import SettingLink from "./settingLink/SettingLink";
import { useSelector } from "react-redux";

const Settings = () => {
  const { t } = useTranslation();
  const { sidebar } = useSelector((state) => state);
  return (
    <Box sx={{ width: "100%" }}>
      <TopDashboard
        header={t("dashboardSettings")}
        prew={"/dashboard/money"}
        nextDisabled={true}
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
        <SettingLink />
      </Box>
    </Box>
  );
};

export default Settings;
