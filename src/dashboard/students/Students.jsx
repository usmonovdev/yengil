import { Box } from '@mui/material'
import React from 'react'
import TopDashboard from '../topDashboard/TopDashboard'

const Students = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <TopDashboard
        header={"O'quvchilar"}
        title={"Statistika va Yangi o'quvchilar"}
      />
    </Box>
  )
}

export default Students