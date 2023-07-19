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
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { IMaskInput } from "react-imask";
import axios from "../../../utils/api"
import { POST_TEACHER } from "../../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { failGetTeach, startGetTeach, successGetTeach } from "../../../store/teachSlice";
import { LoadingButton } from "@mui/lab";

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

const AddTeacher = ({ modal, setModal }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");
  const [notes, setNotes] = useState("");
  const [group, setGroup] = useState([]);
  const theme = useTheme();
  const { t } = useTranslation();
  const [personName, setPersonName] = useState([]);
  const edu_id = localStorage.getItem("EDU_ID")
  const { teachers, isLoading } = useSelector((state) => state.teach);
  console.log(teachers);
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
    setGroup(event.target.value);
  };

  const handleAddTeach = async () => {
    try {
      dispatch(startGetTeach())
      const response = await axios.post(POST_TEACHER, {
        full_name: name,
        phone: phone,
        salary: 50,
        note: notes,
        edu_center_id: edu_id
      })
      dispatch(successGetTeach([...teachers, response?.data]))
      setModal(!modal)
    } catch (error) {
      dispatch(failGetTeach(error.response?.data?.message[0]))
    }
  }

  return (
    <>
      <Modal
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
          <Box sx={style}>
            <H3>{t("teacherAdd")}</H3>
            <InputComp
              placeholder="Usmonov Azizbek"
              value={name}
              setValue={setName}
              label={t("addStudentsSurname")}
              required={true}
              name={name}
            />
            <InputComp
              placeholder="+99890-000-00-00"
              value={phone}
              setValue={setPhone}
              label={t("addStudentsTel")}
              inputProps={TextMaskCustom}
              required={true}
              name={name}
            />
            <InputComp
              placeholder="50%"
              value={salary}
              setValue={setSalary}
              label={t("moneySalary")}
              required={true}
              name={name}
            />
            <FormControl sx={{ width: "100%" }} color="blue">
              <InputLabel id="demo-multiple-chip-label" required={true}>
                {t("newStudentsSortingGroup")}
              </InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
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
              placeholder={t("teacherOpen")}
              value={notes}
              setValue={setNotes}
              label={t("groupAddComent")}
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
              <LoadingButton loading={isLoading} variant="contained" color="blue" onClick={handleAddTeach}>
                {t("addStudentsSave")}
              </LoadingButton>
            </Box>
          </Box>
        </motion.div>
      </Modal>
    </>
  );
};

export default AddTeacher;
