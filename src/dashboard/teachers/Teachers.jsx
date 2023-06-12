import { Box } from '@mui/material'
import React from 'react'
import TopDashboard from '../topDashboard/TopDashboard'

const Teachers = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <TopDashboard
        header={"O'qituvchilar"}
        title={"Statistika va Yangi o'quvchilar"}
      />
    </Box>
  )
}

export default Teachers