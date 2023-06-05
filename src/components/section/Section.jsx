import React from 'react'
import './section.scss'
import rocet from '../../assets/icons/rocet.svg'
import {H1, H3, H2, Paragraph} from '../../ui/typography'


const Section = () => {
  return (
    <div className='section-box'>
        <div className="box">
            <H3> <img src={rocet} alt="" /> Sotish boshqaruvi</H3>
            <Paragraph>Sotishni boshqarish</Paragraph>
            <Paragraph>Ro'yxatini qilish</Paragraph>
            <Paragraph>Tranzaksiya marjasi</Paragraph>
            <Paragraph>Ko'p kanalli</Paragraph>
            <Paragraph>Moliyaviy tahlil</Paragraph>
            <Paragraph>Veb-sayt integratsiyasi</Paragraph>
            <Paragraph>Elektron pochta integratsiyasi</Paragraph>
        </div>
        <div className="box">
            <H3>Moliyaviy hisob</H3>
            <Paragraph>Xo'jalik hisobi</Paragraph>
            <Paragraph>Moliyaviy rejalashtirish</Paragraph>
            <Paragraph>To'lov jadvali</Paragraph>
            <Paragraph>Naqd pul bo'shliqlari</Paragraph>
            <Paragraph>Ko'p valyutani qo'llab-quvvatlash</Paragraph>
            <Paragraph>Byudjetlashtirish</Paragraph>
            <Paragraph>Hisob-kitob</Paragraph>
        </div>
        <div className="box">
            <H3>Analitika va avtomatlashtirish</H3>
            <Paragraph>Lorem</Paragraph>
            <Paragraph>Lorem</Paragraph>
            <Paragraph>Foyda bo'yicha savdo hunisi</Paragraph>
            <Paragraph>Setting permissions</Paragraph>
            <Paragraph>Xodimning faoliyati</Paragraph>
            <Paragraph>Exceldan import qilish</Paragraph>
            <Paragraph>Ommaviy operatsiyalar</Paragraph>
        </div>
    </div>
  )
}

export default Section