import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Tooltip } from '@mui/material';
import { H1, H3, StyledLink } from '../../ui/typography';
import { t } from 'i18next';
import InputComp from '../../ui/InputComp';
import { useTranslation } from 'react-i18next';
import { Div, Img, RegisterBox } from '../register/Registerstyled';
import { LoginBox } from './Loginstyled';
import { Link } from 'react-router-dom';
import koz from "../../assets/icons/koz.png"
import darkKoz from "../../assets/dark/darkKoz.png"
import { useTheme } from '@emotion/react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Login = () => {
  const theme = useTheme()
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");
  const [paswword, setPaswword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
            width: { xs: "90%", md: "60%" },
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
          <FormControl variant="outlined" sx={{ width: "100%", }} color='blue'>
            <InputLabel htmlFor="outlined-adornment-password">{t("register-paswword")} *</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end"
                >
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password*"
            />
          </FormControl>

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

          <H3>{t("register1")}{" "}
            <StyledLink to={"/register"} >
              {t("register")}
            </StyledLink>
          </H3>

        </Box>
      </LoginBox>
    </motion.div>
  )
}

export default Login