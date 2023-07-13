import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Alert,
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
} from "@mui/material";
import { H1, H3, StyledLink } from "../../ui/typography";
import InputComp from "../../ui/InputComp";
import { useTranslation } from "react-i18next";
import { LoginBox } from "./Loginstyled";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "../../utils/api";
import { POST_SIGNIN_EDU } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  loginEdusuc,
  registerEduFail,
  registerEduStart,
} from "../../store/eduSlice";
import { LoadingButton } from "@mui/lab";

const Login = () => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isFailure } = useSelector((state) => state.edu);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    try {
      dispatch(registerEduStart());
      const response = await axios.post(POST_SIGNIN_EDU, {
        phone: phone,
        password: password,
      });
      setPhone("");
      setPassword("");
      dispatch(loginEdusuc(response.data));
      localStorage.setItem("EDU_ID", response?.data.eduCenter.id)
      navigate("/login");
    } catch (error) {
      dispatch(registerEduFail(error.response.data.message[0]));
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {isFailure}
        </Alert>
      </Snackbar>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", delay: 0.4 }}
      >
        <LoginBox>
          <H1 className="register-heading" style={{ padding: "1rem" }}>
            {t("login")}
          </H1>
          <Box
            sx={{
              width: { xs: "90%", md: "50%" },
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
              error={isFailure?.includes("phone") ? true : false}
            />
            <FormControl
              variant="outlined"
              sx={{ width: "100%" }}
              color="blue"
              error={isFailure?.includes("password") ? true : false}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                {t("register-paswword")} *
              </InputLabel>
              <OutlinedInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label={t("register-paswword")}
              />
            </FormControl>

            <LoadingButton
              loading={isLoading}
              onClick={handleLogin}
              variant="contained"
              color="blue"
              sx={{
                color: "#fff",
                width: "100%",
                boxShadow: "0px 15px 50px 0px rgba(0,12,33,0.2)",
              }}
              open={open}
            >
              {t("login")}
            </LoadingButton>

            <H3 sx={{ textAlign: "center" }}>
              {t("register1")}{" "}
              <StyledLink to={"/register"}>{t("register")}</StyledLink>
            </H3>
          </Box>
        </LoginBox>
      </motion.div>
    </>
  );
};

export default Login;
