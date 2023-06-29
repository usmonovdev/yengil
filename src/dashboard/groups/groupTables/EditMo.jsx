import React, { useState } from "react";
import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  useTheme,
} from "@mui/material";
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
import { IMaskInput } from "react-imask";
import PropTypes from "prop-types";
import InputComp from "../../../ui/InputComp";

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const days = [
  "Dushanba",
  "Seshanba",
  "Chorshanba",
  "Payshanba",
  "Juma",
  "Shanba",
  "Yakshanba",
];

const teachers = [
  "Mirzaqulov Abbos",
  "Turg'unboev Samandar",
  "Abduqayumov Abror",
  "Usmonov Azizbek",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const EditMo = ({ modal, setModal }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [clock, setClock] = useState(""); 
  const [notes, setNotes] = useState("");
  const [course, setCourse] = useState("");
  const [teacher, setTeacher] = useState("");
  const [personName, setPersonName] = useState([]);
  const now = dayjs();

  const { t } = useTranslation();
  const theme = useTheme();

  const handleGetGroups = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
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
            <H3>{t("editMoGroup")}</H3>
            <InputComp
              placeholder="Dasturlash"
              value={name}
              setValue={setName}
              label={t("groupTablesName")}
              required={true}
              name={name}
            />
            <FormControl
              sx={{ width: { xs: "100%" }, textAlign: "left" }}
              color="blue"
              required
            >
              <InputLabel>{t("editMoTeacher")}</InputLabel>
              <Select
                label={"Teacher"}
                onChange={(e) => setTeacher(e.target.value)}
                value={teacher}
              >
                <MenuItem value="mirzakulov-abbos">Mirzakulov Abbos</MenuItem>
                <MenuItem value="turgunboev-samandar">
                  Turg'unboev Samandar
                </MenuItem>
                <MenuItem value="abdukayumov-abror">Abdukayumov Abror</MenuItem>
                <MenuItem value="usmonov-azizbek">Usmonov Azizbek</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{ width: { xs: "100%" }, textAlign: "left" }}
              color="blue"
              required
            >
              <InputLabel>{t("edidtMoCourse")}</InputLabel>
              <Select
                label={"Kurs"}
                onChange={(e) => setCourse(e.target.value)}
                value={course}
              >
                <MenuItem value="Matematika">Matematika</MenuItem>
                <MenuItem value="ona tili">Ona tili</MenuItem>
                <MenuItem value="dasturlash">Dasturlash</MenuItem>
                <MenuItem value="fizika">Fizika</MenuItem>
                <MenuItem value="ingliz tili">Ingliz tili</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: "100%" }} color="blue" required>
              <InputLabel>{t("groupOpenDay")}</InputLabel>
              <Select
                multiple
                value={personName}
                onChange={handleGetGroups}
                input={
                  <OutlinedInput id="select-multiple-chip" label="Kunlar" />
                }
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {days.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <InputComp
              placeholder="500.000 so'm"
              value={price}
              setValue={setPrice}
              label={t("groupEditMo")}
              required={true}
              name={name}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={[
                  "MobileTimePicker",
                  "MobileTimePicker",
                  "MobileTimePicker",
                ]}
              >
                <TimePicker
                  views={["hours", "minutes"]}
                  label={`${t("groupOpenLessonTime")}*`}
                  onChange={(e) => setClock(e)}
                />
              </DemoContainer>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  sx={{ width: "100%" }}
                  onChange={(e) => setDate(e)}
                  label={`${t("groupStart")}*`}
                  defaultValue={dayjs(now)}
                />
              </DemoContainer>
            </LocalizationProvider>
            <InputComp
              placeholder="Matematika"
              value={notes}
              setValue={setNotes}
              label={t("addStudentsNote")}
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
    </>
  );
};

export default EditMo;
