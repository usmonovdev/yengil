import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Box, Button } from '@mui/material';
import { H1 } from '../../ui/typography';
import { t } from 'i18next';
import InputComp from '../../ui/InputComp';
import { useTranslation } from 'react-i18next';
import { RegisterBox } from '../register/Registerstyled';
import { LoginBox } from './Loginstyled';

const Login = () => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");
  const [paswword, setPaswword] = useState("");
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", delay: 0.4 }}
    >

      <LoginBox>
        <H1 className="register-heading" style={{ padding: "1rem" }}>{t("login")}</H1>
        <Box
          sx={{
            width: { xs: "100%", md: "60%" },
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <InputComp
            placeholder="+998 78 777 11 00"
            value={phone}
            setValue={setPhone}
            label={t("register-phone")}
            required={true}
          />
          <InputComp
            placeholder="12345678"
            value={paswword}
            setValue={setPaswword}
            label={t("register-paswword")}
            required={true}
          />

          <Button
            variant="contained"
            color="blue"
            sx={{
              color: "#fff",
              width: "100%",
              boxShadow: "0px 15px 50px 0px rgba(0,12,33,0.2)",
            }}
          >
            {t("login")}
          </Button>

        </Box>
      </LoginBox>
    </motion.div>
  )
}

export default Login