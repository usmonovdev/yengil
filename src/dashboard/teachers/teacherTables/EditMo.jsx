import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Box, Button, Modal, Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { H3 } from "../../../ui/typography";
import { IMaskInput } from "react-imask";
import PropTypes from "prop-types";
import InputComp from "../../../ui/InputComp";
import axios from "../../../utils/api";
import { LoadingButton } from "@mui/lab";

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

const EditMo = forwardRef((props, ref) => {
  const { link, id } = props;
  const { t } = useTranslation();

  const [editMo, setEditMo] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [salary, setSalary] = useState("");
  const [notes, setNotes] = useState("");

  const [saving, setSaving] = useState(false);

  useImperativeHandle(ref, () => ({
    async handleEditUser() {
      setEditMo(!editMo);
      try {
        setIsLoading(true);
        const { data } = await axios.get(link + "/" + id);
        setFullName(data.full_name);
        setSalary(data.salary);
        setPhone(data.phone);
        setNotes(data.note);
        setTelegram(data.telegram);
        setIsLoading(false);
      } catch (error) {
        console.log("error");
      }
    },
  }));

  const handleUpdateData = async () => {
    try {
      setSaving(true);
      await axios.patch(link + "/" + id, {
        full_name: fullName,
        phone: phone,
        salary: salary,
        telegram: telegram,
        note: notes,
      });
      setSaving(false);
      setEditMo(false)
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <>
      <Modal
        sx={{ zIndex: "1000" }}
        open={editMo}
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
            <H3>{t("teacherEdit")}</H3>
            {isLoading ? (
              <>
                <Skeleton
                  sx={{
                    borderRadius: "5px",
                    height: "55px",
                    transform: "scale(1,1)",
                  }}
                />
                <Skeleton
                  sx={{
                    borderRadius: "5px",
                    height: "55px",
                    transform: "scale(1,1)",
                  }}
                />
                <Skeleton
                  sx={{
                    borderRadius: "5px",
                    height: "55px",
                    transform: "scale(1,1)",
                  }}
                />
                <Skeleton
                  sx={{
                    borderRadius: "5px",
                    height: "55px",
                    transform: "scale(1,1)",
                  }}
                />
                <Skeleton
                  sx={{
                    borderRadius: "5px",
                    height: "55px",
                    transform: "scale(1,1)",
                  }}
                />
              </>
            ) : (
              <>
                <InputComp
                  placeholder="Usmonov"
                  value={fullName}
                  setValue={setFullName}
                  label={t("addStudentsSurname")}
                  required={true}
                  name={"full_name"}
                />
                <InputComp
                  placeholder="50"
                  value={salary}
                  setValue={setSalary}
                  label={`${t("teachersEditLabel")} (%)`}
                  required={true}
                  name={"salary"}
                />
                <InputComp
                  placeholder="+99890-000-00-00"
                  value={phone}
                  setValue={setPhone}
                  label={t("addStudentsTel")}
                  required={true}
                  name={"phone"}
                  inputProps={TextMaskCustom}
                />
                <InputComp
                  placeholder="@telegram_username"
                  value={telegram}
                  setValue={setTelegram}
                  label={t("addStudentsTelegram")}
                  name={"telegram"}
                />
                <InputComp
                  placeholder="Matematika"
                  value={notes}
                  setValue={setNotes}
                  label={t("addStudentsNote")}
                  name={"note"}
                />
              </>
            )}
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
                onClick={() => setEditMo(!editMo)}
                color="alsoWhite"
              >
                {t("addStudentsClose")}
              </Button>
              <LoadingButton
                loading={saving}
                variant="contained"
                color="blue"
                onClick={handleUpdateData}
              >
                {t("addStudentsSave")}
              </LoadingButton>
            </Box>
          </Box>
        </motion.div>
      </Modal>
    </>
  );
});

export default EditMo;
