import React, { useState } from "react";
import { Box, Button, Modal, useTheme } from "@mui/material";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { H3 } from "../../../ui/typography";
import InputComp from "../../../ui/InputComp";

const modalStyle = {
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

const PaidMo = ({ modal, setModal }) => {
  const [name, setName] = useState("Usmonov Azizbek");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const now = dayjs();

  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Modal
      disableScrollLock
      sx={{ zIndex: "1000" }}
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
        <Box sx={modalStyle}>
          <H3>{t("moneyAdd")}</H3>
          <InputComp
            placeholder="Azizbek"
            value={name}
            disabled={true}
            setValue={setName}
            label={t("groupOpenPeople")}
            required={true}
            name={name}
          />
          <InputComp
            placeholder="700.000"
            value={quantity}
            setValue={setQuantity}
            label={t("groupOpenQuantity")}
            required={true}
            name={quantity}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DatePicker
                sx={{ width: "100%" }}
                onChange={(e) => setDate(e)}
                label={t("groupOpenDay")}
                defaultValue={dayjs(now)}
              />
            </DemoContainer>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["TimePicker", "TimePicker"]}>
              <TimePicker
                sx={{ width: "100%" }}
                label={t("groupOpenHour")}
                defaultValue={dayjs("2022-04-17T15:30")}
              />
            </DemoContainer>
          </LocalizationProvider>
          <InputComp
            placeholder={t("groupOpenDelayed")}
            value={notes}
            setValue={setNotes}
            label={t("addStudentsNote")}
            required={false}
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
              color="alsoWhite"
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
  );
};

export default PaidMo;
