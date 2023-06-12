import { Button } from '@mui/material'
import React from 'react'
import { H1, Paragraph } from '../../ui/typography'
import chatArrow from '../../assets/icons/double-arrow.png'
import './topdashboard.scss'

const TopDashboard = () => {
  return (
    <div>
        <div className='header'>
        <Button variant="text"><img src={chatArrow} alt="" /></Button>
            <div>
                <H1>Asosiy</H1>
                <Paragraph>Statistika va Yangi o'quvchilar</Paragraph>
            </div>
        </div>
    </div>
  )
}

export default TopDashboard