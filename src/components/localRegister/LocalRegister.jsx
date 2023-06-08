import React, { useRef, useState } from "react";
import InputComp from "../../ui/InputComp";
import { Alert, Button, CircularProgress, Snackbar } from "@mui/material";
import { H1, Paragraph } from "../../ui/typography";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import axios from "axios";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import "./localregister.scss";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+{998} (00) 000 00 00"
      definitions={{
        _: /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const LocalRegister = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const telegram_bot_id = "5718321558:AAGsmneA4xELmBY-k8uv3as2OFQjpX1aiOM";
  const chat_id = -1001928870254;
  const sendMessage = async () => {
    if (name.length > 5 && phone.length > 7) {
      const message = `Yangi foydalanuvchi\n<b>Ismi:</b> <code>${name}</code> + \n<b>Raqam:</b> <code>${phone}</code>`;
      setLoading(true);
      try {
        await axios.get(
          `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
          {
            params: {
              chat_id: chat_id,
              text: message,
            },
          }
        );
        setLoading(false);
        setName("");
        setPhone("+998");
        setNameError(false);
        setPhoneError(false);
        setOpen(true);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    } else if (name.length < 5) {
      setNameError(true);
    } else {
      setPhoneError(true);
    }
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {t("success")}
        </Alert>
      </Snackbar>
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
            error={nameError}
            placeholder="Usmonov Azizbek"
            value={name}
            setValue={setName}
            label={t("register-label-name")}
            required={true}
            autoComplete="off"
            name={"name"}
          />
          <InputComp
            error={phoneError}
            value={phone}
            setValue={setPhone}
            label={t("register-label-phone")}
            required={true}
            inputProps={TextMaskCustom}
            name={"phone"}
          />
          <Button
            variant="contained"
            color="blue"
            onClick={sendMessage}
            sx={{
              color: "#fff",
              width: "100%",
              boxShadow: "0px 15px 50px 0px rgba(0,12,33,0.2)",
            }}
          >
            {!loading ? (
              <>{t("register-button")}</>
            ) : (
              <CircularProgress color="white" size={24} />
            )}
          </Button>
        </form>
        <div></div>
      </div>
    </>
  );
};

export default LocalRegister;
