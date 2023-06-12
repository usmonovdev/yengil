import { Button } from '@mui/material'
import React from 'react'
import { H1, Paragraph } from '../../ui/typography'
import chatArrow from '../../assets/icons/double-arrow.png'
import darkChatArrow from '../../assets/dark/double-arrow.png'
import './topdashboard.scss'
import { useTheme } from '@emotion/react'

const TopDashboard = () => {
  const theme = useTheme();
  return (
    <div>
        <div className='header-top'>
        <Button variant="text"><img src={theme.palette.mode == "light" ? chatArrow : darkChatArrow} alt="" /></Button>
            <div>
                <H1>Asosiy</H1>
                <Paragraph>Statistika va Yangi o'quvchilar</Paragraph>
            </div>
        </div>
    </div>
  )
}

export default TopDashboard