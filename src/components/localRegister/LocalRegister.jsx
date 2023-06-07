import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import InputComp from "../../ui/InputComp";
import { H1 } from "../../ui/typography";
import "./localregister.scss";
import { useTranslation } from "react-i18next";

const LocalRegister = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  console.log(name);
  return (
    <div>
      <H1 className="text-center" style={{ marginBottom: "20px" }}>
        {t("register-title")}
      </H1>
      <form className="form-local">
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
          label={t('register-label-phone')}
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
    </div>
  );
};

export default LocalRegister;
