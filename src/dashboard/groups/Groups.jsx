import { Box } from '@mui/material'
import React from 'react'
import TopDashboard from '../topDashboard/TopDashboard'
import { useTranslation } from 'react-i18next';

const Groups = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ width: "100%" }}>
      <TopDashboard
        header={t("dashboardGroup")}
        title={t("dashboardGroupTitle")}
      />
    </Box>
  )
}

export default Groups