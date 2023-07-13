import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { H3 } from "../../../ui/typography";
import InputComp from "../../../ui/InputComp";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { addTablesStudent } from "../../../store/themeSlice";
import { IMaskInput } from "react-imask";
import axios from "../../../utils/api";
import {
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
} from "@mui/material";
import { POST_STUDENT } from "../../../utils/constants";
import { LoadingButton } from "@mui/lab";
import { stuFail, stuStart, stuSuc } from "../../../store/stuSlice";

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

const AddTables = () => {
  const stu = useSelector((state) => state.stu);
  const edu_id = localStorage.getItem("EDU_ID");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const { addStudentTables } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [group, setGroup] = useState("");
  const [open, setOpen] = useState(false);
  const handleGroup = (event) => {
    setGroup(event.target.value);
  };

  const handleAddStu = async () => {
    try {
      dispatch(stuStart());
      const response = await axios.post(POST_STUDENT, {
        full_name: name,
        phone: phone,
        note: notes,
        status: "complated",
        group_id: "DDG33287",
        edu_center_id: edu_id,
      });
      dispatch(stuSuc([...stu, response?.data]));
    } catch (error) {
      dispatch(stuFail(error.response?.data?.message[0]));
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {stu.isFailure}
        </Alert>
      </Snackbar>
      <Modal disableScrollLock sx={{ zIndex: "1000" }} open={addStudentTables}>
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
            <H3>{t("addStudents")}</H3>
            <InputComp
              placeholder="Azizbek"
              value={name}
              setValue={setName}
              label={"Ism Familiya"}
              required={true}
              name={name}
            />
            <FormControl
              sx={{ width: { xs: "100%" }, textAlign: "left" }}
              color="blue"
              required
            >
              <InputLabel>{t("groupTables")}</InputLabel>
              <Select
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
              placeholder="+99890-000-00-00"
              value={phone}
              inputProps={TextMaskCustom}
              setValue={setPhone}
              label={t("addStudentsTel")}
              required={true}
              name={name}
            />
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
                onClick={() => dispatch(addTablesStudent())}
                color="alsoWhite"
              >
                {t("addStudentsClose")}
              </Button>
              <LoadingButton
                loading={stu.isLoading}
                variant="contained"
                color="blue"
                onClick={handleAddStu}
                open={open}
                autoHideDuration={6000}
              >
                {t("addStudentsSave")}
              </LoadingButton>
            </Box>
          </Box>
        </motion.div>
      </Modal>
    </>
  );
};

export default AddTables;
