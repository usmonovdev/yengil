import { Box } from '@mui/material'
import React from 'react'
import TopDashboard from '../topDashboard/TopDashboard'

const Money = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <TopDashboard
        header={"To'lo'vlar"}
        title={"Statistika va Yangi o'quvchilar"}
      />
    </Box>
  )
}

export default Money