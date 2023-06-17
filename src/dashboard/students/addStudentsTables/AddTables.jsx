import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { H3 } from "../../../ui/typography";
import InputComp from "../../../ui/InputComp";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Telegram } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { addTablesStudent } from "../../../store/themeSlice";
import dayjs from "dayjs";
import { IMaskInput } from "react-imask";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", sm: "70%", md: "700px" },
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

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

const AddTables = () => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [firstName, setFirstNmae] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const now = dayjs();
  const { addStudentTables } = useSelector((state) => state);
  const dispatch = useDispatch();
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <div>
      <Modal
        sx={{ zIndex: "1000" }}
        open={addStudentTables}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, type: "spring", delay: 0.1 }}
        >
          <Box sx={style}>
            <H3>{t("addStudents")}</H3>
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
              inputProps={TextMaskCustom}
              label={t("addStudentsTel")}
              required={true}
              name={name}
            />
            <InputComp
              placeholder="@t_samandar_t"
              value={telegram}
              setValue={setTelegram}
              label={t("addStudentsTelegram")}
              required={true}
              name={name}
            />
            <InputComp
              placeholder="Matematika"
              value={notes}
              setValue={setNotes}
              label={t("addStudentsNote")}
              required={true}
              name={name}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker", "DatePicker"]}>
                  <DatePicker
                    onChange={(e) => setDate(e)}
                    label="Controlled picker"
                    defaultValue={dayjs(now)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </LocalizationProvider>
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
                onClick={() => dispatch(addTablesStudent())}
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
    </div>
  );
};

export default AddTables;
