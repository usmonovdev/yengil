import { Box } from '@mui/material'
import React from 'react'
import TopDashboard from '../topDashboard/TopDashboard'

const Groups = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <TopDashboard
        header={"Guruhlar"}
        title={"Statistika va Yangi o'quvchilar"}
      />
    </Box>
  )
}

export default Groups