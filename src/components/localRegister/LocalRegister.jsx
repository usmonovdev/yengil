import React, { useRef, useState } from "react";
import InputComp from "../../ui/InputComp";
import { Button } from "@mui/material";
import {
  ColoredSpan,
  H1,
  Paragraph,
  StyledAncor,
  StyledLink,
} from "../../ui/typography";
import { useInView } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./localregister.scss";

const LocalRegister = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="local-register"
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
    >
      <H1 className="text-center">{t("register-title")}</H1>
      <form className="form-local">
        <Paragraph>{t("register-info")}</Paragraph>
        <InputComp
          placeholder="Usmonov Azizbek"
          value={name}
          setValue={setName}
          label={t("register-label-name")}
          required={true}
        />
        <InputComp
          placeholder="+998 78 777 11 00"
          value={phone}
          setValue={setPhone}
          label={t("register-label-phone")}
          required={true}
          type={"number"}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />
        <Button
          variant="contained"
          color="white"
          sx={{
            color: "#fff",
            width: "100%",
            boxShadow: "0px 15px 50px 0px rgba(0,12,33,0.2)",
          }}
        >
          {t("register-button")}
        </Button>
      </form>
      <div></div>
    </div>
  );
};

export default LocalRegister;
