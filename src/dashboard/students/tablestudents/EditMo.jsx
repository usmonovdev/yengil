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
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
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

const days = [
  "Fizika",
  "Matematika",
  "Ona tili",
  "React",
  "Dasturlash",
  "Ingliz tili",
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
  const [firstName, setFirstNmae] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const now = dayjs();

  const { t } = useTranslation();
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleGetGroups = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
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
            <H3>{t("studentsEdit")}</H3>
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
            <FormControl sx={{ width: "100%" }} color="blue">
              <InputLabel id="demo-multiple-chip-label">{t("groupTables")}</InputLabel>
              <Select
                sx={{ zIndex: "1500" }}
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleGetGroups}
                input={
                  <OutlinedInput id="select-multiple-chip" label="Guruh" />
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
                  label={t("groupOpenDay")}
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

export default EditMo;
