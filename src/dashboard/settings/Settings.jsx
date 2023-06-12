import { Box } from '@mui/material'
import React from 'react'
import TopDashboard from '../topDashboard/TopDashboard'

const Settings = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <TopDashboard
        header={"Sozlamalar"}
        title={"Statistika va Yangi o'quvchilar"}
      />
    </Box>
  )
}

export default Settings