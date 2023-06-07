import React, { useRef, useState } from "react";
import InputComp from "../../ui/InputComp";
import { Button } from "@mui/material";
import { H1, Paragraph } from "../../ui/typography";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./localregister.scss";
import axios from "axios";

const LocalRegister = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const telegram_bot_id = "5718321558:AAGsmneA4xELmBY-k8uv3as2OFQjpX1aiOM";
  const chat_id = -1001928870254;
  const sendMessage = async () => {
    if (name.length > 7 && phone.length > 7) {
      const message = `Ismi: ${name} + \nRaqam: ${phone}`;
      try {
        const response = await axios.get(
          `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
          {
            params: {
              chat_id: chat_id,
              text: message,
            },
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("error");
    }
  };

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
          onClick={sendMessage}
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
