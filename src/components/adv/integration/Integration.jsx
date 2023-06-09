import React from 'react'
import Right from './Right'
import Left from './Left'
import { Box } from '@mui/material'

const Integration = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      <Right />
      <Left />
    </Box>
  )
}

export default Integration