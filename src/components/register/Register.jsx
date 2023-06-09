import React, { useState } from "react";
import InputComp from "../../ui/InputComp";
import { Box, Button, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { H1, Span } from "../../ui/typography";
import { useTranslation } from "react-i18next";
import undov from "../../assets/icons/undov.png";
import { Div, Img, RegisterBox} from "./Registerstyled";

const Register = () => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");
  const [paswword, setPaswword] = useState("");
  const [paswwordProvided, setPaswwordProvided] = useState("");
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", delay: 0.4 }}
    >
      <RegisterBox>
        <H1 className="register-heading" style={{padding: "1rem"}}>{t("register")}</H1>
        <Box
          sx={{
            width:{xs: "100%", md: "60%"},
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <InputComp
            placeholder="MIT"
            value={phone}
            setValue={setPhone}
            label={t("register-name")}
            required={true}
          />
          <InputComp
            placeholder="+998 78 777 11 00"
            value={phone}
            setValue={setPhone}
            label={t("register-phone")}
            required={true}
          />
          <Div>
            <InputComp
              placeholder="12345678"
              value={paswword}
              setValue={setPaswword}
              label={t("register-paswword")}
              required={true}
            />
            <Tooltip
              disableFocusListener
              disableTouchListener
              title={t("register-tooltip")}
              sx={{position: "relative"}}
            >
              <Img src={undov} />
            </Tooltip>
          </Div>
          <Div>
            <InputComp
              placeholder="12345678"
              value={paswwordProvided}
              setValue={setPaswwordProvided}
              label={t("register-provided")}
              required={true}
            />
            <Tooltip
              disableFocusListener
              disableTouchListener
              title={t("register-provided")}
            >
              <Img src={undov} />
            </Tooltip>
          </Div>
          <Button
            variant="contained"
            color="blue"
            sx={{
              color: "#fff",
              width: "100%",
              boxShadow: "0px 15px 50px 0px rgba(0,12,33,0.2)",
            }}
          >
            {t("register")}
          </Button>
        </Box>
      </RegisterBox>
    </motion.div>
  );
};

export default Register;
