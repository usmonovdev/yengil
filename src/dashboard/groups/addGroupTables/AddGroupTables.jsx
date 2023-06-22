import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { H3 } from "../../../ui/typography";
import InputComp from "../../../ui/InputComp";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addGroupTables, addWaitStudent } from "../../../store/themeSlice";
import dayjs, { Dayjs } from "dayjs";
import { IMaskInput } from "react-imask";
import {
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";

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

const names = [
  "Dushanba",
  "Seshanba",
  "Chorshanba",
  "Payshanba",
  "Juma",
  "Shanba",
  "Yakshanba",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AddGroupTables = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [clock, setClock] = useState("");
  const [notes, setNotes] = useState("");
  const [group, setGroup] = useState("");
  const theme = useTheme();
  const { t } = useTranslation();
  const { addTablesGroup } = useSelector((state) => state);
  const dispatch = useDispatch();
  const now = dayjs();
  const handleGroup = (event) => {
    setGroup(event.target.value);
  };
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <>
      <Modal
        sx={{ zIndex: "1000" }}
        open={addTablesGroup}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0, top: "50%", left: "50%", position: "absolute", width: "100%" }}
          animate={{ opacity: 1, scale: 1, translateX: "-50%", translateY: "-50%", width: "100%" }}
          transition={{ duration: 1, type: "spring", delay: 0.1 }}
        >
          <Box sx={style}>
            <H3>Add Group</H3>
            <InputComp
              placeholder="Dasturchilar"
              value={name}
              setValue={setName}
              label={"Guruh Nomi"}
              required={true}
              name={name}
            />
            <FormControl sx={{ width: { xs: "100%" } }} color="blue">
              <InputLabel id="demo-simple-select-label">Kurslar</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={t("studentsSorting")}
                onChange={handleGroup}
                value={group}
              >
                <MenuItem value="Matematika">Matematika</MenuItem>
                <MenuItem value="ona tili">Ona tili</MenuItem>
                <MenuItem value="dasturlash">Dasturlash</MenuItem>
                <MenuItem value="fizika">Fizika</MenuItem>
                <MenuItem value="ingliz tili">Ingliz tili</MenuItem>
              </Select>
            </FormControl>
            <InputComp
              placeholder="Mirzaqulov Abbos"
              value={phone}
              setValue={setPhone}
              label={"O’qituvchi"}
              inputProps={TextMaskCustom}
              required={true}
              name={name}
            />
            <FormControl sx={{ width: "100%" }} color="blue">
              <InputLabel id="demo-multiple-chip-label">Kunlar</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Kunlar" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
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
                  label={"Dars vaqti"}
                  onChange={(e) => setClock(e)}
                />
              </DemoContainer>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  sx={{ width: "100%" }}
                  onChange={(e) => setDate(e)}
                  label="Boshlanish sanasi"
                  defaultValue={dayjs(now)}
                />
              </DemoContainer>
            </LocalizationProvider>
            <InputComp
              placeholder="Matematikaga yozildi"
              value={notes}
              setValue={setNotes}
              label={"Komentariya"}
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
                onClick={() => dispatch(addGroupTables())}
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

export default AddGroupTables;
