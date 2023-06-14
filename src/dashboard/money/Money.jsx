import { Box } from '@mui/material'
import React from 'react'
import TopDashboard from '../topDashboard/TopDashboard'
import { useTranslation } from 'react-i18next';

const Money = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ width: "100%" }}>
      <TopDashboard
        header={t("dashboardMoney")}
        title={t("dashboardMoneyTitle")}
      />
    </Box>
  )
}

export default Money