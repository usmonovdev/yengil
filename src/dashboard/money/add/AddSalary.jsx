import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { H3 } from "../../../ui/typography";
import InputComp from "../../../ui/InputComp";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addSalatyTables } from "../../../store/themeSlice";
import { IMaskInput } from "react-imask";

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

const AddSalary = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [jobs, setJobs] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const theme = useTheme();
  const { t } = useTranslation();
  const { addTablesSalary } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        disableScrollLock
        sx={{ zIndex: "1000" }}
        open={addTablesSalary}
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
            <H3>{t("moneySalary")}</H3>
            <InputComp
              placeholder="Mirzaqulov Abbos"
              value={name}
              setValue={setName}
              label={t("groupOpenName")}
              required={true}
              name={name}
            />
            <InputComp
              placeholder="6.000.000"
              value={reason}
              setValue={setReason}
              label={t("moneySalaryEmployee")}
              required={true}
              name={name}
            />
            <InputComp
              placeholder="6.000.000"
              value={price}
              setValue={setPrice}
              label={t("moneySalaryCenter")}
              required={true}
              name={name}
            />
            <InputComp
              placeholder="O'qituvchi"
              value={jobs}
              setValue={setJobs}
              label={t("moneySalaryOccupation")}
              required={true}
              name={name}
            />
            <InputComp
              placeholder="+998900000000"
              value={phone}
              setValue={setPhone}
              label={t("userMoPhone")}
              required={true}
              name={name}
              inputProps={TextMaskCustom}
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
                onClick={() => dispatch(addSalatyTables())}
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

export default AddSalary;
