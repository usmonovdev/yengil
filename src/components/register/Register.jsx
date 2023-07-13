import React, { useEffect, useState } from "react";
import InputComp from "../../ui/InputComp";
import {
  Alert,
  Box,
  Button,
  IconButton,
  Snackbar,
  Tooltip,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { H1, H3, Span, StyledLink } from "../../ui/typography";
import { useTranslation } from "react-i18next";
import undov from "../../assets/icons/undov.png";
import undovDark from "../../assets/dark/undov-white.png";
import { Div, Img, RegisterBox } from "./Registerstyled";
import CloseIcon from "@mui/icons-material/Close";
import axios from "../../utils/api";
import { POST_CREATE_EDU } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  registerEduFail,
  registerEduStart,
  registerEduSuc,
} from "../../store/eduSlice";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";

const Register = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [paswword, setPaswword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const state = useSelector((state) => state.edu);

  const handleRegister = async () => {
    try {
      dispatch(registerEduStart());
      const response = await axios.post(POST_CREATE_EDU, {
        name: name,
        phone: phone,
        password: paswword,
      });
      setPhone("");
      setName("");
      setPaswword("");
      dispatch(registerEduSuc(response.data));
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
          {state.isFailure}
        </Alert>
      </Snackbar>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", delay: 0.4 }}
      >
        <RegisterBox>
          <H1 className="register-heading" style={{ padding: "1rem" }}>
            {t("register")}
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
              placeholder="MIT"
              value={name}
              setValue={setName}
              label={t("register-name")}
              required={true}
              type="text"
              error={state.isFailure?.includes("name") ? true : false}
            />
            <InputComp
              placeholder="+998 78 777 11 00"
              value={phone}
              setValue={setPhone}
              label={t("register-phone")}
              required={true}
              type={"phone"}
              error={state.isFailure?.includes("phone") ? true : false}
            />
            <Div>
              <InputComp
                placeholder="12345678"
                value={paswword}
                setValue={setPaswword}
                label={t("register-paswword")}
                required={true}
                error={state.isFailure?.includes("password") ? true : false}
              />
              <Tooltip
                disableFocusListener
                disableTouchListener
                title={t("register-tooltip")}
                sx={{ position: "relative" }}
              >
                <Img src={theme.palette.mode == "light" ? undov : undovDark} />
              </Tooltip>
            </Div>
            <LoadingButton
              loading={state.isLoading}
              onClick={handleRegister}
              variant="contained"
              color="blue"
              sx={{
                color: "#fff",
                width: "100%",
                boxShadow: "0px 15px 50px 0px rgba(0,12,33,0.2)",
              }}
              open={open}
              autoHideDuration={6000}
            >
              {t("register")}
            </LoadingButton>
            <H3 sx={{ textAlign: "center" }}>
              {t("login1")} <StyledLink to={"/login"}>{t("login")}</StyledLink>
            </H3>
          </Box>
        </RegisterBox>
      </motion.div>
    </>
  );
};

export default Register;
