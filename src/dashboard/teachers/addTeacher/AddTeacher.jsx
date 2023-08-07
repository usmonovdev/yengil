import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  Modal,
  Snackbar,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";
import { H3 } from "../../../ui/typography";
import InputComp from "../../../ui/InputComp";
import { useTranslation } from "react-i18next";
import { IMaskInput } from "react-imask";
import axios from "../../../utils/api";
import { POST_TEACHER } from "../../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  failGetTeach,
  startGetTeach,
  successGetTeach,
} from "../../../store/teachSlice";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";

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

const AddTeacher = ({ modal, setModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      salary: "",
      notes: "",
    },
  });
  const { t } = useTranslation();
  const edu_id = localStorage.getItem("EDU_ID");
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");
  const [notes, setNotes] = useState("");
  const [open, setOpen] = useState(false);

  const { teachers, isLoading, isFailure } = useSelector(
    (state) => state.teach
  );
  console.log(isFailure);

  const handleAddTeach = async () => {
    try {
      dispatch(startGetTeach());
      const response = await axios.post(POST_TEACHER, {
        full_name: name,
        phone: phone,
        salary: 50,
        note: notes,
        edu_center_id: edu_id,
      });
      dispatch(successGetTeach([...teachers, response?.data]));
      setModal(!modal);
    } catch (error) {
      dispatch(failGetTeach(error.response?.data?.message[0]));
    }
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Error
        </Alert>
      </Snackbar>
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
            <FormControl
              sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
              onSubmit={handleSubmit(handleAddTeach)}
            >
              <H3>{t("teacherAdd")}</H3>
              <InputComp
                placeholder="Usmonov Azizbek"
                value={name}
                setValue={setName}
                label={t("addStudentsSurname")}
                required={true}
                name={"name"}
              />
              <InputComp
                placeholder="+99890-000-00-00"
                value={phone}
                setValue={setPhone}
                label={t("addStudentsTel")}
                inputProps={TextMaskCustom}
                required={true}
                name={"phone"}
              />
              <InputComp
                placeholder="50%"
                value={salary}
                setValue={setSalary}
                label={t("moneySalary")}
                required={true}
                name={"salary"}
              />
              <InputComp
                placeholder={t("teacherOpen")}
                value={notes}
                setValue={setNotes}
                label={t("groupAddComent")}
                name={"note"}
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
                <LoadingButton
                  type="submit"
                  loading={isLoading}
                  variant="contained"
                  color="blue"
                  onClick={handleAddTeach}
                >
                  {t("addStudentsSave")}
                </LoadingButton>
              </Box>
            </FormControl>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label="Name"
                type="email"
                {...register("name", {
                  required: "Name is required!",
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <TextField
                label="Note"
                type="text"
                {...register("notes", {
                  required: "Note is required!",
                })}
                error={!!errors.notes}
                helperText={errors.notes?.message}
              />
              <Button>Login</Button>
            </form> */}
          </Box>
        </motion.div>
      </Modal>
    </>
  );
};

export default AddTeacher;
