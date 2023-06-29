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
} from "@mui/material";
import { motion } from "framer-motion";
import { H3 } from "../../../ui/typography";
import InputComp from "../../../ui/InputComp";
import { addTecherTables } from "../../../store/themeSlice";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { IMaskInput } from "react-imask";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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

const names = ["Fizika", "Dasturlash", "Matematika", "Ingliz tili", "React"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AddTeacher = () => {
  const [name, setName] = useState("");
  const [fistName, setfistName] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");
  const [notes, setNotes] = useState("");
  const [group, setGroup] = useState("");
  const theme = useTheme();
  const { t } = useTranslation();
  const { addTablesTeacher } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [personName, setPersonName] = React.useState([]);

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
        open={addTablesTeacher}
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
            <H3>Add Teachers</H3>
            <InputComp
              placeholder="Azizbek"
              value={name}
              setValue={setName}
              label={"Ism"}
              required={true}
              name={name}
            />
            <InputComp
              placeholder="Usmonov"
              value={fistName}
              setValue={setfistName}
              label={"Familiya"}
              required={true}
              name={name}
            />
            <InputComp
              placeholder="+99890-000-00-00"
              value={phone}
              setValue={setPhone}
              label={"Telefon"}
              inputProps={TextMaskCustom}
              required={true}
              name={name}
            />
            <InputComp
              placeholder="50%"
              value={salary}
              setValue={setSalary}
              label={"Oylik (%)"}
              required={true}
              name={name}
            />
            <FormControl sx={{ width: "100%" }} color="blue">
              <InputLabel id="demo-multiple-chip-label">Guruh</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Guruh" />}
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
            <InputComp
              placeholder="Daturlashdan dars beradi"
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
                onClick={() => dispatch(addTecherTables())}
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

export default AddTeacher;
