import { Box, Button, Modal, useTheme } from "@mui/material";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import InputComp from "./InputComp";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { H3 } from "./typography";
import { addTablesStudent } from "../store/themeSlice";
import { IMaskInput } from "react-imask";
import PropTypes from "prop-types";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "70%", md: "700px" },
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const EditMo = ({ modal, setModal, title }) => {
  const theme = useTheme();
  const [name, setName] = useState("");
  const [firstName, setFirstNmae] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const now = dayjs();
  const { addStudentTables } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <>
      <Modal
        sx={{ zIndex: "1400" }}
        open={modal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
            top: "50%",
            left: "50%",
            position: "absolute",
            width: "100%",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            translateX: "-50%",
            translateY: "-50%",
            width: "100%",
          }}
          transition={{ duration: 1, type: "spring", delay: 0.1 }}
        >
          <Box sx={style}>
            <H3>{title}</H3>
            <InputComp
              placeholder="Azizbek"
              value={name}
              setValue={setName}
              label={t("addStudentsName")}
              required={true}
              name={name}
            />
            <InputComp
              placeholder="Usmonov"
              value={firstName}
              setValue={setFirstNmae}
              label={t("addStudentsSurname")}
              required={true}
              name={name}
            />
            <InputComp
              placeholder="+99890-000-00-00"
              value={phone}
              setValue={setPhone}
              label={t("addStudentsTel")}
              required={true}
              name={name}
              inputProps={TextMaskCustom}
            />
            <InputComp
              placeholder="@t_samandar_t"
              value={telegram}
              setValue={setTelegram}
              label={t("addStudentsTelegram")}
              required={true}
              name={name}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  sx={{ width: "100%" }}
                  onChange={(e) => setDate(e)}
                  label="Day"
                  defaultValue={dayjs(now)}
                />
              </DemoContainer>
            </LocalizationProvider>
            <InputComp
              placeholder="Matematika"
              value={notes}
              setValue={setNotes}
              label={t("addStudentsNote")}
              required={true}
              name={name}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                gap: "10px",
              }}
            >
              <Button
                variant="contained"
                onClick={() => setModal(!modal)}
                style={{
                  background: theme.palette.custom.newStudentWhite,
                  color: "black",
                }}
              >
                {t("addStudentsClose")}
              </Button>
              <Button variant="contained" color="blue">
                {t("addStudentsSave")}
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Modal>
    </>
  );
};

export default EditMo;
