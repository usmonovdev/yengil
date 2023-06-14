import { Box } from '@mui/material'
import React from 'react'
import TopDashboard from '../topDashboard/TopDashboard'
import { useTranslation } from 'react-i18next';

const Settings = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ width: "100%" }}>
      <TopDashboard
        header={t("dashboardSettings")}
        // title={t("dashboardSettingsTitle")}
      />
    </Box>
  )
}

export default Settings